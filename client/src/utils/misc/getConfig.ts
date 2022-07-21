import { readFileSync } from "fs";
import { sleep } from "./sleep";

export const getConfig = async () => {
    let config: object;
    try {
        config = JSON.parse(
            readFileSync(`${process.cwd()}\\..\\config.json`).toString()
        );
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
    console.log(`[${new Date().toLocaleTimeString()}] Processed Config`);
    await sleep(1000);
    return config;
};
