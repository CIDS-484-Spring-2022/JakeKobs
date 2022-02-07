const faker = require("faker");
function genName() {
  var fullName = faker.name.findName();
  var firstName = fullName.split(" ")[0];
  var lastName = fullName.split(" ")[1];
  return [firstName, lastName];
}

module.exports = genName;
