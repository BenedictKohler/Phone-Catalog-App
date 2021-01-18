# Phone Catalog App

## Description:
A web application that allows users to view, filter, and search a catalog of phones. Users are also able to add new phones to the collection as well as update and delete existing phones in the catalog. The app can be viewed on Heroku by following this link https://phone-catalog-frontend.herokuapp.com/ (Add phone and update phone don't render images correctly on Heroku but the these features will work when run on your PC). Follow the instructions below to view the app on your PC.

## Technologies:
The app uses React on the Frontend combined with a NodeJS REST API which communicates with a Cloud Firestore Database for persisting each phones information.

## Getting Started:

**Dependencies:**

You will need to make sure that you have Node and npm installed before trying to run the application.

**Instructions:**

Clone the app using version control or alternatively by running `git clone https://github.com/BenedictKohler/PhoneCatalogApp.git` in a terminal.

Next, you need to get the REST API running. In order to do this you need to navigate to the Backend directory and install the following dependencies by running 
`npm install`
`base64-img`
`body-parser`
`cors`
`express`
`express-form-data`
`firebase`
`firebase-admin`
`fs`
`path`

From here, you can either set the package.json file as the start up file or alternatively run `node PhoneCatalogController.js` from the command line. The app should now start running on port 8000.

Now, in order to get the React Frontend running you need to navigate to the directory phone-catalog inside Frontend. For example you might type `cd ./Frontend/phone-catalog` inside your terminal. 

You now need to install the following dependencies from inside this directory by running
`npm install'
`axios`
`bootstrap`
`react`
`react-bootstrap`
`react-bootstrap-icons`
`react-dom`
`react-router-dom`

From here you can run `npm start` and you should see your app running on port 3000.

## Testing:
Tests built with Jest and Supertest for the REST API endpoints have been included. In order to run them you will need to navigate to PhoneCatalogController.js in the Backend directory and then comment out `app.listen` on line 167 and uncomment `module.exports` on line 169. Then you need to to run `npm install supertest --save-dev` and `npm install --save-dev jest`. From here you can run the tests by typing `npm test` from your commandline while inside the Backend directory. If a test fails you may need to check that the id parameter of put and delete are correct by examining the AutoIncrement.txt file which updates the id's.
