// models/Tool.js
const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define('Tool', {
    sku: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false
    },
    line: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    count: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    timestamps: false, // Disable timestamps
    freezeTableName: true,
    tableName: 'Tools',
  });
};
