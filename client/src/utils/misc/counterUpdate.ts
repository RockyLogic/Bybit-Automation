const setTitle = require("node-bash-title");
let success = 0,
  fail = 0;

export const updateCounter = async (checkout: boolean, failure: boolean) => {
  if (checkout && !failure) {
    success = success + 1;
    setTitle(`Checkout: ${success} | Failed Checkout: ${fail}`);
  } else if (!checkout && failure) {
    fail = fail + 1;
    setTitle(`Checkout: ${success} | Failed Checkout: ${fail}`);
  }
};
