// decontruct Model and Datatypes by requiring things from sequelize
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection')

// This allows our own created class to inherit all of the prototype methods
// of the Model class that sequelize gives us

// hold control and click on models
// Go to definition and it will take you to where that is defined
// in sequelize
// Defines where this table will be created at
class User extends Model { }

// This is how we create our tables using JS in sequelize
// Pass arguements into User.init()
// Arguemtns are showing what we want our columns to look like
// init takes 2 parameters column definitions and configuration obect
// 
User.init(
    // Columns
    {
        // createing a random id instead of the automatically created id by sequelize
        id: {
            // One of the required things you need to provide for sequelize when declaring your columns
            // is type property
            // type is what kind of data is the id column going to be
            type: DataTypes.UUID,
            // If you want to make it so you override the default PK assignment for a table in sequelize
            // you can set the PK property to true
            // This will make it so that this id column is the unique identifier for this table
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
            // Makes it so there are no 
            allowNull: false,
        },
        email: {
            // Declares something is string using sequelize
            type: DataTypes.STRING,
            allowNull: false,
            // Makes sure its a unique email and not one that has already been used
            unique: true,
            validate: {
                // Checks if it is a valid email address
                isEmail: true,
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                // Validates that the password length is atleast 6 characters
                // You can add a second number in the [] for maximum length too
                len: [6]
            }
        }
    },
    // Where should be this table be created under and what other 
    // table configurations do you want this table to have 
    {
        // Tells sequelize what database this table needs to be created in
        sequelize,
        timestamp: false,
        // By Default sequelize will look at your table class and then use 
        // the pluralized version as the name of the table
        // Example users becomes users
        // Example people becomes persons
        // FreezeTableName prevents sequelize from renaming the table
        freezeTableName: true,
        // if we sequelize to use a very specific name 
        modelName: 'user',
    }
)

// This makes this User class usable for other files
module.exports = User;