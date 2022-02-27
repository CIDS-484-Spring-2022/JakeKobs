const { target_accs_file, walmart_accs_file } = require("../src/config/config");
const beginRegistration = require("./automation/registration_process");
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

const getUserOption = () => {
  readline.question(
    "Press (1) to start the Target account registration process.\n" +
      "Press (2) to start the Walmart account registration process.\n",
    main
  );
};

function main(answer) {
  if (answer !== "1" && answer !== "2") {
    console.log(`'${answer}' is not a valid selection. Please try again.`);
    return getUserOption();
  }
  readline.close();
  switch (Number(answer)) {
    case 1:
      beginRegistration(target_accs_file, answer);
      break;
    case 2:
      beginRegistration(walmart_accs_file, answer);
      break;
  }
  return;
}

getUserOption();
