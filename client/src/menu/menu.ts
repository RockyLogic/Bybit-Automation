import { runner } from "../runner/run";
import { account } from "../types/account";
import { getConfig } from "../utils/misc/getConfig";
import { displayLogo } from "./displayLogo";
import { accountMenu } from "./subMenu/accountMenu";
import { moduleMenu } from "./subMenu/moduleMenu";

// Main menu
export const displayMenu = async (version: string) => {
    // Fetching User Inputs
    let config: object = await getConfig();

    // GUI Interface
    displayLogo(version);

    // Prompts Questions
    const account = await accountMenu();
    const mode = await moduleMenu();

    // Runner - takes params performs the logic
    await runner(account.account as account, mode.module);
};
