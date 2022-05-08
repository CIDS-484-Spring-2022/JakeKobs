//Account registration page elements
const email_input_target = "//input[@name='usernamecreateaccount']";
const fname_input_target = "//input[@name='firstnamecreateaccount']";
const lname_input_target = "//input[@name='lastnamecreateaccount']";
const password_input_target = "//input[@name='passwordcreateaccount']";
const create_account = "//button[@id='createAccount']";
const success_message_target = "//h3[contains(text(),'Join to get these')]";
const error_message =
  "#__next > div:nth-child(2) > div > div.styles__ContentWrapper-sc-19gc5cv-1.ivxWTl > div > div.styles__GspForm-sc-111kqpe-0.kztkfq > div > div > div";
module.exports = {
  create_account,
  email_input_target,
  fname_input_target,
  lname_input_target,
  password_input_target,
  success_message_target,
  error_message,
};
