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
### /vi/azure
This endpoint is a GET method with 0 parameters.
This endpoint allows a user to view the sentiment analysis on the following phrase: I love this product! Its fantastic".

[Swagger](http://24.144.104.32:3000/docs/#/default/get_azure)
In order to use Swagger, the user would click to expand the method and then click the "Try it out" button. 
Since this endpoint does not have any parameters, the user simply needs to click the "Execute" button to retrieve the sentiment analysis.

[PostMan](http://localhost:3000/v1/azure)
The user must make a new HTTP request on PostMan. Once a new HTTP request has been made, the following url should be placed in the url field. The method should be changed to a "GET" method. Once the url and method are set, 
![/v1/azure PostMan Request](/images/azure%20postman%20request.png)

### /vi/azure/response
### /vi/azure/sentiment
### /vi/azure/confidence
### /vi/azure/paragraph
### /vi/azure/scores
### /vi/azure/scorespositive
