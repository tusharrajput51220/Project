const dbConfig = require('../config/database.js');
const { Sequelize } = require('sequelize');

// Determine the current environment (default to 'development')
const env = process.env.NODE_ENV || 'development';

// Get the configuration for the current environment
const config = dbConfig[env];

// Extracting database configuration
const { database, username, password, dialect, host, logging } = config;

// Creating a new Sequelize instance
const sequelize = new Sequelize(database, username, password, {
  dialect: dialect,
  host: host,
  logging: logging
});

// Initializing the database object
const db = {};

// Assigning the Sequelize instance and Sequelize class to the db object
db.sequelize = sequelize;
db.Sequelize = Sequelize;

// Define models and associating them with the Sequelize instance
db.country = require('./company/company.model')(sequelize, Sequelize);
db.user = require('./user/user.model')(sequelize, Sequelize);

// Export the db object to be used in other parts of the application
module.exports = db;
