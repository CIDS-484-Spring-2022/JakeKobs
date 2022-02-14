const puppeteer = require("puppeteer");
const fs = require("fs");
async function processDataset(dataArray) {
  try {
    let userDataArr = dataArray[0].split(":");
    let username = userDataArr[0];
    let password = userDataArr[1];
    let proxyArr = userDataArr.slice(2);
    let proxyString = proxyArr[0] + ":" + proxyArr[1];
    let proxyUser = proxyArr[2];
    let proxyPass = proxyArr[3].replace("\r", "");
    let browser = await puppeteer.launch({
      headless: false,
      defaultViewport: null,
      args: [`--proxy-server=${proxyString}`],
    });

    return { username, password, proxyUser, proxyPass, browser };
  } catch (err) {
    console.log("Registration file is empty. Terminating application.");
    process.exit(0);
  }
}

module.exports = processDataset;
