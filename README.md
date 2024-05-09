# 6177-Final
This API was created to serve as the final project for ITIS 6177: System Integration. 
This project utilizes Azure's sentiment analysis. 
The API allows the user to input their own thoughts to receive an analysis on those thoughts.
To access this API, you can either clone this repository or use the running instance of the API either through [Swagger Docs](http://24.144.104.32:3000/docs/) or PostMan.

## Table of Contents
1. [Sentiment Analysis](https://github.com/MJDorcelien/6177-Final?tab=readme-ov-file#sentiment-analysis)
2. [Get Started on your Own Machine](https://github.com/MJDorcelien/6177-Final?tab=readme-ov-file#get-started-on-your-own-machine)
3. [API Endpoints](https://github.com/MJDorcelien/6177-Final?tab=readme-ov-file#sentiment-analysis)

## 1. Sentiment Analysis
Azure's Sentiment Analysis is an AI tool developed by Microsoft Azure. This tool uses AI to analysis text by breaking the text down into individual sentences. These sentences are then further analyzed to determine their overall sentiment which is divided into 3 possible categories: positive, neutral, and negative. After the sentences are analyzed, the entire text submitted is analyzed with 4 possible categories. The first 4 categories are the same as the sentence level analysis, with the additional classification of mixed. 

Azure's Sentiment Analysis also determines the AI's confidence in it's determination. This confidence score is from 0-1. For each analysis, Azure's Sentiment Analysis provides the user with a confidence score in 3 categories: positive, neutral, and negative. Each of these confidence scores must add up to 1.

This project allows a user to utilize Azure's Sentiment Analysis without creating an Azure account (although instructions detailing how to create an account and run this project on your local machine are included). This is done by allowing the user to access the AI through an running instance of Azure's Sentiment Analysis. Using this api, a user is able to fully explore Azure's Sentiment Analysis.

## 2. Get Started on your Own Machine
Ensure that both [git](https://github.com/git-guides/install-git) and [node](https://nodejs.org/en/download/package-manager) are install on your device by running the following command.

```bash
git --version
node --version
```

To install [git](https://github.com/git-guides/install-git) and [node](https://nodejs.org/en/download/package-manager) you can run the following commands.

```bash
curl -sL https://rpm.nodesource.com/setup_14.x | sudo bash -
yum install nodejs -y
yum install git -y
```

Once node and git are installed on your machine, you'll need to clone the repository.
```bash
git clone https://github.com/MJDorcelien/6177-Final.git
```

Install all the dependencies
```bash
npm install
```

Create a copy of the .env.sample file and name it .env.

To utilize Azure's Sentiment Analysis on your own machine, you'll need to create an AWS instance and create your own endpoint for the sentiment analysis API. This can be done by following the instruction on this [website](https://learn.microsoft.com/en-us/azure/ai-services/language-service/sentiment-opinion-mining/quickstart?tabs=linux&pivots=programming-language-csharp).

Once your instance of Azure's sentiment analysis is up and running, you'll need to locate the endpoint and key. Copy your endpoint and key into their respective fields in the .env file. For the port field, I suggest using port 3000, but you're able to select any port you'd like.

Once your environment variables are updated, you can use this command to get your server up and running!
```bash
node server.js
```

## 3. API Endpoints
- [/v1/azure](https://github.com/MJDorcelien/6177-Final?tab=readme-ov-file#viazure)
- [/v1/azure/response](https://github.com/MJDorcelien/6177-Final?tab=readme-ov-file#viazureresponse)
- [/v1/azure/sentiment](https://github.com/MJDorcelien/6177-Final?tab=readme-ov-file#viazuresentiment)
- [/v1/azure/confidence](https://github.com/MJDorcelien/6177-Final?tab=readme-ov-file#viazureconfidence)
- [/v1/azure/paragraph](https://github.com/MJDorcelien/6177-Final?tab=readme-ov-file#viazureparagraph)
- [/v1/azure/scores](https://github.com/MJDorcelien/6177-Final?tab=readme-ov-file#viazurescores)
- [/v1/azure/scorespositive](https://github.com/MJDorcelien/6177-Final?tab=readme-ov-file#viazurescorespositive)

NOTE: If the user is running the API on their own machine rather than using the running instance, the following instructions and descriptions are still applicable, but the URLs will need to be changed. The IP address will instead be localhost. For [Swagger](http://localhost:3000/docs) and [PostMan](http://localhost:3000/v1/azure).

**Swagger**

If you're running the API on your own machine, use this host url: [http://localhost:3000/docs](http://localhost:3000/docs) and if you're using the running instance of the API, use this host url: [http://24.144.104.32:3000/docs](http://24.144.104.32:3000/docs).

To run each endpoint on swagger, the user will click on the endpoint they'd like to run. After reading the endpoint description, they'll click on the "Try it out" button. For the /v1/azure input, the user will simply click the "Execute" button to retrieve the response. 
The endpoint should look like this image: ![/v1/azure Swagger Endpoint](/images/azure%20swagger%20inital.png)
The request should look like this image:![/v1/azure Swagger Request](/images/azure%20swagger%20request.png)
The response should look like this image: ![/v1/azure Swagger Response](/images/azure%20swagger%20response.png)

For all other endpoints, the user must input text into the response field. Once the response is input, then the user can hit the "Execute" button to retrieve the response. Clicking the "Clear" button clears the response. To execute the code again, the user simply has to change the input in the "response" field and hit the "Execute" button again. If you do not input text in the response field, you'll get an error and be prompted to input a response. 
The endpoint should look like this image: ![/v1/azure/response Swagger Endpoint](/images/response%20swagger%20inital.png)
The request should look like this image: ![/v1/azure/response Swagger Request](/images/response%20swagger%20request.png)
The response should look like this image: ![/v1/azure/response Swagger Response](/images/response%20swagger%20response.png)
The error that occurs when the response field is not filled: ![/v1/azure/response Swagger Error](/images/response%20swagger%20error.png)

**PostMan**

Create a new HTTP request with a "GET" method. The url used for the request will depend on the endpoint used and the method you're using to access the API. If you're running the API, use this host url: [http://localhost:3000/v1/azure](http://localhost:3000/v1/azure) and if you're using the running instance of the API, use this host url: [http://24.144.104.32:3000/v1/azure](http://24.144.104.32:3000/v1/azure)

For PostMan, only the /v1/azure endpoints does not have a parameter. Once the url and method are defined, the user can pressed the "Send" button to get the response. 

The url field should look like this image: ![/v1/azure PostMan Request](/images/azure%20postman%20request.png)

The response should look like this image: ![/v1/azure PostMan Response](/images/azure%20postman%20response.png)

For all other endpoints there is a parameter, so it's important to make sure the url is correct when making the request. For these endpoints, the user must input a text in the "Value" field corresponding to the parameter key to process the request. Once this value is in the correct field, the user can press the "Send" button to get the response. If you do not input text in the response field, you'll get an error and be prompted to input a response. 

The url field should look like this image: ![/v1/azure/response PostMan Request](/images/response%20postman%20request.png)

The response should look like this image: ![/v1/azure/response PostMan Response](/images/response%20postman%20response.png)

The error that occurs when the response field is not filled: ![/v1/azure/response PostMan error](/images/response%20postman%20error.png)

### /vi/azure
Qualities of this endpoints:
- Description
    - Provides the user with the overall sentiment analysis of predetermined input.
- GET method
- Predetermined Input: I love this product! Its fantastic
- JSON response
    - sentiment: whether the sentence was "positive," "neutral," or "negative."
    - confidencescores: percentage of confidence the sentiment analysis has in each potential sentiment category.
    - offset: start of memory space (not relevant for result interpretation)
    - length: length of memory space (not relevant for result interpretation)
    - text: the sentence submitted for sentiment analysis

**Swagger**

Running Instance URL:
```html
http://24.144.104.32:3000/docs/#/default/get_azure
```

Local Machine URL:
```url
http://localhost:3000/docs/#/default/get_azure
```

Response
![/v1/azure Swagger Response](/images/azure%20swagger%20response.png)

**PostMan**

Running Instance URL:
```html
http://24.144.104.32:3000/v1/azure
```

Local Machine URL:
```url
http://localhost:3000/v1/azure
```

Response:
```json
{
    "documents": [
        {
            "id": "1",
            "sentiment": "positive",
            "confidenceScores": {
                "positive": 0.99,
                "neutral": 0.01,
                "negative": 0
            },
            "sentences": [
                {
                    "sentiment": "positive",
                    "confidenceScores": {
                        "positive": 0.99,
                        "neutral": 0,
                        "negative": 0
                    },
                    "offset": 0,
                    "length": 21,
                    "text": "I love this product! "
                },
                {
                    "sentiment": "positive",
                    "confidenceScores": {
                        "positive": 0.99,
                        "neutral": 0.01,
                        "negative": 0
                    },
                    "offset": 21,
                    "length": 13,
                    "text": "Its fantastic"
                }
            ],
            "warnings": []
        }
    ],
    "errors": [],
    "modelVersion": "2022-11-01"
}
```

### /vi/azure/response
Qualities of this endpoints:
- Description
    - Provides the user with the overall sentiment analysis of their input.
- GET method
- 1 parameter
    - string parameter
    - this value is the text that's given to the sentiment analysis api to be analyzed
- JSON response
    - sentiment: whether the sentence was "positive," "neutral," or "negative."
    - confidencescores: percentage of confidence the sentiment analysis has in each potential sentiment category.
    - offset: start of memory space (not relevant for result interpretation)
    - length: length of memory space (not relevant for result interpretation)
    - text: the sentence submitted for sentiment analysis

Response input used for this example: I really like the product. it was easy to use. it was okay. it was not good.

**Swagger**

Running Instance URL:
```html
http://24.144.104.32:3000/docs/#/default/get_azure_response__response_
```

Local Machine URL:
```url
http://localhost:3000/docs/#/default/get_azure_response_response_
```

Response
![/v1/azure/response Swagger Response](/images/response%20swagger%20response.png)

**PostMan**

Running Instance URL:
```html
http://24.144.104.32:3000/v1/azure/response/:response
```

Local Machine URL:
```url
http://localhost:3000/v1/azure/response/:response
```

Response:
```json
{
    "documents": [
        {
            "id": "1",
            "sentiment": "mixed",
            "confidenceScores": {
                "positive": 0.7,
                "neutral": 0.05,
                "negative": 0.26
            },
            "sentences": [
                {
                    "sentiment": "positive",
                    "confidenceScores": {
                        "positive": 0.87,
                        "neutral": 0.12,
                        "negative": 0.01
                    },
                    "offset": 0,
                    "length": 27,
                    "text": "I really like the product. "
                },
                {
                    "sentiment": "positive",
                    "confidenceScores": {
                        "positive": 0.99,
                        "neutral": 0.01,
                        "negative": 0
                    },
                    "offset": 27,
                    "length": 20,
                    "text": "it was easy to use. "
                },
                {
                    "sentiment": "positive",
                    "confidenceScores": {
                        "positive": 0.92,
                        "neutral": 0.07,
                        "negative": 0.01
                    },
                    "offset": 47,
                    "length": 13,
                    "text": "it was okay. "
                },
                {
                    "sentiment": "negative",
                    "confidenceScores": {
                        "positive": 0,
                        "neutral": 0.01,
                        "negative": 0.99
                    },
                    "offset": 60,
                    "length": 16,
                    "text": "it was not good."
                }
            ],
            "warnings": []
        }
    ],
    "errors": [],
    "modelVersion": "2022-11-01"
}
```

### /vi/azure/sentiment
Qualities of this endpoints:
- Description
    - Provides the user with the sentiment of their input. 
- GET method
- 1 parameter
    - string parameter
    - this value is the text that's given to the sentiment analysis api to be analyzed
- JSON response
    - sentiment: whether the sentence was "positive," "neutral," "negative," or "mixed" which is determined by the sentiment analysis

Response input used for this example: I really like the product. it was easy to use. it was okay. it was not good.

**Swagger**

Running Instance URL:
```html
http://24.144.104.32:3000/docs/#/default/get_azure_sentiment_sentiment_
```

Local Machine URL:
```url
http://localhost:3000/docs/#/default/get_azure_sentiment_sentiment_
```

Response
![/v1/azure/sentiment Swagger Response](/images/sentiment%20swagger%20response.png)

**PostMan**

Running Instance URL:
```html
http://24.144.104.32:3000/v1/azure
```

Local Machine URL:
```url
http://localhost:3000/v1/azure
```

Response:
```json
{
  "sentiment": "mixed"
}
```

### /vi/azure/confidence
Qualities of this endpoints:
- Description
    - Provides the user with the confidence scores of the sentiment analysis. 
- GET method
- 1 parameter
    - string parameter
    - this value is the text that's given to the sentiment analysis api to be analyzed
- JSON response
    - confidencescores: percentage of confidence the sentiment analysis has in each potential sentiment category.

Response input used for this example: I really like the product. it was easy to use. it was okay. it was not good.

**Swagger**

Running Instance URL:
```html
http://24.144.104.32:3000/docs/#/default/get_azure_confidence_confidence_
```

Local Machine URL:
```url
http://localhost:3000/docs/#/default/get_azure_confidence_confidence_
```

Response
![/v1/azure/confidence Swagger Response](/images/confidence%20swagger%20response.png)

**PostMan**

Running Instance URL:
```html
http://24.144.104.32:3000/v1/azure
```

Local Machine URL:
```url
http://localhost:3000/v1/azure
```

Response:
```json
{
  "confidenceScore": {
    "positive": 0.7,
    "neutral": 0.05,
    "negative": 0.26
  }
}
```

### /vi/azure/paragraph
Qualities of this endpoints:
- Description
    - Provides the user with the sentiment analysis for each individual sentence. 
- GET method
- 1 parameter
    - string parameter
    - this value is the text that's given to the sentiment analysis api to be analyzed
- JSON response
    - sentiment: whether the sentence was "positive," "neutral," or "negative."
    - confidencescores: percentage of confidence the sentiment analysis has in each potential sentiment category.
    - offset: start of memory space (not relevant for result interpretation)
    - length: length of memory space (not relevant for result interpretation)
    - text: the sentence submitted for sentiment analysis

Response input used for this example: I really like the product. it was easy to use. it was okay. it was not good.

**Swagger**

Running Instance URL:
```html
http://24.144.104.32:3000/docs/#/default/get_azure_paragraph_paragraph_
```

Local Machine URL:
```url
http://localhost:3000/docs/#/default/get_azure_paragraph_paragraph_
```

Response
![/v1/azure.paragraph Swagger Response](/images/paragraph%20swagger%20response.png)

**PostMan**

Running Instance URL:
```html
http://24.144.104.32:3000/v1/azure
```

Local Machine URL:
```url
http://localhost:3000/v1/azure
```

Response:
```json
{
  "sentences": [
    {
      "sentiment": "positive",
      "confidenceScores": {
        "positive": 0.87,
        "neutral": 0.12,
        "negative": 0.01
      },
      "offset": 0,
      "length": 27,
      "text": "I really like the product. "
    },
    {
      "sentiment": "positive",
      "confidenceScores": {
        "positive": 0.99,
        "neutral": 0.01,
        "negative": 0
      },
      "offset": 27,
      "length": 20,
      "text": "it was easy to use. "
    },
    {
      "sentiment": "positive",
      "confidenceScores": {
        "positive": 0.92,
        "neutral": 0.07,
        "negative": 0.01
      },
      "offset": 47,
      "length": 13,
      "text": "it was okay. "
    },
    {
      "sentiment": "negative",
      "confidenceScores": {
        "positive": 0,
        "neutral": 0.01,
        "negative": 0.99
      },
      "offset": 60,
      "length": 16,
      "text": "it was not good."
    }
  ]
}
```

### /vi/azure/scores
Qualities of this endpoints:
- Description
    - Arranges the sentences from the parameter into 3 arrays based on their sentiment analysis: positive, neutral, and negative. This is done by comparing confidence scores of the individual sentences.
- GET method
- 1 parameter
    - string parameter
    - this value is the text that's given to the sentiment analysis api to be analyzed
- JSON response
    - string: the sentence submitted for sentiment analysis

Response input used for this example: I really like the product. it was easy to use. it was okay. it was not good.

**Swagger**

Running Instance URL:
```html
http://24.144.104.32:3000/docs/#/default/get_azure_scores_scores_
```

Local Machine URL:
```url
http://localhost:3000/docs/#/default/get_azure_scores_scores_
```

Response
![/v1/azure/scores Swagger Response](/images/scores%20swagger%20response.png)

**PostMan**

Running Instance URL:
```html
http://24.144.104.32:3000/v1/azure
```

Local Machine URL:
```url
http://localhost:3000/v1/azure
```

Response:
```json
{
  "positive": [
    "I really like the product. ",
    "it was easy to use. ",
    "it was okay. "
  ],
  "neutral": [],
  "negative": [
    "it was not good."
  ]
}
```

### /vi/azure/scorespositive
Qualities of this endpoints:
- Description
    - Arranges the sentences from the parameter into 3 arrays based on their sentiment analysis: positive, neutral, and negative. Within the arrays, the sentences are ordered from most to least positive. This is done by comparing confidence scores of the individual sentences.
- GET method
- 1 parameter
    - string parameter
    - this value is the text that's given to the sentiment analysis api to be analyzed
- JSON response
    - int: the positive confidence score associated with each sentence
    - string: the sentence submitted for sentiment analysis

Response input used for this example: I really like the product. it was easy to use. it was okay. it was not good.

**Swagger**

Running Instance URL:
```html
http://24.144.104.32:3000/docs/#/default/get_azure_scorespositive_scorespositive_
```

Local Machine URL:
```url
http://localhost:3000/docs/#/default/get_azure_scorespositive_scorespositive_
```

Response
![/v1/azure/scorespositive Swagger Response](/images/scorespositive%20swagger%20response.png)

**PostMan**

Running Instance URL:
```html
http://24.144.104.32:3000/v1/azure
```

Local Machine URL:
```url
http://localhost:3000/v1/azure
```

Response:
```json
{
  "positive": [
    [
      0.87,
      "I really like the product. "
    ],
    [
      0.99,
      "it was easy to use. "
    ],
    [
      0.92,
      "it was okay. "
    ]
  ],
  "neutral": [],
  "negative": [
    [
      0,
      "it was not good."
    ]
  ]
}
```