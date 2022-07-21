const chalk = require("chalk");
import prompts, { PromptObject } from "prompts";
import { runner } from "../runner/run";
import { getConfig } from "../utils/misc/getConfig";

export const printTitle = async (version: string) => {
  const config = getConfig();

  const moduleQuestion: PromptObject = {
    type: "select",
    name: "module",
    message: "Module:",
    choices: [
      {
        title: "Account Generator",
        value: "accountGen",
      },
      {
        title: "Check Balance",
        value: "checkBal",
      },
      {
        title: "Check Open Positions",
        value: "checkPos",
      },
      {
        title: "Place Limit",
        value: "placeLimit",
      },
      {
        title: "Place Market",
        value: "placeMarket",
      },
    ],
    initial: 0,
  };

  const taskQuestions: PromptObject = {
    type: "number",
    name: "tasksAmount",
    message: "How Many Tasks Do You Want To Run?",
    initial: 1,
    min: 1,
    max: 10,
  };

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

  const mode = await prompts(moduleQuestion);
  const tasksAmount = await prompts(taskQuestions);

  switch (mode.module) {
    case "accountGen":
      await runner(tasksAmount.tasksAmount, mode.module);
      break;

    case "checkBal":
      await runner(tasksAmount.tasksAmount, mode.module);
      break;

    case "checkPos":
      await runner(tasksAmount.tasksAmount, mode.module);
      break;

    case "placeLimit":
      await runner(tasksAmount.tasksAmount, mode.module);
      break;

    case "placeMarket":
      await runner(tasksAmount.tasksAmount, mode.module);
      break;

    default: // To Do: Remove later
      console.log("[Error] Choose a valid option");
      break;
  }
};
