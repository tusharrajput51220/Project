module.exports = {
  development: {
    username: 'root',
    password: 'root',
    database: 'cpms',
    host: 'localhost',
    dialect: 'mysql',
    logging: false, // Optional: to disable logging
  },
  test: {
    username: 'root',
    password: 'root',
    database: 'cpms',
    host: 'localhost',
    dialect: 'mysql',
    logging: false, // Optional: to disable logging
  },
  production: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: 'mysql',
    logging: false, // Optional: to disable logging
  },
};
