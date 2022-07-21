import { printTitle } from "./menu/menu";
import { initiateCounter } from "./utils/misc/counterInit";
import auth from "./auth/auth";

const VERSION = "BETA v1.0.0";

async function start() {
  const success = await auth();
  console.clear();
  if (success === true) {
    await initiateCounter();
    await printTitle(VERSION);
  } else {
    console.log("[Error] Access Denied");
  }
}
start();

process.on("SIGINT", () => {
  process.exit();
});
