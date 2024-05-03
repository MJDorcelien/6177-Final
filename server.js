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

let resp;

app.get('/', (req, res) => {
    res.send('hello');
});
             
// gives you response based on pre-determined sentence
app.get('/v1/azure', async (req, res) => {
    try {
        const response = await axios.post(`${endpoint}/text/analytics/v3.0/sentiment`, {
            documents: [
                {
                    language: 'en',
                    id: '1',
                    text: 'I love this product! Its fantastic',
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

        resp = response.data;

        return res.json(resp);
    }

    catch (error) {
        console.log(error+'\n'+'Theres an ERROR');
    }
});

// gives you response based on user input
app.get('/v1/azure/:response', async (req, res) => {
    try {
        var text = req.params.response;
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

        resp = response.data;

        return res.json(resp);
    }

    catch (error) {
        console.log(error+'\n'+'Theres an ERROR');
    }
});

// gives you sentiment score based on user input
app.get('/v1/azure/:sentiment', async (req, res) => {
    try {
        var text = req.params.sentiment;
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

        resp = {"sentiment": sentimentScore};

        return res.json(resp);
    }

    catch (error) {
        console.log(error+'\n'+'Theres an ERROR');
    }
});

// gives you confidence scores based on user input
app.get('/v1/azure/:confidence', async (req, res) => {
    try {
        var text = req.params.confidence;
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

        resp = response.data;

        return res.json(resp);
    }

    catch (error) {
        console.log(error+'\n'+'Theres an ERROR');
    }
});

// gives you breakdown for each sentence (text, sentiment, and confidence scores)
app.get('/v1/azure/:paragraph', async (req, res) => {
    try {
        var text = req.params.paragraph;
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

        resp = {"confidencescores": response.data.documents[0].confidencescores};

        return res.json(resp);
    }

    catch (error) {
        console.log(error+'\n'+'Theres an ERROR');
    }
});

// gives you breakdown for sentiments (positive, neutral, and negative)
app.get('/v1/azure/:scores', async (req, res) => {
        // // x=data;
        // let sentences = data.documents[0].sentences[0].sentiment;
        // // console.log(sentences + " hi");
        // // // res.json({"x": x});
        // resp = {
        //     "positive": [],
        //     "negative": [],
        //     "neutral": []
        // }
        // res.json(resp);

    try {
        var text = req.params.scores;
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

        resp = {"confidencescores": response.data.documents[0].confidencescores};

        return res.json(resp);
    }

    catch (error) {
        console.log(error+'\n'+'Theres an ERROR');  
    }
});

// gives you breakdown for sentiments ranked from most to least positive (positive, neutral, and negative)
app.get('/v1/azure/:scoresranked', async (req, res) => {
        // // x=data;
        // let sentences = data.documents[0].sentences[0].sentiment;
        // // console.log(sentences + " hi");
        // // // res.json({"x": x});
        // resp = {
        //     "positive": [],
        //     "negative": [],
        //     "neutral": []
        // }
        // res.json(resp);

    try {
        var text = req.params.scoresranked;
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

        resp = {"confidencescores": response.data.documents[0].confidencescores};

        return res.json(resp);
    }

    catch (error) {
    console.log(error+'\n'+'Theres an ERROR');
    }
    });

app.listen(port, () => {
    console.log(`API served at http://localhost:${port}`);
});
