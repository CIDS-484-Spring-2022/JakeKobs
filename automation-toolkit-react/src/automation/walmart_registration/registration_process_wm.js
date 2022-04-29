const {
  fName_input,
  lName_input,
  email_input,
  password_input,
  submit_btn,
  error_message,
  keep_signed_in_chkbox,
  newsletter_chkbox,
  px_block,
} = require("./page_elements");

const genName = require("../../helper_funcs/name_gen");

const getRandomMs = require("../../helper_funcs/type_speed_randomizer");

async function beginWalmartRegistration(data) {
  var { dataArray, username, password, proxyUser, proxyPass, browser } = data;
  const page = await browser.newPage();
  await page.authenticate({ username: proxyUser, password: proxyPass });
  try {
    await page.goto("https://www.walmart.com/account/signup?vid=oaoh", {
      timeout: 60000,
    });
  } catch (err) {
    await browser.close();
  }

  await (
    await page.waitForXPath(fName_input)
  ).type(genName()[0], {
    delay: getRandomMs(),
  });
  await (
    await page.waitForXPath(lName_input)
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
  return dataArray;
}

module.exports = { beginWalmartRegistration };
