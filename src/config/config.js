/*
 * File's main purpose is to hold paths that can be passed to other files to reduce redundancy.
 */

const fs = require("fs");
const path = require("path");
//File Directories
const target_accs_file = path.join(
  __dirname,
  "../../accounts/target/accs_to_register.txt"
);
const errorLogFile = path.join(__dirname, "../../logs/error_log.txt");
const eventLogFile = path.join(__dirname, "../../logs/event_log.txt");
const config_file = path.join(__dirname, "config.json");
const target_acc_fail_file = path.join(
  __dirname,
  "../../accounts/target/accounts_failed_registration.txt"
);
const target_acc_success_file = path.join(
  __dirname,
  "../../accounts/target/registered_accounts.txt"
);
module.exports = {
  fs,
  target_accs_file,
  errorLogFile,
  eventLogFile,
  config_file,
  target_acc_fail_file,
  target_acc_success_file,
};
