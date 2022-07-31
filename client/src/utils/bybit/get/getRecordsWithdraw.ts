import axios from "axios";
import { getSignatureQuery } from "../signature/signatureQuery";

import dotenv from "dotenv";
dotenv.config();

export const getRecordsWithdraw = async (
    coin: string,
    apiKey: string,
    apiSecret: string
) => {
    const path = "/v2/private/wallet/withdraw/list";
    const timestamp = Date.now().toString();

    const params = {
        coin: coin,
        limit: 50,
        api_key: apiKey,
        timestamp: timestamp,
    };

    const paramsQueryString = getSignatureQuery(params, apiSecret);
    const res = await axios.get(
        process.env.url + path + "?" + paramsQueryString
    );

    return res.data.result;
};
