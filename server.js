// https://deadsimplechat.com/blog/environment-variables-in-nodejs/
// https://learn.microsoft.com/en-us/azure/ai-services/language-service/sentiment-opinion-mining/quickstart?tabs=linux&pivots=programming-language-csharp
// https://www.yourteaminindia.com/tech-insights/sentiment-analysis-with-node.js-and-ai

// add swagger
// add ReadMe
// add more methods
    // make reuseable confidence that can be access through a different function
    // better to modularize it -- having a making the call a separate function
// digital ocean and pm2 

const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 4000;
const axios = require('axios');
const key = process.env.LANGUAGE_KEY;
const endpoint = process.env.LANGUAGE_ENDPOINT;

const analysisText = 'I love this product! Its fantastic';

app.get('/', (req, res) => {
    res.send('hello');
});

const tester = async (text) => {
    try {
        const response = await axios.post(`${endpoint}/text/analytics/v3.0/sentiment`, {
            documents: [
                {
                    language: 'en',
                    id: '1',
                    text: text,
                },
            ],
        }, {
            headers: {
                'Ocp-Apim-Subscription-Key': key,
                'Content-Type': 'application/json',
            }
        });

        const sentimentScore = response.data.documents[0].sentiment;

        console.log(`Sentiment: ${sentimentScore}`);
        return response.data;
    }

    catch (error) {
        console.log(error+'\n'+'Theres an ERROR');
    }
};

app.get('/v1/azure', (req, res) => {
    let response;
    tester(analysisText)
        .then((data)=> {
            response=data;
            res.json({"response": response});
    });
});

app.get('/v1/azure/:sentiment', (req, res) => {
    var text = req.params.sentiment;
    let response;
    tester(text)
        .then((data)=> {
            response=data;
            res.json({"response": response});
    });
});

app.listen(port, () => {
    console.log(`API served at http://localhost:${port}`);
});
