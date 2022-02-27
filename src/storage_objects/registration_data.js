class registration_data {
  constructor(
    acc_file,
    dataArray,
    username,
    password,
    proxyUser,
    proxyPass,
    browser
  ) {
    this.acc_file = acc_file;
    this.dataArray = dataArray;
    this.username = username;
    this.password = password;
    this.proxyUser = proxyUser;
    this.proxyPass = proxyPass;
    this.browser = browser;
  }
}

module.exports = registration_data;
