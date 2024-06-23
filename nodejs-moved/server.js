const db = require('./models'); // Import the db object

const syndata = async () => {
  try {
    await db.sequelize.sync({ force: true }); // Call sync on the sequelize instance
    console.log("Database & tables created!");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

syndata();
