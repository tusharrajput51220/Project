const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import the cors package
const db = require('./models'); // Import the db object which includes sequelize instance
const userRoutes = require('./routes/userroute');

const app = express();

// Configure CORS
app.use(cors());
// app.use(cors({
//   origin: 'http://localhost:3000', // Allow only this origin
//   methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed methods
//   allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers
//   credentials: true // Enable Access-Control-Allow-Credentials
// }));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
// app.use(userRoutes);
userRoutes(app);

const PORT = process.env.PORT || 8000;

db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}).catch(error => {
  console.error('Unable to connect to the database:', error);
});

module.exports = app;
