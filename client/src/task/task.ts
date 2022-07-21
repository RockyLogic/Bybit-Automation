import chalk from "chalk";

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
                `[${new Date().toLocaleTimeString()}] - ${
                    this.number
                } - ${message}`
            )
        );
        this.setStatus(message);
    }

    logStatus(message: string) {
        console.log(
            chalk.cyanBright(
                `[${new Date().toLocaleTimeString()}] - ${
                    this.number
                } - ${message}`
            )
        );
        this.setStatus(message);
    }

    logError(message: string) {
        console.log(
            chalk.redBright(
                `[${new Date().toLocaleTimeString()}] - ${
                    this.number
                } - ${message}`
            )
        );
        this.setStatus(message);
    }

    log(message: string) {
        console.log(
            chalk.yellowBright(
                `[${new Date().toLocaleTimeString()}] - ${
                    this.number
                } - ${message}`
            )
        );
        this.setStatus(message);
    }

    setStatus(message: string) {
        this.status = message;
    }

    // abstract start(): Promise<void>;
}
