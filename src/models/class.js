const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
return sequelize.define('Class', {
id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
name: { type: DataTypes.STRING, allowNull: false },
schedule: { type: DataTypes.STRING },
capacity: { type: DataTypes.INTEGER, defaultValue: 30 }
}, { tableName: 'classes' });
};