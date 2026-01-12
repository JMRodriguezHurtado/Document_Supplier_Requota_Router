const mainHandler = require("../Handlers/mainHandler");
const pascalToCamelCase = require("../Middlewares/Cleaners/lowerCaseCleaner");
const { findEndpointByKey, findDefaultSetByKey, findEnv, findKey } = require("../Middlewares/Mappers/keyFinder");
const { fetchToken } = require("../Handlers/SecurityHandlers/fetchToken");

const mainMapper = async (apiData, requests) => {
    if (!apiData || !requests) throw new Error("Datos incompletos");

    const responses = {}; 
    const tokenCache = {};

    for (const req of requests) {
        const { keyEndpoint, method, extendedRoute, payload } = req;

        const lambdaFunction = findEndpointByKey(keyEndpoint);
        const defaultSet = await findDefaultSetByKey(keyEndpoint);
        const arn = findEnv(keyEndpoint);
        const allKeys = await findKey(keyEndpoint);
        const User = allKeys.apiUser.toString();
        //console.log(`User: ${JSON.stringify(User)}`);
        const Password = allKeys.password.toString();
        const groupName = keyEndpoint.split("_")[0];

        if (!tokenCache[groupName]) {
            const tokenResponse = await fetchToken(
                User,
                apiData.ApplicationUser,
                Password,
                apiData.Ip,
                apiData.BrowserId
            );
            if (!tokenResponse) throw new Error(`Failed to retrieve token for group ${groupName}`);
            tokenCache[groupName] = tokenResponse.Result.toString();
        }
        let response;
        try {
            response = await mainHandler(
                tokenCache[groupName],
                arn,
                lambdaFunction,
                method,
                defaultSet,
                payload
            );
        } catch (err) {
            if (isAuthError(err)) {
                console.warn(`Token for group ${groupName} failed — refreshing and retrying.`);
                const tokenResponse = await fetchToken(
                    User,
                    apiData.ApplicationUser,
                    Password,
                    apiData.Ip,
                    apiData.BrowserId
                );
                if (!tokenResponse) throw new Error(`Failed to refresh token for group ${groupName}`);
                tokenCache[groupName] = tokenResponse.Result.toString();

                response = await mainHandler(
                    tokenCache[groupName],
                    arn,
                    lambdaFunction,
                    method,
                    defaultSet,
                    payload
                );
            } else {
                throw err;
            }
        }
       if(response.Result) { 
        responses[keyEndpoint] = pascalToCamelCase(response.Result);
        }
        else if (response.result) {
            responses[keyEndpoint] = response.result
        }
        else if (!response.Result && !response.result)
        {responses[keyEndpoint] = response};
    }
    return responses;
};

function isAuthError(err) {
    const status = err?.response?.Code;
    console.log(`Status: ${JSON.stringify(status)}`);
    return status === 401 || status === 403;
}

module.exports = mainMapper;