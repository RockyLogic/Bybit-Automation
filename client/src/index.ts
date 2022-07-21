import { displayMenu } from "./menu/menu";
import auth from "./auth/auth";

const VERSION = "BETA v1.0.0";

async function start() {
    console.clear();

    // Authentication
    const authenticated = await auth();
    if (authenticated === true) {
        await displayMenu(VERSION);
    } else {
        console.log("[Error] Access Denied Authentication Failed");
    }
}
start();

process.on("SIGINT", () => {
    process.exit();
});
