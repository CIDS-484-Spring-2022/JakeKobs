const { target_accs_file, config_file } = require("../src/config/config");
const beginTargetRegistration = require("./automation/target_registration/registration_process");
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

const getUserOption = () => {
  readline.question(
    "Press (1) to start the Target account registration process.\n",
    main
  );
};

function main(answer) {
  if (answer !== "1") {
    console.log(`'${answer}' is not a valid selection. Please try again.`);
    return getUserOption();
  }
  readline.close();
  switch (Number(answer)) {
    case 1:
      beginTargetRegistration(target_accs_file);
      break;
  }
  return;
}

getUserOption();
