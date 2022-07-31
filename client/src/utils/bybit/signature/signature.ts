import crypto from "crypto";

export const getSignature = (
    parameters: { [key: string]: any },
    apiSecret: string
) => {
    //sort the unordered object and generate signature value
    var orderedParams = "";
    var keys = [];

    for (let key in parameters) {
        if (parameters.hasOwnProperty(key)) {
            keys.push(key);
        }
    }
    keys.sort();
    const len = keys.length;

    for (let i = 0; i < len; i++) {
        let key = keys[i];
        orderedParams = orderedParams + key + "=" + parameters[key] + "&"; //Generate QueryString
    }

    return crypto
        .createHmac("sha256", apiSecret)
        .update(orderedParams.slice(0, -1))
        .digest("hex");
};
