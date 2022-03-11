const { fs } = require("../config/config");
const { logToErrorFile } = require("../helper_funcs/logger");
const processDataset = require("../helper_funcs/account_parser");
const registration_data = require("../storage_objects/registration_data");
const {
    beginTargetRegistration,
} = require("./target_registration/registration_process_target");

const {
    beginBestbuyRegistration,
} = require("./bestbuy_registration/registration_process_bestbuy");
const {
    beginWalmartRegistration,
} = require("./walmart_registration/registration_process_wm");

function beginRegistration(acc_file, selection_num) {
    fs.readFile(acc_file, "utf-8", async(err, data) => {
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
                let reg_data = new registration_data(
                    dataArray,
                    username,
                    password,
                    proxyUser,
                    proxyPass,
                    browser
                );
                if (selection_num == "1") {
                    dataArray = await beginTargetRegistration(reg_data);
                } else if (selection_num == "2") {
                    dataArray = await beginWalmartRegistration(reg_data);
                } else if (selection_num == "3") {
                    dataArray = await beginBestbuyRegistration(reg_data);
                }
            }
        }
    });
}

module.exports = beginRegistration;