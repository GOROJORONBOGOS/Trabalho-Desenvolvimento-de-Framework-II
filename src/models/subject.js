const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
return sequelize.define('Subject', {
id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
code: { type: DataTypes.STRING, allowNull: false, unique: true },
name: { type: DataTypes.STRING, allowNull: false }
}, { tableName: 'subjects' });
};