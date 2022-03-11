const fName_input = "//input[@id='first-name-su']";
const lName_input = "//input[@id='last-name-su']";
const email_input = "//input[@id='email-su']";
const password_input = "//input[@id='password-su']";
const submit_btn = "(//button[contains(text(),'Create account')])[2]";
const error_message = "//div[@id='global-error']";
const keep_signed_in_chkbox = "//label[@for='remember-me-su']";
const newsletter_chkbox = "//label[@for='su-newsletter']";
const px_block = "//span[contains(text(),'Verify your identity')]";
module.exports = {
    fName_input,
    lName_input,
    email_input,
    password_input,
    submit_btn,
    error_message,
    keep_signed_in_chkbox,
    newsletter_chkbox,
    px_block,
};