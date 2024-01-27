const { sequelize } = require('./config/database');
const User = require('./models/User')(sequelize);
const Tool = require('./models/Tool')(sequelize);

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
  }
}

async function seedTools() {
  try {
    // Array of seed tools
    const seedToolsData = [
      { sku: '600062', line: '110/1', description: 'Open end wrench', count:  24},
      { sku: '607882', line: '478/1BI', description: 'Cable shear pliers', count:  0},
      { sku: '627548', line: '556A', description: 'Cutter', count:  10},
      { sku: '616471', line: '603VDE', description: 'Screwdriver', count:  1 },
      { sku: '605518', line: '6492C8', description: 'Torx bit set', count:  2 },
      // Add more seed tools as needed
    ];

    // Create seed tools
    await Tool.bulkCreate(seedToolsData);

    console.log('Seed tools created successfully');
  } catch (error) {
    console.error('Error seeding tools:', error.message);
  }
}

// Run the seed functions
(async () => {
  try {
    await seedUsers();
    await seedTools();
  } catch (error) {
    console.error('Error running seed functions:', error.message);
  } finally {
    // Close the Sequelize connection after seeding both users and tools
    await sequelize.close();
  }
})();
