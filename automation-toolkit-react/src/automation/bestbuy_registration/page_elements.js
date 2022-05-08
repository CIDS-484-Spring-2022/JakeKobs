const account_tab = "//span[contains(text(),'Account')]";
const create_acc_tab_btn = "(//a[contains(text(),'Create Account')])[1]";
const fname_input_bestbuy = "//input[@id='firstName']";
const lname_input_bestbuy = "//input[@id='lastName']";
const email_input_bestbuy = "//input[@id='email']";
const password_input_bestbuy = "//input[@id='fld-p1']";
const confirm_password_input = "//input[@id='reenterPassword']";
const phone_input = "//input[@id='phone']";
const create_acc_btn = "//button[contains(text(),'Create an Account')]";
const success_message_bestbuy = "//span[contains(text(),'Welcome back')]";
module.exports = {
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
};
