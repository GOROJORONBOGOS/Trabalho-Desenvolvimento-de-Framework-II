const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
return sequelize.define('Enrollment', {
id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
status: { type: DataTypes.ENUM('matriculado', 'cancelado'), defaultValue: 'matriculado' },
enrolledAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
}, { tableName: 'enrollments' });
};