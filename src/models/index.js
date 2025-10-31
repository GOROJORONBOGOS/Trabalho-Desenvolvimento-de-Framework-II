const Sequelize = require('sequelize');
const sequelize = require('../../config/database');


const Student = require('./student')(sequelize);
const Teacher = require('./teacher')(sequelize);
const Subject = require('./subject')(sequelize);
const ClassModel = require('./class')(sequelize);
const Enrollment = require('./enrollment')(sequelize);

Teacher.hasMany(ClassModel, { foreignKey: 'teacherId' });
ClassModel.belongsTo(Teacher, { foreignKey: 'teacherId' });


Subject.hasMany(ClassModel, { foreignKey: 'subjectId' });
ClassModel.belongsTo(Subject, { foreignKey: 'subjectId' });

Student.belongsToMany(ClassModel, { through: Enrollment, foreignKey: 'studentId', otherKey: 'classId' });
ClassModel.belongsToMany(Student, { through: Enrollment, foreignKey: 'classId', otherKey: 'studentId' });


Enrollment.belongsTo(Student, { foreignKey: 'studentId' });
Enrollment.belongsTo(ClassModel, { foreignKey: 'classId' });


module.exports = {
sequelize,
Sequelize,
Student,
Teacher,
Subject,
ClassModel,
Enrollment
};