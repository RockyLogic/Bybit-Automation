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
        const bal = await getBalance("ETH", this.apiKey, this.apiSecret);
        this.logSuccess(bal);
    }

    async getClosedPnL() {
        this.logStatus("Fetching Closed PnL");
        const closedPnL = await getClosedPnL(
            "ETHUSD",
            this.apiKey,
            this.apiSecret
        );
        this.logSuccess(closedPnL);
    }

    async getOrdersActive() {
        this.logStatus("Fetching Active Orders");
        const ordersActive = await getOrdersActive(
            "ETHUSD",
            this.apiKey,
            this.apiSecret
        );
        this.logSuccess(ordersActive);
    }

    async getOrdersCond() {
        this.logStatus("Fetching Conditional Orders");
        const ordersCond = await getOrdersCond(
            "ETHUSD",
            this.apiKey,
            this.apiSecret
        );
        this.logSuccess(ordersCond);
    }

    async getPositions() {
        this.logStatus("Fetching Positions");
        const positions = await getPositions(
            "ETHUSD",
            this.apiKey,
            this.apiSecret
        );

        this.logSuccess(positions);
    }

    async getRecordsDeposit() {
        this.logStatus("Fetching Deposit Records");
        const records = await getRecordsDeposit(
            "ETH",
            this.apiKey,
            this.apiSecret
        );

        this.logSuccess(records);
    }

    async getRecordsWithdraw() {
        this.logStatus("Fetching Deposit Records");
        const records = await getRecordsWithdraw(
            "ETH",
            this.apiKey,
            this.apiSecret
        );

        this.logSuccess(records);
    }

    async postOrderActive() {
        this.logStatus("Placing Active Order");
        const activeOrder = await postOrderActive(
            "Buy",
            "ETHUSD",
            "Limit",
            2,
            999,
            "GoodTillCancel",
            1200,
            900,
            this.apiKey,
            this.apiSecret
        );

        if (activeOrder) {
            this.logSuccess("Placed Active Order");
            this.logSuccess(JSON.stringify(activeOrder));
        } else {
            this.logError("Error placing active order (Check params)");
        }
    }

    async postOrderCond() {
        this.logStatus("Placing Active Order");
    }
}
