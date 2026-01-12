const { Router } = require('express');
const router = Router();

// Resolver
const mainMapper = require("../../Resolvers/mainMapper");

router.post("/", async (req, res) => {
    try {
        const { apiData, requests } = req.body; 
        //console.log(`apiData: ${JSON.stringify(apiData)}, keyEndpoint: ${JSON.stringify(keyEndpoint)}, method: ${JSON.stringify(method)}, payload: ${JSON.stringify(payload)}`);        
        const data = await mainMapper( apiData, requests );
        return res.status(200).json(data);
    } catch (error) {
            console.error(error.message);
            res.status(500).json({error: error.message});
    };
});

module.exports = router;