const express = require('express');
const router = express.Router();
const { Op } = require('sequelize');
const { sequelize } = require('../config/database');
const User = require('../models/User')(sequelize);
const Tool = require('../models/Tool')(sequelize);

// ...
router.get('/', async (req, res) => {
  try {
    // console.log('Index test');

    // Render the users.handlebars page and pass the user data
    res.render('index');
  } catch (error) {
    console.error('Error fetching users:', error.message);
    res.status(500).send('Internal Server Error');
  }
});

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

// router.get('/tools', async (req, res) => {
//   try {
//     // Fetch all tools from the database
//     const allTools = await Tool.findAll();

//     // Log the fetched tools
//     console.log('Fetched tools:', allTools);

//     // Render the tools.handlebars page and pass the user data
//     res.render('tools', { tools: allTools });
//   } catch (error) {
//     console.error('Error fetching tools:', error.message);
//     res.status(500).send('Internal Server Error');
//   }
// });

router.get('/tools', async (req, res) => {
  try {
    // Check if a search query is provided
    const { search } = req.query;

    // Fetch tools based on the search query
    let tools;
    if (search) {
      tools = await Tool.findAll({
        where: {
          // Modify the condition based on your Tool model's attributes
          // For example, assuming 'name' is an attribute of Tool
          sku: Number(search), // Convert search to a number
        },
      });
    } else {
      // Fetch all tools if no search query is provided
      tools = await Tool.findAll();
    }

    // Log the fetched tools
    console.log('Fetched tools:', tools);

    // Render the tools.handlebars page and pass the tool data
    res.render('tools', { tools, search });
  } catch (error) {
    console.error('Error fetching tools:', error.message);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
