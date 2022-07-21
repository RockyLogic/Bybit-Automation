import chalk from "chalk";
import { appendFileSync } from "fs";

export abstract class Task {
  number: number;
  status: string;
  constructor(number: number) {
    this.number = number;
    this.status = "";
  }

  logSuccess(message: string) {
    console.log(
      chalk.greenBright(
        `[${new Date().toLocaleTimeString()}] - ${this.number} - ${message}`
      )
    );
    this.setStatus(message);
  }

  logStatus(message: string) {
    console.log(
      chalk.cyanBright(
        `[${new Date().toLocaleTimeString()}] - ${this.number} - ${message}`
      )
    );
    this.setStatus(message);
  }

  logError(message: string) {
    console.log(
      chalk.redBright(
        `[${new Date().toLocaleTimeString()}] - ${this.number} - ${message}`
      )
    );
    this.setStatus(message);
  }

  log(message: string) {
    console.log(
      chalk.yellowBright(
        `[${new Date().toLocaleTimeString()}] - ${this.number} - ${message}`
      )
    );
    this.setStatus(message);
  }

  logCheckout(username: string, password: string) {
    appendFileSync(
      `${process.cwd()}\\..\\accounts.txt`,
      `${username}:${password}\n`
    );
  }

  setStatus(message: string) {
    this.status = message;
  }

  abstract start(): Promise<void>;
}
