import axios from "axios";
import { getSignature } from "../signature/signature";

import dotenv from "dotenv";
dotenv.config();

export const postStopLost = async (
    symbol: string,
    take_profit: number,
    stop_loss: number,
    apiKey: string,
    apiSecret: string
) => {
    const path = "/v2/private/position/trading-stop";
    const timestamp = Date.now().toString();

    let params: { [key: string]: string | number | boolean } = {
        symbol: symbol,
        take_profit: take_profit,
        stop_loss: stop_loss,
        api_key: apiKey,
        timestamp: timestamp,
    };

    const signature = getSignature(params, apiSecret);
    params["sign"] = signature;

    const res = await axios.post(process.env.URL + path, params);

    return res.data;
};
