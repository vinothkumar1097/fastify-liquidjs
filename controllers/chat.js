const axios = require('axios');

const getSpeechToken = async (req, res) => {
    const speechKey = process.env.SPEECH_KEY;
    const speechRegion = process.env.SPEECH_REGION;
    
    if (speechKey !== '737d2a79ba3d4051958be64e6b4d702b' || speechRegion !== 'eastus') {
        res.code(400).send('You forgot to add your speech key or region to the .env file.');
    } else {
        const headers = { 
            headers: {
                'Ocp-Apim-Subscription-Key': speechKey,
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        };
        
        try {
            // console.log('url', req.headers.origin)
            if (process.env.ENVIRONMENT == 'Local') {
                res.header('Access-Control-Allow-Origin', req.headers.origin);
            }
            res.header('Content-Type', 'application/json');
            const tokenResponse = await axios.post(`https://${speechRegion}.api.cognitive.microsoft.com/sts/v1.0/issueToken`, null, headers);
            // console.log(tokenResponse.data)
            res.send({ token: tokenResponse.data, region: speechRegion });
        } catch (err) {
            res.code(401).send('There was an error authorizing your speech key.');
        }
    }
};

module.exports = {
    getSpeechToken,
}