# ELibrary

Project repository for 41093 SES1A - ELibrary Group 8

## Requirements

This project requires [NodeJS vLATEST](https://nodejs.org/) and [NPM (Node Package Manager)](https://npmjs.org/)

To verify that you have them on your machine, run the following commands

```
node -v
npm -v
```

## Installation

Copy the repo onto your local machine

```
git clone https://github.com/AchintyaaS/SES1A-Group8-eLibrary
cd SES1A-Group8-eLibrary
```

Install the project dependencies

```
cd client
npm i

cd ../server
npm i
```

Create a .env file in the server directory to store the private mongo key (./server)

```
touch .env
```

Request the necessary environment variables from the project owners

## Running the app

To start the backend server, run the following command on the server directory (./server)

```
node .
```

To start the react server, run the following command on the client directory in a separate command line (./client)

```
npm start
```

The web app will be accessible on localhost at default web port 80.
