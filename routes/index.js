const express = require('express');
const router = express.Router();
const { sequelize } = require('../config/database');
const User = require('../models/User')(sequelize);

// ...

// Example route to render user list
router.get('/users', async (req, res) => {
  try {
    // Fetch all users from the database
    const allUsers = await User.findAll();

    // Log the fetched users
    console.log('Fetched users:', allUsers);

    // Render the users.handlebars page and pass the user data
    res.render('users', { users: allUsers });
  } catch (error) {
    console.error('Error fetching users:', error.message);
    res.status(500).send('Internal Server Error');
  }
});


module.exports = router;
