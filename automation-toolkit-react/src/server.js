const axios = require("axios");
const {
  account_tab,
  create_acc_tab_btn,
  fname_input,
  lname_input,
  email_input,
  password_input,
  confirm_password_input,
  phone_input,
  create_acc_btn,
  success_message,
} = require("./automation/bestbuy_registration/page_elements");

const genName = require("./helper_funcs/name_gen");
const getRandomMs = require("./helper_funcs/type_speed_randomizer");
const puppeteer = require("puppeteer-extra");
const bodyParser = require("body-parser");
const cors = require("cors");
const express = require("express");
const taskFile = require("./jsonData/tasks.json");
const ProxySplicer = require("./helper_funcs/proxySplicer");
const app = express();
const PORT = 4000;
app.use(cors());
app.use(bodyParser.json());
app
  .post("/bestbuy", async (req, res) => {
    console.log(req.body.taskData);
    let { id, username, password, proxy, site, status } = req.body.taskData;
    await axios.put(`http://localhost:3500/tasks/${id}`, {
      id,
      username,
      password,
      proxy,
      site,
      status: "Running...",
    });
    let { proxyUsername, proxyPassword, proxyServer } = ProxySplicer(proxy);
    let browser = await puppeteer.launch({
      headless: false,
      defaultViewport: null,
      executablePath:
        "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
      args: [
        `--proxy-server=${proxyServer}`,
        "--no-sandbox",
        "--disable-setuid-sandbox",
      ],
    });

    const page = await browser.newPage();
    await page.authenticate({
      username: proxyUsername,
      password: proxyPassword,
    });
    try {
      await page.goto("https://www.bestbuy.com", {
        timeout: 60000,
      });
    } catch (err) {
      await browser.close();
    }
    await (await page.waitForXPath(account_tab)).click();
    await page.waitForTimeout(15000);
    await (await page.waitForXPath(create_acc_tab_btn)).click();
    await (
      await page.waitForXPath(fname_input)
    ).type(genName()[0], {
      delay: getRandomMs(),
    });
    await (
      await page.waitForXPath(lname_input)
    ).type(genName()[1], {
      delay: getRandomMs(),
    });
    await (
      await page.waitForXPath(email_input)
    ).type(username, {
      delay: getRandomMs(),
    });
    await (
      await page.waitForXPath(password_input)
    ).type(password, {
      delay: getRandomMs(),
    });
    await (
      await page.waitForXPath(confirm_password_input)
    ).type(password, {
      delay: getRandomMs(),
    });
    await (
      await page.waitForXPath(phone_input)
    ).type(genName()[2], {
      delay: getRandomMs(),
    });
    await (await page.waitForXPath(create_acc_btn)).click();
    await page.waitForTimeout(10000);
    if (page.url() === "https://www.bestbuy.com/site/customer/myaccount") {
      console.log(page.url());
      await page.waitForXPath(success_message, { timeout: 5000 });
    } else {
    }
    await browser.close();
  })
  .listen(PORT, null, console.log(`Listening on port ${PORT}`));
