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

var resp;

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
        const confidenceScore = response.data.documents[0].confidenceScores;
        console.log(`Sentiment: ${sentimentScore}`);

        resp = {"confidenceScore": confidenceScore};

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

        // could order them and separate details...maybe
        const sentences = response.data.documents[0].sentences;
        resp = {"sentences": sentences};

        return res.json(resp);
    }

    catch (error) {
        console.log(error+'\n'+'Theres an ERROR');
    }
});

// gives you which sentences have which sentiments (positive, neutral, and negative)
app.get('/v1/azure/:scores', async (req, res) => {
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

        let sentences = response.data.documents[0].sentences;
        resp = {
            "positive": [],
            "neutral": [],
            "negative": []
        }
        
        sentences.forEach(sentence => {
            if(sentence.sentiment === "positive"){
                resp.positive.push(`${sentence.text}`);
            }
            else if(sentence.sentiment === "neutral"){
                resp.neutral.push(`${sentence.text}`);
            }
            else {
                resp.negative.push(`${sentence.text}`);
            }
        });

        return res.json(resp);
    }

    catch (error) {
        console.log(error+'\n'+'Theres an ERROR');  
    }
});

// gives you breakdown for sentiments and ranking of the positive score
app.get('/v1/azure/:scorespositive', async (req, res) => {
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

        let sentences = response.data.documents[0].sentences;
        resp = {
            "positive": [],
            "neutral": [],
            "negative": []
        }
        
        sentences.forEach(sentence => {
            if(sentence.sentiment === "positive"){                
                resp.positive.push([sentence.confidenceScores.positive, sentence.text]);
            }
            else if(sentence.sentiment === "neutral"){
                resp.neutral.push([sentence.confidenceScores.positive, sentence.text]);
            }
            else {
                resp.negative.push([sentence.confidenceScores.positive,sentence.text]);
            }
        });

        return res.json(resp);
    }

    catch (error) {
    console.log(error+'\n'+'Theres an ERROR');
    }
    });

app.listen(port, () => {
    console.log(`API served at http://localhost:${port}`);
});
