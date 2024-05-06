const express = require('express');
const app = express();

const axios = require('axios');

const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const cors = require('cors');

require('dotenv').config();
const port = process.env.PORT || 4000;
const key = process.env.LANGUAGE_KEY;
const endpoint = process.env.LANGUAGE_ENDPOINT;

const options = {
    swaggerDefinition: {
        info: {
            title: '6177 Final Project',
            version: '1.0.0',
            description: 'Final project for system integration. The project is an express application which utilizes azure to complete sentiment analysis.',
        },
        host: 'localhost:3000',
        basePath: '/v1/',
    },
    apis: ['./server.js'],
}
const specs = swaggerJsdoc(options);

app.use('/docs', swaggerUi.serve, swaggerUi.setup(specs));
app.use(cors());
             
/**
 * @swagger
 * /azure:
 *     get:
 *       description: Returns response based on pre-determined sentence "I love this product! Its fantastic"
 *       produces: 
 *          - application/json
 *       responses:
 *          200:
 *              description: Object containing the overall sentiment and confidence scores. Also returns a breakdown for each sentence. The breakdown includes the text, length, sentiment, confidence scores, and offset.
 */
app.get('/v1/azure', async (req, res) => {
    try {
        let response = await axios.post(`${endpoint}/text/analytics/v3.0/sentiment`, {
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

        let sentimentScore = response.data.documents[0].sentiment;
        console.log(`Sentiment: ${sentimentScore}`);
        console.log("azure");

        let resp = response.data;

        res.json(resp);
    }

    catch (error) {
        console.log(error+'\n'+'Theres an ERROR');
    }
});

/**
 * @swagger
 * /azure/response:
 *     get:
 *       description: Returns response based on user input
 *       produces: 
 *          - application/json
*       parameters:
 *          - in: path
 *            name: response
 *            description: Statement from the user to input for sentiment analysis
 *       responses:
 *          200:
 *              description: Object containing the overall sentiment and confidence scores. Also returns a breakdown for each sentence. The breakdown includes the text, length, sentiment, confidence scores, and offset.
 */
app.get('/v1/azure/response/:response', async (req, res) => {
    try {
        const text = req.params.response;
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
        console.log('azure/response');

        const resp = response.data;

        res.json(resp);
    }

    catch (error) {
        console.log(error+'\n'+'Theres an ERROR');
    }
});

/**
 * @swagger
 * /azure/sentiment:
 *     get:
 *       description: gives you sentiment score based on user input
 *       produces: 
 *          - application/json
*       parameters:
 *          - in: path
 *            name: sentiment
 *            description: Statement from the user to input for sentiment analysis
 *       responses:
 *          200:
 *              description: Object containing the overall sentiment of the input
 */
app.get('/v1/azure/sentiment/:sentiment', async (req, res) => {
    try {
        const text = req.params.sentiment;
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
        console.log('azure/sentiment');

        const resp = {"sentiment": sentimentScore};

        res.json(resp);
    }

    catch (error) {
        console.log(error+'\n'+'Theres an ERROR');
    }
});

/**
 * @swagger
 * /azure/confidence:
 *     get:
 *       description: Returns confidence scores based on user input
 *       produces: 
 *          - application/json
*       parameters:
 *          - in: path
 *            name: confidence
 *            description: Statement from the user to input for sentiment analysis
 *       responses:
 *          200:
 *              description: Object containing the confidence scores for the overall analysis. The confidence score contains the positive, neutral, and negative confidence scores.
 */
app.get('/v1/azure/:confidence', async (req, res) => {
    try {
        var text = req.params.confidence;
        let response = await axios.post(`${endpoint}/text/analytics/v3.0/sentiment`, {
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

        let sentimentScore = response.data.documents[0].sentiment;
        let confidenceScore = response.data.documents[0].confidenceScores;
        console.log(`Sentiment: ${sentimentScore}`);
        console.log('azure/confidence');

        let resp = {"confidenceScore": confidenceScore};

        res.json(resp);
    }

    catch (error) {
        console.log(error+'\n'+'Theres an ERROR');
    }
});

/**
 * @swagger
 * /azure/paragraph:
 *     get:
 *       description: Returns a breakdown for each sentence (text, sentiment, and confidence scores)
 *       produces: 
 *          - application/json
*       parameters:
 *          - in: path
 *            name: paragraph
 *            description: Statement from the user to input for sentiment analysis
 *       responses:
 *          200:
 *              description: Object containing the sentiment analysis for each sentence
 */
app.get('/v1/azure/paragraph/:paragraph', async (req, res) => {
    try {
        var text = req.params.paragraph;
        let response = await axios.post(`${endpoint}/text/analytics/v3.0/sentiment`, {
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

        let sentimentScore = response.data.documents[0].sentiment;
        console.log(`Sentiment: ${sentimentScore}`);
        console.log('azure/paragraph');

        // could order them and separate details...maybe
        let sentences = response.data.documents[0].sentences;
        let resp = {"sentences": sentences};

        res.json(resp);
    }

    catch (error) {
        console.log(error+'\n'+'Theres an ERROR');
    }
});

/**
 * @swagger
 * /azure/scores:
 *     get:
 *       description: Returns which sentences have which sentiments (positive, neutral, and negative)
 *       produces: 
 *          - application/json
 *       parameters:
 *          - in: path
 *            name: scores
 *            description: Statement from the user to input for sentiment analysis
 *       responses:
 *          200:
 *              description: Object containing the positive sentences, neutral sentences, and negative sentences.
 */
app.get('/v1/azure/scores/:scores', async (req, res) => {
    try {
        var text = req.params.scores;
        let response = await axios.post(`${endpoint}/text/analytics/v3.0/sentiment`, {
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

        let sentimentScore = response.data.documents[0].sentiment;
        console.log(`Sentiment: ${sentimentScore}`);
        console.log('azure/scores');

        let sentences = response.data.documents[0].sentences;
        let resp = {
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

        res.json(resp);
    }

    catch (error) {
        console.log(error+'\n'+'Theres an ERROR');  
    }
});

/**
 * @swagger
 * /azure/scorespositive:
 *     get:
 *       description: Returns a breakdown for sentiments and ranking of the positive score (most to least positive)
 *       produces: 
 *          - application/json
 *       parameters:
 *          - in: path
 *            name: scorespositive
 *            description: Statement from the user to input for sentiment analysis
 *       responses:
 *          200:
 *              description: Object containing the positive sentences, neutral sentences,a nd negative sentences as well as the positive confidence scores for each sentence.
 */
app.get('/v1/azure/scorespositive/:scorespositive', async (req, res) => {
    try {
        let text = req.params.scoresranked;
        let response = await axios.post(`${endpoint}/text/analytics/v3.0/sentiment`, {
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

        let sentimentScore = response.data.documents[0].sentiment;
        console.log(`Sentiment: ${sentimentScore}`);
        console.log('azure/scorespositive');

        let sentences = response.data.documents[0].sentences;
        let resp = {
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

        res.json(resp);
    }

    catch (error) {
    console.log(error+'\n'+'Theres an ERROR');
    }
    });

app.listen(port, () => {
    console.log(`API served at http://localhost:${port}`);
});
