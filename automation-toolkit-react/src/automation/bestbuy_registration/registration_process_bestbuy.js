import axios from "axios";
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
} = require("./page_elements");

const getRandomMs = require("../../helper_funcs/type_speed_randomizer");
const genName = require("../../helper_funcs/name_gen");

export default async function beginBestbuyRegistration(task) {
  await axios.post("http://localhost:4000/bestbuy", { data: { task } });
}
// console.log(browser);

//   let { id, username, password, proxy, site, status } = data["data"];
//   let { browser } = data["browser"];
//   const page = await browser.newPage();
//   await page.authenticate({ username: proxyUser, password: proxyPass });
//   try {
//     await page.goto("https://www.bestbuy.com", {
//       timeout: 60000,
//     });
//   } catch (err) {
//     await browser.close();
//   }
//   await (await page.waitForXPath(account_tab)).click();
//   await page.waitForTimeout(5000);
//   await (await page.waitForXPath(create_acc_tab_btn)).click();
//   await (await page.waitForXPath(fname_input)).type(genName()[0], {
//     delay: getRandomMs(),
//   });
//   await (await page.waitForXPath(lname_input)).type(genName()[1], {
//     delay: getRandomMs(),
//   });
//   await (await page.waitForXPath(email_input)).type(username, {
//     delay: getRandomMs(),
//   });
//   await (await page.waitForXPath(password_input)).type(password, {
//     delay: getRandomMs(),
//   });
//   await (await page.waitForXPath(confirm_password_input)).type(password, {
//     delay: getRandomMs(),
//   });
//   await (await page.waitForXPath(phone_input)).type(genName()[2], {
//     delay: getRandomMs(),
//   });
//   await (await page.waitForXPath(create_acc_btn)).click();
//   await page.waitForTimeout(10000);
//   if (page.url() === "https://www.bestbuy.com/site/customer/myaccount") {
//     console.log(page.url());
//     await page.waitForXPath(success_message, { timeout: 5000 });
//   } else {
//   }
//   await browser.close();
//   return dataArray;
