const {
  create_account,
  email_input,
  fname_input,
  lname_input,
  password_input,
  success_message,
  error_message,
} = require("./page_elements");
const genName = require("../../helper_funcs/name_gen");

const getRandomMs = require("../../helper_funcs/type_speed_randomizer");

async function beginTargetRegistration(data) {
  const page = await browser.newPage();
  await page.authenticate({ username: proxyUser, password: proxyPass });
  try {
    await page.goto("https://www.target.com/account", { timeout: 60000 });
  } catch (err) {
    await browser.close();
  }
  await (await page.waitForXPath(create_account)).click();
  await (
    await page.waitForXPath(email_input)
  ).type(username, {
    delay: getRandomMs(),
  });
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
    await page.waitForXPath(password_input)
  ).type(password, {
    delay: getRandomMs(),
  });
  await (await page.waitForXPath(create_account)).click();
  try {
    await page.waitForXPath(success_message, { timeout: 5000 });
  } catch (err) {
  } finally {
    await browser.close();
  }
}

module.exports = { beginTargetRegistration };
