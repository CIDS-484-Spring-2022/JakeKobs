const { fs } = require("../config/config");
const { logToErrorFile } = require("../helper_funcs/logger");
const processDataset = require("../helper_funcs/account_parser");
const {
  beginTargetRegistration,
} = require("./target_registration/registration_process_target");
function beginRegistration(acc_file, selection_num) {
  fs.readFile(acc_file, "utf-8", async (err, data) => {
    if (data.length == 0) {
      logToErrorFile(
        "'Account' file is empty. Please add accounts and proxies before continuing in the following format: username:password:proxy"
      );
      return;
    } else {
      var dataArray = data.split("\n");
      while (dataArray[0] != null || dataArray[0] != "") {
        let { username, password, proxyUser, proxyPass, browser } =
          await processDataset(dataArray);
        if (selection_num == "1") {
          dataArray = await beginTargetRegistration(
            acc_file,
            dataArray,
            username,
            password,
            proxyUser,
            proxyPass,
            browser
          );
        } else if (selection_num == "2") {
          console.log("Selected 2");
        }
      }
    }
  });
}

module.exports = beginRegistration;
