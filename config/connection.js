// When we call this function its going to look for a .env file
// if it finds it it will make the variables from .env file available
// to the process.env.JAWSDB_URL in if statement in connections.js
require('dotenv').config();
const sequelize = require('sequelize');

let sequelize;

// Checks to see if we are in production
// If so then we will connect 
if (process.env.JAWSDB_URL) {
    sequelize = new Sequelize(process.env.JAWSDB_URL);
    // If we are in developement
} else {
    // Takes 4 parameters
    sequelize = new Sequelize(
        // 1st, 2nd, 3rd are the credentials for the database
        // 1st name of the database
        process.env.DB_NAME,
        // 2nd is which user you want to login ass
        process.env.DB_USER,
        // 3rd what password to the user
        process.env.DB_PASSWORD,
        // Last is a configuration object for which 
        // database we want to connect with
        // Determines where the database is located
        {
            host: 'localhost',
            dialect: 'mysql',
            port: 3306
        }
    );
}

// makes the sequelize file available by exporting
// make sure to export lowercase sequelize and not the uppercase Sequelize
module.exports = sequelize;