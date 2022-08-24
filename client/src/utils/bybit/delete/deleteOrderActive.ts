import axios from "axios";
import { getSignature } from "../signature/signature";

import dotenv from "dotenv";
dotenv.config();

export const deleteOrderActive = async (
    symbol: string,
    order_id: string,
    apiKey: string,
    apiSecret: string
) => {
    const path = "/v2/private/order/cancel";
    const timestamp = Date.now().toString();

    let params: { [key: string]: string | number } = {
        symbol: symbol,
        order_id: order_id,
        api_key: apiKey,
        timestamp: timestamp,
    };

    const signature = getSignature(params, apiSecret);
    params["sign"] = signature;

    const res = await axios.post(process.env.URL + path, params);

    return res.data;
};
