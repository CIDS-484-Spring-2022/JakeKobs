const puppeteer = require("puppeteer");
const bodyParser = require("body-parser");
const cors = require("cors");
const express = require("express");
const taskFile = require("./jsonData/tasks.json");
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.post("/bestbuy", async (req, res) => {
  console.log(req.body.data["task"]);
  let browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
    executablePath:
      "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
    args: [
      `--proxy-server=139.171.101.201:6476`,
      "--no-sandbox",
      "--disable-setuid-sandbox",
    ],
  });
});
app.listen(4000, null, console.log("listening on port 4000"));
