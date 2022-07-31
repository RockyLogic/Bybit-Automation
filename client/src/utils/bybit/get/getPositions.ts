import axios from "axios";
import { getSignatureQuery } from "../signature/signatureQuery";

import dotenv from "dotenv";
dotenv.config();

export const getPositions = async (
    symbol: string,
    apiKey: string,
    apiSecret: string
) => {
    const path = "/v2/private/position/list";
    const timestamp = Date.now().toString();

    const params = {
        symbol: symbol,
        api_key: apiKey,
        timestamp: timestamp,
    };

    const paramsQueryString = getSignatureQuery(params, apiSecret);
    const res = await axios.get(
        process.env.URL + path + "?" + paramsQueryString
    );

    return res.data.result;
};
