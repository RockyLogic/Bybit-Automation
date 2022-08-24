import axios from "axios";
import { getSignature } from "../signature/signature";

import dotenv from "dotenv";
dotenv.config();

export const postSetLeverage = async (
    symbol: string,
    leverage: number,
    apiKey: string,
    apiSecret: string
) => {
    const path = "/v2/private/position/leverage/save";
    const timestamp = Date.now().toString();

    let params: { [key: string]: string | number } = {
        symbol: symbol,
        leverage: leverage,
        api_key: apiKey,
        timestamp: timestamp,
    };

    const signature = getSignature(params, apiSecret);
    params["sign"] = signature;

    const res = await axios.post(process.env.URL + path, params);

    return res.data;
};
