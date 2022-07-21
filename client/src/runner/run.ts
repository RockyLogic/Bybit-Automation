export const runner = async (taskCount: number, mode: number | string) => {
  switch (mode) {
    // Mode: 1
    case "accountGen":
      console.log("accountGen");
      break;

    // Mode: 2
    case "checkBal":
      console.log("checkBal");
      break;

    // Mode: 3
    case "checkPos":
      console.log("checkPos");
      break;

    // Mode: 4
    case "placeLimit":
      console.log("placeLimit");
      break;

    // Mode: 5
    case "placeMarket":
      console.log("placeMarket");
      break;

    // Catch All Mode
    default:
      console.log("[Error] Choose a valid option");
      break;
  }
};
