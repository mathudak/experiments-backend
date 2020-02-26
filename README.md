# Alcea express

Simple Express REST and SSE API developed for a Experiments NgRx showcase project.

## Install
To install and run this project, navigate to project root and run
```
npm install
```

## .env
This project requires **.env** file to be added into the root folder of the project.
In order to run correctly it should contain following environment variables:
```
# Default Port
PORT = 8181
# Mongo Database URI
MONGODB_URI = '--insert-mongodb-uri'
```
**This file is not pushed to the repository, contact the author to obtain correct data.**

## Start
There are two ways to start this project.

When not developing, run this script
```
npm start
```

When you are developing, run following script
```
npm run watch
```

This script won't run until you have installed module **nodemon**
```
npm install -g nodemon
```
In order to install it, run the command line as an administrator, or use **sudo**

## MongoDB
In order to run this project you have to have installed and running [MongoDB](https://www.mongodb.com/download-center?initial=true#community).




