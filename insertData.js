// insertData.js

const fs = require('fs');
const { sequelize } = require('./config/database');
const Tool = require('./models/Tool')(sequelize);

// Read and parse the JSON file
const jsonData = fs.readFileSync('tool_data.json');
const data = JSON.parse(jsonData);

// Function to delete all existing data in the table
const deleteExistingData = async () => {
    try {
      await Tool.destroy({ where: {} });
      console.log('Existing data deleted successfully.');
    } catch (error) {
      console.error('Error deleting existing data:', error);
    }
  };
  
  // Function to create instances and insert new data
  const createInstances = async () => {
    try {
      // Delete existing data first
      await deleteExistingData();
  
      // Iterate through the data and create instances of your Sequelize model
      for (const item of data) {
        await Tool.create(item);
      }
      console.log('New data inserted successfully.');
    } catch (error) {
      console.error('Error inserting data:', error);
    }
  };
  
  // Call the function to delete existing data and insert new data
  createInstances();