import axios from "axios";
import { getSignature } from "../signature/signature";

import dotenv from "dotenv";
dotenv.config();

export const postOrderActive = async (
    side: string,
    symbol: string,
    order_type: string,
    qty: number,
    price: number,
    time_in_force: string,
    take_profit: number,
    stop_loss: number,
    apiKey: string,
    apiSecret: string
) => {
    const path = "/v2/private/order/create";
    const timestamp = Date.now().toString();

    let params: { [key: string]: string | number } = {
        side: side,
        symbol: symbol,
        order_type: order_type,
        qty: qty,
        price: price,
        time_in_force: time_in_force,
        take_profit: take_profit,
        stop_loss: stop_loss,
        api_key: apiKey,
        timestamp: timestamp,
    };

    const signature = getSignature(params, apiSecret);
    params["sign"] = signature;

    const res = await axios.post(process.env.URL + path, params);

    return res.data.result;
};
