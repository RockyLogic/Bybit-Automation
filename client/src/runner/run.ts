import { moduleMenu } from "../menu/subMenu/moduleMenu";
import { Bybit } from "../task/impl/bybit";
import { displayMenu } from "../menu/menu";
import { displayLogo } from "../menu/displayLogo";
import { account } from "../types/account";

export const runner = async (account: account, mode: number | string) => {
    console.clear();
    displayLogo("BETA v1.0.0");
    console.log(`Account: >> ${account.email}`);

    const bybitAccount = new Bybit(account, 0);

    switch (mode) {
        // Mode: 1
        case "accountGen":
            console.log("accountGen");
            break;

        // GET REQUESTS ---------------------------
        // Mode: 2
        case "getBalance":
            await bybitAccount.getBalance();
            break;

        // Mode: 3
        case "getClosedPnL":
            await bybitAccount.getClosedPnL();
            break;

        // Mode: 4
        case "getOrdersActive":
            await bybitAccount.getOrdersActive();
            break;

        // Mode: 5
        case "getOrdersCond":
            await bybitAccount.getOrdersCond();
            break;

        // Mode: 6
        case "getPositions":
            await bybitAccount.getPositions();
            break;

        // Mode: 7
        case "getRecordsDeposit":
            await bybitAccount.getRecordsDeposit();
            break;

        // Mode: 8
        case "getRecordsWithdraw":
            await bybitAccount.getRecordsWithdraw();
            break;

        // POST REQUESTS ---------------------------
        // Mode: 9
        case "postOrderActive":
            await bybitAccount.postOrderActive();
            break;

        // Mode: 10
        case "postOrderCond":
            await bybitAccount.getRecordsWithdraw();
            break;

        // Mode: 11
        case "postStopLost":
            await bybitAccount.getRecordsWithdraw();
            break;

        // Mode: 12
        case "postChangeMargin":
            await bybitAccount.getRecordsWithdraw();
            break;

        // Mode: 13
        case "postInternalTransfer":
            await bybitAccount.getRecordsWithdraw();
            break;

        // DELETE REQUEST ---------------------------
        // Mode: 14
        case "deleteOrderActive":
            await bybitAccount.getRecordsWithdraw();
            break;

        // Mode: 15
        case "deleteOrderCond":
            await bybitAccount.getRecordsWithdraw();
            break;

        // Mode: 16
        case "deleteWithdraw":
            await bybitAccount.getRecordsWithdraw();
            break;

        // Mode: x
        case "changeAccount":
            await displayMenu("BETA v1.0.0");
            break;

        // Catch All Mode
        default:
            console.log("[Error] Choose a valid option");
            bybitAccount.test();
            break;
    }

    console.log("\n");
    const module = await moduleMenu();
    await runner(account, module.module);
};
