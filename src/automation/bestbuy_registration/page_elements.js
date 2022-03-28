const account_tab = "//span[contains(text(),'Account')]";
const create_acc_tab_btn = "(//a[contains(text(),'Create Account')])[1]";
const fname_input = "//input[@id='firstName']";
const lname_input = "//input[@id='lastName']";
const email_input = "//input[@id='email']";
const password_input = "//input[@id='fld-p1']";
const confirm_password_input = "//input[@id='reenterPassword']";
const phone_input = "//input[@id='phone']";
const create_acc_btn = "//button[contains(text(),'Create an Account')]";
const success_message = "//span[contains(text(),'Welcome back')]";
module.exports = {
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
};