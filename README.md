# Server - Full-Stack Quiz App

The back-end REST-API for the quiz app, built with node.js and express.js, it has end points to fetch the QuizdData from a Mongo Database

( App live with gh-pages at https://saneeldaniel.github.io/quiz-app-deploy/ )

This is a server model for a basic full-stack quiz-app, with multiple choice questions. 

The back-end REST-API is built with node.js and express.js, it has end points to fetch the QuizdData from a Mongoo Database

The back-end server is deployed over Heroku Cloud platform, the database is hosted on Atlas with AWS. 
(EndPoint: https://mongo-quiz-rest.herokuapp.com/quizes/QuizCollection)

QuizSchema = ({ questionID: { type: Number, }, questionString: { type: String, }, choices: { type: Array, }, rightChoice: { type: String, }, });
