import fs from "fs";
import readline from "readline";
import { sleep } from "./sleep";

export const getAccounts = async () => {
    let accountsMap: Map<string, object> = new Map();
    let accounts: string[][] = [];

    try {
        const stream: fs.ReadStream = fs.createReadStream(
            `${process.cwd()}\\..\\accounts.csv`
        );
        const reader = readline.createInterface({ input: stream });

        reader.on("line", (row) => {
            let account = row.replace(/\s+/g, "").split(",");
            if (account.length != 4) {
                throw new Error(`Check format of account.csv`);
            }
            accounts.push(account);
        });

        reader.on("close", () => {
            accountsMap.set("Not Applicable", {});
            accounts.forEach((account) => {
                accountsMap.set(account[0], {
                    email: account[0],
                    pass: account[1],
                    apiKey: account[2],
                    apiSecret: account[3],
                });
            });
        });
    } catch (error) {
        if (error instanceof Error) {
            console.log(
                `[${new Date().toLocaleTimeString()}] ${error.message}`
            );
        } else {
            console.log(`[${new Date().toLocaleTimeString()}] ${error}`);
        }
        process.exit();
    }

    await sleep(1000);

    return accountsMap;
};
