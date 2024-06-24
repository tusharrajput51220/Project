const db = require('./models'); // Import the db object

const syndata = async () => {
  try {
    await db.sequelize.sync({ force: false }); // non-drop 
    console.log("Database & tables created!");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

syndata();
