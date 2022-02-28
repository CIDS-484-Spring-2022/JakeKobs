class registration_data {
  constructor(dataArray, username, password, proxyUser, proxyPass, browser) {
    this.dataArray = dataArray;
    this.username = username;
    this.password = password;
    this.proxyUser = proxyUser;
    this.proxyPass = proxyPass;
    this.browser = browser;
  }
}

module.exports = registration_data;
