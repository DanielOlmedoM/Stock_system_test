const { sequelize } = require('./config/database');
const User = require('./models/User')(sequelize);

async function seedUsers() {
  try {
    // Array of seed users
    const seedUserData = [
      { username: 'user1', email: 'user1@example.com' },
      { username: 'user2', email: 'user2@example.com' },
      { username: 'user3', email: 'user3@example.com' },
      { username: 'user4', email: 'user4@example.com' },
      { username: 'user5', email: 'user5@example.com' },
      // Add more seed users as needed
    ];

    // Create seed users
    await User.bulkCreate(seedUserData);

    console.log('Seed users created successfully');
  } catch (error) {
    console.error('Error seeding users:', error.message);
  } finally {
    // Close the Sequelize connection
    await sequelize.close();
  }
}

// Run the seed function
seedUsers();
