const { errorLogFile, eventLogFile, fs } = require("../config/config");
function getDateTime() {
  let currentdate = new Date();
  let datetime =
    currentdate.getDate() +
    "/" +
    (currentdate.getMonth() + 1) +
    "/" +
    currentdate.getFullYear() +
    " @ " +
    currentdate.getHours() +
    ":" +
    currentdate.getMinutes() +
    ":" +
    currentdate.getSeconds();
  return datetime;
}
var logToErrorFile = (val) => {
  let datetime = getDateTime();
  fs.appendFile(errorLogFile, datetime + ":" + val + "\n", () => {
    console.log("Error Logged: " + val);
  });
};
var logToEventFile = (val) => {
  let datetime = getDateTime();
  fs.appendFile(eventLogFile, datetime + ":" + val + "\n", () => {
    console.log("\x1b[31m", `Event Logged:  + ${val}`);
  });
};

module.exports = { logToErrorFile, logToEventFile };
