const { getKeys } = require("../Security/getKeys");
const { API_ROUTES } = require("../../Router/index");
const { buildDefaultSet } = require("../DefaultSettings/defaultSet");

let cachedDefaultSet;

function findEndpointByKey(key) {
    for (const section in API_ROUTES) {
        if(API_ROUTES[section][key]) {
            //console.log(`keyFinder, findEndpointByKey: ${JSON.stringify(API_ROUTES[section][key])}`);
            return API_ROUTES[section][key]
        }
    }
    throw new Error(`Endpoint "${key}", not found`);
};

async function getDefaultSet() {
    if(!cachedDefaultSet) {
        const allKeys = await getKeys();
        cachedDefaultSet = buildDefaultSet(allKeys);
    }
    //console.log(`cachedDefaultSet: ${JSON.stringify(cachedDefaultSet)}`);
    return cachedDefaultSet;
}

async function findDefaultSetByKey(key) {
    const DEFAULT_SET = await getDefaultSet();
    for (const section in DEFAULT_SET) {
        if (DEFAULT_SET[section][key]) {
            const defaultSetting = DEFAULT_SET[section][key];
            //console.log(`defaultSet: ${JSON.stringify(defaultSetting)}`);
            return defaultSetting;
        }
    }
}

function findEnv(key) {
    const upperParts = key.toUpperCase().split("_");
    console.log(`upperParts: ${upperParts}`);
    
    const matches = Object.keys(process.env)
        .filter(envKey => envKey.startsWith("GENERAL_"))
        .map(envKey => {
            const envParts = envKey.toUpperCase().split("_");
            let score = 0;
            upperParts.forEach((part, idx) => {
                if (envParts.includes(part)) {
                    score += (upperParts.length - idx);
                }
            });
            return { envKey: envKey.trim(), score };
        })
        .filter(({ score }) => score > 0)
        .sort((a, b) => b.score - a.score);

    if (matches.length === 0) {
        throw new Error(`No matching GENERAL_ env var found for key: ${key}`);
    }

    const bestMatch = matches[0].envKey;
    console.log(`best match: ${bestMatch}`);
    return process.env[bestMatch];
}

const findKey = async (key) => {
    try { 
        const allKeys = await getKeys();
        //console.log(`allKeys: ${JSON.stringify(allKeys)}`);
        const keys = {};
        const upperKey = key.toUpperCase();
        const apiUserMatch = Object.keys(allKeys).find(vitalKey => 
            vitalKey.startsWith("APIUSER_") && upperKey.includes(vitalKey.replace("APIUSER_", ""))
        );
        const passwordMatch = Object.keys(allKeys).find(vitalKey => 
            vitalKey.startsWith("PASSWORD_") && upperKey.includes(vitalKey.replace("PASSWORD_", ""))
        );

        if (!apiUserMatch || !passwordMatch) {
            throw new Error(`No matching APIUSER or PASSWORD for ${key}`);
        }
        keys.apiUser = allKeys[apiUserMatch];
        keys.password = allKeys[passwordMatch];
        //console.log(`keyFinder, findKey: ${JSON.stringify(keys)}`);
        return keys;
    } catch (error) {
        console.error("Error al ir por llaves:", error);
        throw new Error("keyFinder fallo al ir por llaves");
    }
};

module.exports = {findEndpointByKey, findDefaultSetByKey, findEnv, findKey}