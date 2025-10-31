const { sequelize, Student, Teacher, Subject, ClassModel, Enrollment } = require('./src/models');


(async () => {
await sequelize.sync({ force: true });


const t1 = await Teacher.create({ name: 'Ana Silva', email: 'ana@example.com', registration: 'T-001' });
const t2 = await Teacher.create({ name: 'João Pereira', email: 'joao@example.com', registration: 'T-002' });


const s1 = await Subject.create({ code: 'MAT101', name: 'Matemática Básica' });
const s2 = await Subject.create({ code: 'FIS101', name: 'Física I' });


const c1 = await ClassModel.create({ name: 'MAT101 - Turma A', subjectId: s1.id, teacherId: t1.id, schedule: 'Seg 8:00' });
const c2 = await ClassModel.create({ name: 'FIS101 - Turma B', subjectId: s2.id, teacherId: t2.id, schedule: 'Ter 10:00' });


const a1 = await Student.create({ name: 'Carlos', email: 'carlos@example.com', registration: 'S-001' });
const a2 = await Student.create({ name: 'Mariana', email: 'mariana@example.com', registration: 'S-002' });


await Enrollment.create({ studentId: a1.id, classId: c1.id });
await Enrollment.create({ studentId: a2.id, classId: c2.id });


console.log('Seed completo');
process.exit(0);
})();