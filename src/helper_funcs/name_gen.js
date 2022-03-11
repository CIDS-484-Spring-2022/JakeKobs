const faker = require("faker");

function genName() {
    var fullName = "";
    var firstName = "";
    var lastName = "";
    do {
        fullName = faker.name.findName();
        firstName = fullName.split(" ")[0];
        lastName = fullName.split(" ")[1];
    } while (fullName.length < 5);
    return [firstName, lastName];
}

module.exports = genName;