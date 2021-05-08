const execa = require("execa");
const chalk = require("chalk");

module.exports = class Push {
  constructor() {
    this.remote = "origin";
    this.upstream = false;
    this.branch = "main";
  }

  setRemote(value) {
      this.remote = value;
      return this;
  }

  setUpstream(value) {
      this.upstream = value;
      return this;
  }

  setBranch(value) {
      this.branch = value;
      return this;
  }

  async push() {
      if (this.upstream == true) {
          await execa("git", ["push", "--set-upstream", `${this.remote}`, `${this.branch}`])
              .catch(() => console.log(chalk.red.bold("ERROR"), "Is the correct remote ? Do you have the correct access ? Do you have pull before push ?"))
              .then(() => {
                  console.log(chalk.green.bold("DONE"), " Successfully pushed to your remote !")
              });
      } else {
          await execa("git", ["push", `${this.remote}`, `${this.branch}`])
              .catch(() => console.log(chalk.red.bold("ERROR"), "Is the correct remote ? Do you have the correct access ? Do you have pull before push ?"))
              .then(() => {
                  console.log(chalk.green.bold("DONE"), " Successfully pushed to your remote !")
              });
      }
      return this;
  }
};
