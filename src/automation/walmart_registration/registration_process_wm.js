const {
    fName_input,
    lName_input,
    email_input,
    password_input,
    submit_btn,
    error_message,
    keep_signed_in_chkbox,
    newsletter_chkbox,
    px_block,
} = require("./page_elements");

const {
    walmart_acc_fail_file,
    walmart_acc_success_file,
    walmart_accs_file,
} = require("../../config/config");
const { logToErrorFile, logToEventFile } = require("../../helper_funcs/logger");
const genName = require("../../helper_funcs/name_gen");
const {
    transferCredentials,
    fileCleanup,
} = require("../../helper_funcs/file_editor");
const getRandomMs = require("../../helper_funcs/type_speed_randomizer");
const success_flag = 1;
const failure_flag = 0;

async function beginWalmartRegistration(data) {
    var { dataArray, username, password, proxyUser, proxyPass, browser } = data;
    const page = await browser.newPage();
    await page.authenticate({ username: proxyUser, password: proxyPass });
    try {
        await page.goto("https://www.walmart.com/account/signup?vid=oaoh", {
            timeout: 60000,
        });
    } catch (err) {
        logToErrorFile("Slow or unusable proxy. Try a different proxy.");
        dataArray = transferCredentials(
            dataArray,
            walmart_acc_fail_file,
            failure_flag
        );
        await browser.close();
    }

    await (
        await page.waitForXPath(fName_input)
    ).type(genName()[0], {
        delay: getRandomMs(),
    });
    await (
        await page.waitForXPath(lName_input)
    ).type(genName()[1], {
        delay: getRandomMs(),
    });
    await (
        await page.waitForXPath(email_input)
    ).type(username, {
        delay: getRandomMs(),
    });
    await (
        await page.waitForXPath(password_input)
    ).type(password, {
        delay: getRandomMs(),
    });
    await (await page.waitForXPath(keep_signed_in_chkbox)).click();
    await (await page.waitForXPath(newsletter_chkbox)).click();
    await (await page.waitForXPath(submit_btn)).click();
    await page.waitForTimeout(300000);
    try {
        await page.waitForXPath(px_block, { timeout: 5000 });
        logToEventFile(
            `Walmart -> ${username}'s account wasn't created successfully due to PX.`
        );
    } catch (err) {
        var error = await page.$eval(
            error_message,
            (val) => "Target: " + username.value + " -> " + val.innerText
        );
        logToErrorFile(error);
    } finally {
        dataArray = transferCredentials(
            dataArray,
            walmart_acc_fail_file,
            failure_flag
        );
        await browser.close();
        fileCleanup(dataArray, walmart_accs_file);
    }
    return dataArray;
}

module.exports = { beginWalmartRegistration };