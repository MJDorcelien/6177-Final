# 6177-Final
This API was created to serve as the final project for ITIS 6177: System Integration. 
This project utilizes Azure's sentiment analysis. 
The API allows the user to input their own thoughts to receive an analysis on those thoughts.
To access this API, you can either clone this repository or use the running instance of the API either through [Swagger Docs](http://24.144.104.32:3000/docs/) or PostMan.

## Table of Contents
[Sentiment Analysis]()
[Get Started on your Own Machine]()
[API Endpoints]()

## Sentiment Analysis

## Get Started on your Own Machine
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

set up AZure 
copy the .env.sample
take info from azure (endpoint and key) and choose a port
input that info into the .env
start the server

## API Endpoints
NOTE: If the user is running the API on their own machine rather than using the running instance, the following instructions and descriptions are still applicable, but the URLs will need to be changed. The IP address will instead be localhost. For [Swagger](http://localhost:3000/docs) and [PostMan](http://localhost:3000/v1/azure).

**Swagger**

If you're running the API on your own machine, use this host url: [http://localhost:3000/docs](http://localhost:3000/docs) and if you're using the running instance of the API, use this host url: [http://24.144.104.32:3000/docs](http://24.144.104.32:3000/docs).

To run each endpoint on swagger, the user will click on the endpoint they'd like to run. After reading the endpoint description, they'll click on the "Try it out" button. For the /v1/azure input, the user will simply click the "Execute" button to retrieve the response. 
The endpoint should look like this image: ![/v1/azure Swagger Endpoint](/images/azure%20swagger%20inital.png)
The request should look like this image:![/v1/azure Swagger Request](/images/azure%20swagger%20request.png)
The response should look like this image: ![/v1/azure Swagger Response](/images/azure%20swagger%20response.png)

For all other endpoints, the user must input text into the response field. Once the response is input, then the user can hit the "Execute" button to retrieve the response. Clicking the "Clear" button clears the response. To execute the code again, the user simply has to change the input in the "response" field and hit the "Execute" button again.
The endpoint should look like this image: ![/v1/azure/response Swagger Endpoint](/images/response%20swagger%20inital.png)
The request should look like this image: ![/v1/azure/response Swagger Request](/images/response%20swagger%20request.png)
The response should look like this image: ![/v1/azure/response Swagger Response](/images/response%20swagger%20response.png)

**PostMan**

Create a new HTTP request with a "GET" method. The url used for the request will depend on the endpoint used and the method you're using to access the API. If you're running the API, use this host url: [http://localhost:3000/v1/azure](http://localhost:3000/v1/azure) and if you're using the running instance of the API, use this host url: [http://24.144.104.32:3000/v1/azure](http://24.144.104.32:3000/v1/azure)

For PostMan, only the /v1/azure endpoints does not have a parameter. Once the url and method are defined, the user can pressed the "Send" button to get the response. 

The url field should look like this image: ![/v1/azure PostMan Request](/images/azure%20postman%20request.png)

The response should look like this image: 

For all other endpoints there is a parameter, so it's important to make sure the url is correct when making the request. For these endpoints, the user must input a text in the "Value" field corresponding to the parameter key to process the request. Once this value is in the correct field, the user can press the "Send" button to get the response.

The url field should look like this image: ![/v1/azure/response PostMan Request](/images/azure%20postman%20request.png)

The response should look like this image: 

### /vi/azure
This endpoint is a GET method with 0 parameters.
This endpoint allows a user to view the sentiment analysis on the following phrase: I love this product! Its fantastic".

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
### /vi/azure/sentiment
### /vi/azure/confidence
### /vi/azure/paragraph
### /vi/azure/scores
### /vi/azure/scorespositive
