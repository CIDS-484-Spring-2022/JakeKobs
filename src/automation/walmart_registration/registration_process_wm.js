const {
  walmart_acc_fail_file,
  walmart_accs_file,
  walmart_acc_success_file,
} = require("../../config/config");

function beginWalmartRegistration(data) {
  const {
    acc_file,
    dataArray,
    username,
    password,
    proxyUser,
    proxyPass,
    browser,
  } = data;
  console.log(data);
}

module.exports = beginWalmartRegistration;
