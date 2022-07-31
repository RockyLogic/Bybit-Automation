import crypto from "crypto";

export const getSignatureQuery = (
    parameters: { [key: string]: any },
    apiSecret: string
) => {
    var orderedParams = "";
    Object.keys(parameters)
        .sort()
        .forEach(function (key) {
            orderedParams += key + "=" + parameters[key] + "&";
        });
    orderedParams = orderedParams.substring(0, orderedParams.length - 1);

    return (
        orderedParams +
        "&sign=" +
        crypto
            .createHmac("sha256", apiSecret)
            .update(orderedParams)
            .digest("hex")
    );
};
