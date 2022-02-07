const { fs } = require("../config/config");
/*
 * File with reusable functions that keep account files clean/readable/parseable.

 *Credentials will be sent to a predetermined account file depending on success/
 *failure of program's execution. If acc fails registration -> fail file.
 *If successful, accounts go to registered_account file. 
 */
function transferCredentials(data_array, index, transfer_file, flag) {
  //remove credentials and proxy from array.
  var data = data_array.splice(index, 1)[0];
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

module.exports = { transferCredentials };
