const faker = require("faker");

function genName() {
    var fullName = "";
    var firstName = "";
    var lastName = "";
    //Loop ensures we don't get a first name that's a prefix, such as "Mr.", "Mrs.", etc...
    do {
        fullName = faker.name.findName();
        firstName = fullName.split(" ")[0];
        lastName = fullName.split(" ")[1];
    } while (firstName.length < 5);
    return [firstName, lastName];
}

module.exports = genName;