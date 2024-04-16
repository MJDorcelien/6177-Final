//https://deadsimplechat.com/blog/environment-variables-in-nodejs/
//https://learn.microsoft.com/en-us/azure/ai-services/language-service/sentiment-opinion-mining/quickstart?tabs=linux&pivots=programming-language-csharp
//https://www.yourteaminindia.com/tech-insights/sentiment-analysis-with-node.js-and-ai

//Office Hour Questions
//  how many methods should we show?
//  is swagger fine for documentation?
//  is this fine to show azure...like should I be doing more?
//      like adding input fields and subbing that in for the text
//  help displaying the data....if I can't get it beforehand

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

// maybe change this method set up...attempted but wasn't working
const tester = async () => {
    try {
        const response = await axios.post(`${endpoint}/text/analytics/v3.0/sentiment`, {
            documents: [
                {
                    language: 'en',
                    id: '1',
                    text: analysisText,
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
        return `Sentiment: ${sentimentScore}`;
    }

    catch (error) {
        console.log(error+'\n'+'Theres an ERROR');
    }
};

app.get('/azure', (req, res) => {
    res.send(tester());
});

// attempt at a new method set up
app.get('/testing', (req, res) => {
    try{
        const testingWord = 'I dont like this! This was terrible!';

        const options = {
            method: 'POST',
            url: `${endpoint}/text/analytics/v3.0/sentiment`,
            params: {
                documents: [
                    {
                        language: 'en',
                        id: '2',
                        text: testingWord,
                    },
                ]
            },
            headers: {
                'Ocp-Apim-Subscription-Key': key,
                'Content-Type': 'application/json',
            }
        }

        const response = 'response from azure';

        axios(options)
            .then(resp => {
                if(resp.data) {
                    response = resp.data
                    res.send(response)
                }
            })        
    }

    catch (error) {
        console.log(error+'\n'+'Theres an ERROR');
    }
});

app.listen(port, () => {
    console.log(`API served at http://localhost:${port}`);
});
