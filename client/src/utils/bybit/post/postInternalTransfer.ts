import axios from "axios";
import { getSignature } from "../signature/signature";
import { randomUUID } from "crypto";

import dotenv from "dotenv";
dotenv.config();

export const postInternalTransfer = async (
    coin: string,
    amount: string,
    from_account_type: string,
    to_account_type: string,
    apiKey: string,
    apiSecret: string
) => {
    const path = "/asset/v1/private/transfer";
    const timestamp = Date.now().toString();

    let params: { [key: string]: string | number | boolean } = {
        transfer_id: randomUUID(),
        coin: coin,
        amount: amount,
        from_account_type: from_account_type,
        to_account_type: to_account_type,
        api_key: apiKey,
        timestamp: timestamp,
    };

    const signature = getSignature(params, apiSecret);
    params["sign"] = signature;

    const res = await axios.post(process.env.URL + path, params);

    return res.data;
};
