const axios = require("axios");
const {
  account_tab,
  create_acc_tab_btn,
  fname_input_bestbuy,
  lname_input_bestbuy,
  email_input_bestbuy,
  password_input_bestbuy,
  confirm_password_input,
  phone_input,
  create_acc_btn,
  success_message_bestbuy,
} = require("./automation/bestbuy_registration/page_elements");
const {
  create_account,
  email_input_target,
  fname_input_target,
  lname_input_target,
  password_input_target,
  success_message_target,
} = require("./automation/target_registration/page_elements");

const {
  fName_input_walmart,
  lName_input_walmart,
  email_input_walmart,
  password_input_walmart,
  submit_btn,
  keep_signed_in_chkbox,
  newsletter_chkbox,
  px_block,
} = require("./automation/walmart_registration/page_elements");
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

app.post("/Best%20Buy", async (req, res) => {
  console.log(req.body.taskData);
  let {
    id,
    username,
    password,
    proxy,
    site,
    proxyGroupName,
    accGroupName,
    status,
  } = req.body.taskData;
  await axios.put(`http://localhost:3500/tasks/${id}`, {
    id,
    username,
    password,
    proxy,
    site,
    proxyGroupName,
    accGroupName,
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
    await page.waitForXPath(fname_input_bestbuy)
  ).type(genName()[0], {
    delay: getRandomMs(),
  });
  await (
    await page.waitForXPath(lname_input_bestbuy)
  ).type(genName()[1], {
    delay: getRandomMs(),
  });
  await (
    await page.waitForXPath(email_input_bestbuy)
  ).type(username, {
    delay: getRandomMs(),
  });
  await (
    await page.waitForXPath(password_input_bestbuy)
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
    await page.waitForXPath(success_message_target, { timeout: 5000 });
  } else {
  }
  await browser.close();
});

app.post("/Target", async (req, res) => {
  let {
    id,
    username,
    password,
    proxy,
    site,
    proxyGroupName,
    accGroupName,
    status,
  } = req.body.taskData;
  await axios.put(`http://localhost:3500/tasks/${id}`, {
    id,
    username,
    password,
    proxy,
    site,
    proxyGroupName,
    accGroupName,
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
  await page.authenticate({ username: proxyUsername, password: proxyPassword });
  try {
    await page.goto("https://www.target.com/account", { timeout: 60000 });
  } catch (err) {
    await browser.close();
  }
  await (await page.waitForXPath(create_account)).click();
  await (
    await page.waitForXPath(email_input_target)
  ).type(username, {
    delay: getRandomMs(),
  });
  await (
    await page.waitForXPath(fname_input_target)
  ).type(genName()[0], {
    delay: getRandomMs(),
  });
  await (
    await page.waitForXPath(lname_input_target)
  ).type(genName()[1], {
    delay: getRandomMs(),
  });
  await (
    await page.waitForXPath(password_input_target)
  ).type(password, {
    delay: getRandomMs(),
  });
  await (await page.waitForXPath(create_account)).click();
  try {
    await page.waitForXPath(success_message_bestbuy, { timeout: 5000 });
  } catch (err) {
  } finally {
    await browser.close();
  }
});

app.post("/Walmart", async (req, res) => {
  let {
    id,
    username,
    password,
    proxy,
    site,
    proxyGroupName,
    accGroupName,
    status,
  } = req.body.taskData;
  await axios.put(`http://localhost:3500/tasks/${id}`, {
    id,
    username,
    password,
    proxy,
    site,
    proxyGroupName,
    accGroupName,
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
  await page.authenticate({ username: proxyUsername, password: proxyPassword });
  try {
    await page.goto("https://www.walmart.com/account/signup?vid=oaoh", {
      timeout: 60000,
    });
  } catch (err) {
    await browser.close();
  }

  await (
    await page.waitForXPath(fName_input_walmart)
  ).type(genName()[0], {
    delay: getRandomMs(),
  });
  await (
    await page.waitForXPath(lName_input_walmart)
  ).type(genName()[1], {
    delay: getRandomMs(),
  });
  await (
    await page.waitForXPath(email_input_walmart)
  ).type(username, {
    delay: getRandomMs(),
  });
  await (
    await page.waitForXPath(password_input_walmart)
  ).type(password, {
    delay: getRandomMs(),
  });
  await (await page.waitForXPath(keep_signed_in_chkbox)).click();
  await (await page.waitForXPath(newsletter_chkbox)).click();
  await (await page.waitForXPath(submit_btn)).click();
  await page.waitForTimeout(300000);
  try {
    await page.waitForXPath(px_block, { timeout: 5000 });
  } catch (err) {
  } finally {
    await browser.close();
  }
});
app.listen(PORT, null, console.log(`Listening on port ${PORT}`));
