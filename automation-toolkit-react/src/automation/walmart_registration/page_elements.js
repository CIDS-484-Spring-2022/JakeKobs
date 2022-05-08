const fName_input_walmart = "//input[@id='first-name-su']";
const lName_input_walmart = "//input[@id='last-name-su']";
const email_input_walmart = "//input[@id='email-su']";
const password_input_walmart = "//input[@id='password-su']";
const submit_btn = "(//button[contains(text(),'Create account')])[2]";
const error_message = "//div[@id='global-error']";
const keep_signed_in_chkbox = "//label[@for='remember-me-su']";
const newsletter_chkbox = "//label[@for='su-newsletter']";
const px_block = "//span[contains(text(),'Verify your identity')]";
module.exports = {
  fName_input_walmart,
  lName_input_walmart,
  email_input_walmart,
  password_input_walmart,
  submit_btn,
  error_message,
  keep_signed_in_chkbox,
  newsletter_chkbox,
  px_block,
};
