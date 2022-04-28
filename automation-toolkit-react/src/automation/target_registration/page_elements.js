//Account registration page elements
const email_input = "//input[@name='usernamecreateaccount']";
const fname_input = "//input[@name='firstnamecreateaccount']";
const lname_input = "//input[@name='lastnamecreateaccount']";
const password_input = "//input[@name='passwordcreateaccount']";
const create_account = "//button[@id='createAccount']";
const success_message = "//h3[contains(text(),'Join to get these')]";
const error_message =
  "#__next > div:nth-child(2) > div > div.styles__ContentWrapper-sc-19gc5cv-1.ivxWTl > div > div.styles__GspForm-sc-111kqpe-0.kztkfq > div > div > div";
module.exports = {
  create_account,
  email_input,
  fname_input,
  lname_input,
  password_input,
  success_message,
  error_message,
};
