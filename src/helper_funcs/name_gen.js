const faker = require("faker");

function genName() {
    var fullName = "";
    var firstName = "";
    var lastName = "";
    var phoneNum = "";
    //Loop ensures we don't get a first name that's a prefix, such as "Mr.", "Mrs.", etc...
    do {
        fullName = faker.name.findName();
        firstName = fullName.split(" ")[0];
        lastName = fullName.split(" ")[1];
    } while (firstName.length < 5);
    do {
        phoneNum = faker.phone.phoneNumber();
    } while (phoneNum.startsWith("1"));
    return [firstName, lastName, phoneNum];
}

module.exports = genName;