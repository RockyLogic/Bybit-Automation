import axios from "axios";
import { getSignatureQuery } from "../signature/signatureQuery";

import dotenv from "dotenv";
dotenv.config();

export const getClosedPnL = async (
    symbol: string,
    apiKey: string,
    apiSecret: string
) => {
    const path = "/v2/private/trade/closed-pnl/list";
    const timestamp = Date.now().toString();

    // Starts year ago
    const startDt =
        new Date(
            new Date().setFullYear(new Date().getFullYear() - 1)
        ).getTime() / 1000;

    // End Dates is current date
    const endDt = new Date().getTime() / 1000;

    const params = {
        symbol: symbol,
        start_time: String(startDt),
        end_time: String(endDt),
        exec_type: "Trade",
        page: "1",
        limit: "50",
        api_key: apiKey,
        timestamp: timestamp,
    };

    const paramsQueryString = getSignatureQuery(params, apiSecret);
    const res = await axios.get(
        process.env.URL + path + "?" + paramsQueryString
    );

    return res.data.result;
};
