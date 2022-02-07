//Account registration page elements
const email_input = "//input[@name='usernamecreateaccount']";
const fname_input = "//input[@name='firstnamecreateaccount']";
const lname_input = "//input[@name='lastnamecreateaccount']";
const password_input = "//input[@name='passwordcreateaccount']";
const create_account = "//button[@id='createAccount']";
const success_message = "//h3[contains(text(),'Join to get these')]";
module.exports = {
  create_account,
  email_input,
  fname_input,
  lname_input,
  password_input,
  success_message,
};
