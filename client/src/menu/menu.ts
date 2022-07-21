const chalk = require("chalk");
import prompts from "prompts";
import { runner } from "../runner/run";
import { getConfig } from "../utils/misc/getConfig";
import { accountQuestion, moduleQuestion } from "./menuPrompts";

// Main menu
export const displayMenu = async (version: string) => {
    // Fetching User Inputs
    let config: object = await getConfig();

    // GUI Interface
    console.clear();
    console.log(`
  ██████╗ ██╗   ██╗██████╗ ██╗████████╗   █████╗ ██╗ █████╗ 
  ██╔══██╗╚██╗ ██╔╝██╔══██╗██║╚══██╔══╝  ██╔══██╗██║██╔══██╗
  ██████╦╝ ╚████╔╝ ██████╦╝██║   ██║     ███████║██║██║  ██║
  ██╔══██╗  ╚██╔╝  ██╔══██╗██║   ██║     ██╔══██║██║██║  ██║
  ██████╦╝   ██║   ██████╦╝██║   ██║     ██║  ██║██║╚█████╔╝
  ╚═════╝    ╚═╝   ╚═════╝ ╚═╝   ╚═╝     ╚═╝  ╚═╝╚═╝ ╚════╝ 
  `);
    console.log(chalk.magenta(`Current Version: ${version}`));
    console.log("-----------------------------------------------");

    // Prompts Questions
    const account = await prompts(await accountQuestion());
    const mode = await prompts(await moduleQuestion());

    // Runner - takes params performs the logic
    await runner(account.account, mode.module);

    // Loops back to main menu
    displayMenu(version);
};
