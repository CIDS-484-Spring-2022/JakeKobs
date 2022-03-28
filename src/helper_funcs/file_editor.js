const { fs } = require("../config/config");
/*
 * File with reusable functions that keep account files clean/readable/parseable.

 *Credentials will be sent to a predetermined account file depending on success/
 *failure of program's execution. If acc fails registration -> fail file.
 *If successful, accounts go to registered_account file. 
 */
function transferCredentials(data_array, transfer_file, flag) {
    //remove credentials and proxy from array.
    var data = data_array.splice(0, 1)[0];
    console.log(data_array);
    //append credentials to file.
    fs.appendFile(transfer_file, data + "\n", (err) => {
        if (err) throw err;
        if (flag == 1) {
            console.log(`Sending credentials and proxy to registered accounts file.`);
        } else if (flag == 0) {
            console.log(`Sending credentials and proxy to failed accounts file.`);
        }
    });
    return data_array;
}

function fileCleanup(data_array, registration_file) {
    console.log("Cleaning up file");
    var dataArrayString = data_array.join("\n");
    fs.writeFileSync(registration_file, dataArrayString);
}

module.exports = { transferCredentials, fileCleanup };