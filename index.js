const express = require('express');
const { Sequelize, DataTypes } = require('sequelize');

const app = express();
const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: 'mysql'
});

// Define your Sequelize models here (e.g., User model)
const User = require('./models/User')(sequelize);

// Sync the database and start the server
sequelize.sync({ force: true }).then(() => {
  console.log('Database synced');

  // Example route
  app.get('/', (req, res) => {
    res.send('Hello World!');
  });

  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
