const {
    account_tab,
    create_acc_tab_btn,
    fname_input,
    lname_input,
    email_input,
    password_input,
    confirm_password_input,
    phone_input,
    create_acc_btn,
    fs,
} = require("./page_elements");

const {
    bestbuy_acc_fail_file,
    bestbuy_acc_success_file,
} = require("../../config/config");
const getRandomMs = require("../../helper_funcs/type_speed_randomizer");
const genName = require("../../helper_funcs/name_gen");
async function beginBestbuyRegistration(data) {
    var { dataArray, username, password, proxyUser, proxyPass, browser } = data;
    const page = await browser.newPage();
    await page.authenticate({ username: proxyUser, password: proxyPass });
    try {
        await page.goto(
            "https://www.bestbuy.com/identity/newAccount?token=tid%3Ad9736f26-a93e-11ec-bf7f-1256875fc59f", {
                timeout: 60000,
            }
        );
    } catch (err) {
        logToErrorFile("Slow or unusable proxy. Try a different proxy.");
        dataArray = transferCredentials(
            dataArray,
            bestbuy_acc_fail_file,
            failure_flag
        );
        await browser.close();
    }

    // await (await page.waitForXPath(account_tab)).click();

    // await page.waitForTimeout(5000);

    // await (await page.waitForXPath(create_acc_tab_btn)).click();

    await (
        await page.waitForXPath(fname_input)
    ).type(genName()[0], { delay: getRandomMs() });

    await (
        await page.waitForXPath(lname_input)
    ).type(genName()[1], { delay: getRandomMs() });

    await (
        await page.waitForXPath(email_input)
    ).type(username, { delay: getRandomMs() });

    await (
        await page.waitForXPath(password_input)
    ).type(password, { delay: getRandomMs() });

    await (
        await page.waitForXPath(confirm_password_input)
    ).type(password, { delay: getRandomMs() });

    await (
        await page.waitForXPath(phone_input)
    ).type(genName()[2], { delay: getRandomMs() });

    await (await page.waitForXPath(create_acc_btn)).click();
    await page.waitForTimeout(3000);
}

module.exports = { beginBestbuyRegistration };