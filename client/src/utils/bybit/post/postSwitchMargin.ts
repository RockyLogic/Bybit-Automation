import axios from "axios";
import { getSignature } from "../signature/signature";

import dotenv from "dotenv";
dotenv.config();

export const postSwitchMargin = async (
    symbol: string,
    is_isolated: boolean,
    buy_leverage: number,
    sell_leverage: number,
    apiKey: string,
    apiSecret: string
) => {
    const path = "/v2/private/position/switch-isolated";
    const timestamp = Date.now().toString();

    let params: { [key: string]: string | number | boolean } = {
        symbol: symbol,
        is_isolated: is_isolated,
        buy_leverage: buy_leverage,
        sell_leverage: sell_leverage,
        api_key: apiKey,
        timestamp: timestamp,
    };

    const signature = getSignature(params, apiSecret);
    params["sign"] = signature;

    const res = await axios.post(process.env.URL + path, params);

    return res.data;
};
