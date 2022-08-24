import { Task } from "../task";
import { account } from "../../types/account";
import { getBalance } from "../../utils/bybit/get/getBalance";
import { getClosedPnL } from "../../utils/bybit/get/getClosedPnL";
import { getOrdersActive } from "../../utils/bybit/get/getOrdersActive";
import { getOrdersCond } from "../../utils/bybit/get/getOrdersCond";
import { getPositions } from "../../utils/bybit/get/getPositions";
import { getRecordsDeposit } from "../../utils/bybit/get/getRecordsDeposit";
import { getRecordsWithdraw } from "../../utils/bybit/get/getRecordsWithdraw";
import { postOrderActive } from "../../utils/bybit/post/postOrderActive";
import { postOrderCond } from "../../utils/bybit/post/postOrderCond";
import { postSetLeverage } from "../../utils/bybit/post/postSetLeverage";
import { postSwitchMargin } from "../../utils/bybit/post/postSwitchMargin";
import { postStopLost } from "../../utils/bybit/post/postStopLost";
import { postChangeMargin } from "../../utils/bybit/post/postChangeMargin";
import { postInternalTransfer } from "../../utils/bybit/post/postInternalTransfer";
import { deleteOrderActive } from "../../utils/bybit/delete/deleteOrderActive";
import { deleteOrderCond } from "../../utils/bybit/delete/deleteOrderCond";

export class Bybit extends Task {
    email: string;
    pass: string;
    apiKey: string;
    apiSecret: string;

    constructor(accountInfo: account, number: number = 1) {
        super(number);
        this.email = accountInfo.email;
        this.pass = accountInfo.pass;
        this.apiKey = accountInfo.apiKey;
        this.apiSecret = accountInfo.apiSecret;
    }

    async test() {
        this.logSuccess(`Account: ${this.email} `);
    }

    async getBalance() {
        this.logStatus("Fetching Balance");
        const response = await getBalance("ETH", this.apiKey, this.apiSecret);
        this.logSuccess(JSON.stringify(response, null, 4));
    }

    async getClosedPnL() {
        this.logStatus("Fetching Closed PnL");
        const response = await getClosedPnL(
            "ETHUSD",
            this.apiKey,
            this.apiSecret
        );
        this.logSuccess(JSON.stringify(response, null, 4));
    }

    async getOrdersActive() {
        this.logStatus("Fetching Active Orders");
        const response = await getOrdersActive(
            "ETHUSD",
            this.apiKey,
            this.apiSecret
        );
        this.logSuccess(JSON.stringify(response, null, 4));
    }

    async getOrdersCond() {
        this.logStatus("Fetching Conditional Orders");
        const response = await getOrdersCond(
            "ETHUSD",
            this.apiKey,
            this.apiSecret
        );
        this.logSuccess(JSON.stringify(response, null, 4));
    }

    async getPositions() {
        this.logStatus("Fetching Positions");
        const response = await getPositions(
            "ETHUSD",
            this.apiKey,
            this.apiSecret
        );

        this.logSuccess(JSON.stringify(response, null, 4));
    }

    async getRecordsDeposit() {
        this.logStatus("Fetching Deposit Records");
        const response = await getRecordsDeposit(
            "ETH",
            this.apiKey,
            this.apiSecret
        );

        this.logSuccess(JSON.stringify(response, null, 4));
    }

    async getRecordsWithdraw() {
        this.logStatus("Fetching Deposit Records");
        const response = await getRecordsWithdraw(
            "ETH",
            this.apiKey,
            this.apiSecret
        );

        this.logSuccess(JSON.stringify(response, null, 4));
    }

    async postOrderActive() {
        this.logStatus("Placing Active Order");
        const activeOrder = await postOrderActive(
            "Buy",
            "ETHUSD",
            "Limit",
            10,
            999,
            "GoodTillCancel",
            1200,
            900,
            this.apiKey,
            this.apiSecret
        );

        if (activeOrder.result == null) {
            this.logError("Error");
        }

        const retCode = activeOrder.ret_code;
        const extCode = activeOrder.ext_code;

        if (retCode == 0 && extCode == "") {
            this.logSuccess("Successfully Placed Active Order");
            this.logSuccess(JSON.stringify(activeOrder.result, null, 4));
        } else if (retCode == 0 && extCode != "") {
            this.logStatus("Active Order Placed (Check Parameters**)");
            this.logStatus(JSON.stringify(activeOrder.result, null, 4));
        } else {
            this.logError("Error Placing Active Order");
        }
    }

    async postOrderCond() {
        this.logStatus("Placing Conditional Order");
        const condOrder = await postOrderCond(
            "Buy",
            "ETHUSD",
            "Limit",
            10,
            999,
            1600, // Base Price - Ref passing trigger which way
            1050, // Trigger Price
            "GoodTillCancel",
            1200,
            900,
            this.apiKey,
            this.apiSecret
        );

        if (condOrder.result == null) {
            this.logError("Error Order Not Placed");
        }

        const retCode = condOrder.ret_code;
        const extCode = condOrder.ext_code;

        if (retCode == 0 && extCode == "") {
            this.logSuccess("Successfully Placed Conditional Order");
            this.logSuccess(JSON.stringify(condOrder.result, null, 4));
        } else if (retCode == 0 && extCode != "") {
            this.logStatus("Conditional Order Placed (Check Parameters**)");
            this.logStatus(JSON.stringify(condOrder.result, null, 4));
        } else {
            this.logError("Error Placing Conditional Order");
        }
    }

    async postSetLeverage() {
        this.logStatus("Setting Leverage");
        const response = await postSetLeverage(
            "ETHUSD",
            20,
            this.apiKey,
            this.apiSecret
        );

        this.logSuccess(JSON.stringify(response, null, 4));
    }

    async postSwitchMargin() {
        this.logStatus("Setting Margin Type (Cross/Isolate)");
        const response = await postSwitchMargin(
            "ETHUSD",
            true,
            11,
            11,
            this.apiKey,
            this.apiSecret
        );

        this.logSuccess(JSON.stringify(response, null, 4));
    }

    async postStopLost() {
        this.logStatus("Posting Stop Lost");
        const response = await postStopLost(
            "ETHUSD",
            200,
            2000,
            this.apiKey,
            this.apiSecret
        );
        this.logSuccess(JSON.stringify(response, null, 4));
    }

    async postChangeMargin() {
        this.logStatus("Posting Stop Lost");
        const response = await postChangeMargin(
            "ETHUSD",
            "20",
            this.apiKey,
            this.apiSecret
        );
        this.logSuccess(JSON.stringify(response, null, 4));
    }

    async postInternalTransfer() {
        this.logStatus("Posting Internal Transfer");
        const response = await postInternalTransfer(
            "ETH",
            "0.1",
            "SPOT",
            "CONTRACT",
            this.apiKey,
            this.apiSecret
        );
        this.logSuccess(JSON.stringify(response, null, 4));
    }

    async deleteOrderActive() {
        this.logStatus("Deleting Active Order");
        const response = await deleteOrderActive(
            "ETHUSD",
            "4b632a00-5778-4237-af25-5da5accb55ee",
            this.apiKey,
            this.apiSecret
        );
        this.logSuccess(JSON.stringify(response, null, 4));
    }

    async deleteOrderCond() {
        this.logStatus("Deleting Conditional Order");
        const response = await deleteOrderCond(
            "ETHUSD",
            "4ba8f618-89b6-4a1a-b842-924b75254970",
            this.apiKey,
            this.apiSecret
        );
        this.logSuccess(JSON.stringify(response, null, 4));
    }
}
