## Pre-requisites

### Back-end

* We will use Node.js along with the express framework to build our server. Ensure that you have Node installed on your computer, do this by running `node-v` in the terminal. If you do not have Node installed you can get it from https://nodejs.org

* Before you begin, ensure that you have the latest version of the `hasura cli` installed. You can find instructions to download the `hasura cli` from [here](https://docs.hasura.io/0.15/manual/install-hasura-cli.html)

### Front-end

* We will use Create-react-app along with the Ant Design framework to build our app. Ensure that you have Node installed on your computer, do this by running `node-v` in the terminal. If you do not have Node installed you can get it from https://nodejs.org

## Quickstart

To see the app in action you can follow the instructions below:

* In your terminal input the following commands to clone the repo ans start the dev-server

```sh
$ git clone https://github.com/Kavinparameshwaran/Taxi_booking_system

$ cd Taxi_booking_system

# install dependencies
$ npm install

#start the dev-server
$ npm start
```

* Now navigate to `localhost:3000` in your browser


## Tutorial

Follow along for a step by step guide on developing this app

## Getting started

### Step 1 - Install create-react-app

```sh
$ npm install -g create-react-app
```

The above command will install create-react-app globaly which is a tool to Create React apps with no build configuration.

### Step 2 - Creating a basic project

```sh
$ create-react-app my-app
$ cd my-app
```

The above command does the following:

1. Creates a new folder in the current working directory called `my-app`
2. Populate the directory with the required files to get started with a react app

### Step 3 - Installing Material-Ui

```sh
$ npm install material-ui
```
This command will install ant design and save it to the `package.json` file.

### Step 4 - Installing the Ant Design Framework

```sh
$ npm install antd --save
```

This command will install ant design and save it to the `package.json` file.

### Step 5 - Configuring the project

To use some advance features provided by the material-ui ant design we need to configure it a bit, follow the official guid material-ui: http://www.material-ui.com/#/ ant design: https://ant.design/docs/react/use-with-create-react-app

