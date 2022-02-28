const getRandomMs = require("../../helper_funcs/type_speed_randomizer");
const genName = require("../../helper_funcs/name_gen");

const {
  walmart_acc_fail_file,
  walmart_accs_file,
  walmart_acc_success_file,
} = require("../../config/config");

const {
  first_name_input,
  last_name_input,
  email_input,
  password_input,
  remember_me_checkbox,
  newsletter_checkbox,
  create_acc_btn,
} = require("../walmart_registration/page_elements");
async function beginWalmartRegistration(data) {
  const { dataArray, username, password, proxyUser, proxyPass, browser } = data;
  const page = await browser.newPage();
  await page.authenticate({ username: proxyUser, password: proxyPass });
  try {
    await page.goto(
      "https://www.walmart.com/account/signup?vid=oaoh&ref=domain",
      { timeout: 60000 }
    );
  } catch (err) {
    logToErrorFile("Slow or unusable proxy. Try a different proxy.");
    dataArray = transferCredentials(
      dataArray,
      walmart_acc_fail_file,
      failure_flag
    );
    await browser.close();
  }
  await (
    await page.waitForXPath(first_name_input)
  ).type(genName()[0], { delay: getRandomMs() });
  await (
    await page.waitForXPath(last_name_input)
  ).type(genName()[1], { delay: getRandomMs() });
  await (
    await page.waitForXPath(email_input)
  ).type(username, { delay: getRandomMs() });
  await (
    await page.waitForXPath(password_input)
  ).type(password, { delay: getRandomMs() });
  await (await page.waitForXPath(remember_me_checkbox)).click();
  await (await page.waitForXPath(newsletter_checkbox)).click();
  await (await page.waitForXPath(create_acc_btn)).click();
}

module.exports = beginWalmartRegistration;
