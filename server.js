const express = require('express');

const routes = require('./routes');

const sequelize = require('./config/connection');

const PORT = process.env.PORT || 3001;

const app = express();

// body parser middleware
app.use(express.json);
app.use(express.urlencoded({extended : true}));

// Saying if any requests go to / forward that request to every route declared in routes 
app.use('/', routes);

// Tells sequelize to connect to our database 
// Once we connect to our database then thats when we will start our server
// Never leave to true
    // If left to true everytime your server restarts it will drop all your tables and all rows
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('App running on port${PORT}'));
});