const puppeteer = require("puppeteer");
const {
  fs,
  target_acc_fail_file,
  target_acc_success_file,
} = require("../../config/config");
const {
  create_account,
  email_input,
  fname_input,
  lname_input,
  password_input,
  success_message,
  error_message,
} = require("./page_elements");
const { logToErrorFile, logToEventFile } = require("../../helper_funcs/logger");
const processDataset = require("../../helper_funcs/account_parser");
const genName = require("../../helper_funcs/name_gen");
const {
  transferCredentials,
  fileCleanup,
} = require("../../helper_funcs/file_editor");
const getRandomMs = require("../../helper_funcs/type_speed_randomizer");
const { system } = require("faker");
const success_flag = 1;
const failure_flag = 0;
function beginTargetRegistration(target_acc_file) {
  fs.readFile(target_acc_file, "utf-8", async (err, data) => {
    if (data.length == 0) {
      logToErrorFile(
        "'Account' file is empty. Please add accounts and proxies before continuing in the following format: username:password:proxy"
      );
      return;
    } else {
      var dataArray = data.split("\n");

      while (dataArray[0] != null || dataArray[0] != "") {
        let { username, password, proxyUser, proxyPass, browser } =
          await processDataset(dataArray);
        const page = await browser.newPage();
        await page.authenticate({ username: proxyUser, password: proxyPass });
        try {
          await page.goto("https://www.target.com/account");
        } catch (err) {
          logToErrorFile("Slow or unusable proxy. Try a different proxy.");
          dataArray = transferCredentials(
            dataArray,
            target_acc_fail_file,
            failure_flag
          );
          await browser.close();
        }
        await (await page.waitForXPath(create_account)).click();
        await (
          await page.waitForXPath(email_input)
        ).type(username, { delay: getRandomMs() });
        await (
          await page.waitForXPath(fname_input)
        ).type(genName()[0], { delay: getRandomMs() });
        await (
          await page.waitForXPath(lname_input)
        ).type(genName()[1], { delay: getRandomMs() });
        await (
          await page.waitForXPath(password_input)
        ).type(password, { delay: getRandomMs() });
        await (await page.waitForXPath(create_account)).click();
        try {
          await page.waitForXPath(success_message, { timeout: 5000 });
          logToEventFile(`${username}'s account was created successfully.`);
          dataArray = transferCredentials(
            dataArray,
            target_acc_success_file,
            success_flag
          );
        } catch (err) {
          dataArray = transferCredentials(
            dataArray,
            target_acc_fail_file,
            failure_flag
          );

          var error = await page.$eval(
            error_message,
            (val) => username.value + " -> " + val.innerText
          );
          logToErrorFile(error);
        } finally {
          await browser.close();
          fileCleanup(dataArray, target_acc_file);
        }
      }
    }
  });
}

module.exports = beginTargetRegistration;
