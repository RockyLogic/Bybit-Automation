const chalk = require("chalk");

export const displayLogo = async (version: string) => {
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
};
