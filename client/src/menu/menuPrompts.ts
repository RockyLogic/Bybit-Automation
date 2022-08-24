import { PromptObject } from "prompts";
import { getAccounts } from "../utils/misc/getAccounts";

export const autoCompleteMenu = (
    name: string,
    message: string,
    options: Map<string, object> | string[]
) => {
    let choices = [];
    if (options instanceof Map) {
        for (let [key, val] of options) {
            choices.push({ title: key, value: val });
        }
    } else {
        for (let x of options) {
            choices.push({ title: x, value: x });
        }
    }
    const prompt: PromptObject = {
        type: "autocomplete",
        name: name,
        message: message,
        choices: choices,
        initial: 0,
    };

    return prompt;
};

export const accountQuestion = async () => {
    let accountsMap: Map<string, object> = await getAccounts();
    let accountChoices = [];
    for (let [email, info] of accountsMap) {
        accountChoices.push({ title: email, value: info });
    }

    const accountQuestion: PromptObject = {
        type: "autocomplete",
        name: "account",
        message: "Account:",
        choices: accountChoices,
        initial: 0,
    };

    return accountQuestion;
};

export const moduleQuestion = () => {
    const taskOptions = [
        "deleteOrderActive",
        "deleteOrderCond",
        "deleteWithdraw",
        "getBalance",
        "getClosedPnL",
        "getOrdersActive",
        "getOrdersCond",
        "getPositions",
        "getRecordsDeposit",
        "getRecordsWithdraw",
        "getTradeRecords",
        "getWallet",
        "postChangeMargin",
        "postInternalTransfer",
        "postOrderActive",
        "postOrderCond",
        "postSetLeverage",
        "postStopLost",
        "postSwitchMargin",
        "postWithdraw",
        "changeAccount",
    ];

    let moduleOptions = [];

    for (let option of taskOptions) {
        moduleOptions.push({ title: option, value: option });
    }

    const moduleQuestion: PromptObject = {
        type: "autocomplete",
        name: "module",
        message: "Module:",
        choices: moduleOptions,
        initial: 0,
    };

    return moduleQuestion;
};
