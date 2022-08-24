import axios from "axios";
import { getSignature } from "../signature/signature";

import dotenv from "dotenv";
dotenv.config();

export const postChangeMargin = async (
    symbol: string,
    margin: string,
    apiKey: string,
    apiSecret: string
) => {
    const path = "/v2/private/position/change-position-margin";
    const timestamp = Date.now().toString();

    let params: { [key: string]: string | number | boolean } = {
        symbol: symbol,
        margin: margin,
        api_key: apiKey,
        timestamp: timestamp,
    };

    const signature = getSignature(params, apiSecret);
    params["sign"] = signature;

    const res = await axios.post(process.env.URL + path, params);

    return res.data;
};
