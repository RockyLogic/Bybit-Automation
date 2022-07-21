const setTitle = require("node-bash-title");

export const initiateCounter = async () => {
  setTitle(`Checkout: 0 | Failed Checkout: 0`);
};
