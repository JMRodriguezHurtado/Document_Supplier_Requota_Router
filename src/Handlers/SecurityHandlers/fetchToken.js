const axios = require("axios");
const { config } = require("dotenv");
const https = require("https");

config(); 

const agent = new https.Agent({
  rejectUnauthorized: false, 
});

const fetchToken = async (User, ApplicationUser, Password, Ip, BrowserId) => {

    const url = `${process.env.GENERAL_URL_SECURITY}${process.env.TOKEN_URL}`; 
    const processedBrowserId = (() => {
        if (typeof BrowserId === 'number' && !isNaN(BrowserId)) {
            return Math.trunc(BrowserId); 
        }
        const num = Number(BrowserId);
        if (!isNaN(num)) {
            return Math.trunc(num); 
        }
        return 1;
    })();

    const requestData = {
        User,
        ApplicationUser,
        Password,
        Ip,
        BrowserId: processedBrowserId
    };

    try {
        const response = await axios.post(url, requestData, {
            headers: {
                accept: "text/plain",
                "Content-Type": "application/json",
            },
            httpsAgent: agent, 
        });
        return response.data; 
    } catch (error) {
        console.error("Error fetching token from API:", error);
        throw new Error("Error en la solicitud del token");
    }
};

module.exports = { fetchToken };
