const EnrollmentsModel = require('../models/enrollment'); 
const ClassesModel = require('../models/class');
const StudentsModel = require('../models/student');


module.exports = {
async list(req, res) {
try {
const enrollments = await EnrollmentsModel.findAll();
return res.json(enrollments);
} catch (err) {
console.error(err);
return res.status(500).json({ error: 'Falha ao listar a matricula' });
}
},

async getById(req, res) {
try {
const { id } = req.params;
const enrollment = await EnrollmentsModel.findById(id);
if (!enrollment) return res.status(404).json({ error: 'Matricula não encontrada' });
return res.json(enrollment);
} catch (err) {
console.error(err);
return res.status(500).json({ error: 'Falha ao receber a matricula' });
}
},


async create(req, res) {
try {
const { studentId, classId, ...meta } = req.body;

const student = await StudentsModel.findById(studentId);
if (!student) return res.status(400).json({ error: 'Aluno não encontrado' });

const cls = await ClassesModel.findById(classId);
if (!cls) return res.status(400).json({ error: 'Aula não encontrada' });


const created = await EnrollmentsModel.create({ studentId, classId, ...meta });
return res.status(201).json(created);
} catch (err) {
console.error(err);
return res.status(500).json({ error: 'Falha ao criar a matricula' });
}
},

async update(req, res) {
try {
const { id } = req.params;
const payload = req.body;
const updated = await EnrollmentsModel.update(id, payload);
if (!updated) return res.status(404).json({ error: 'Matricula não encontrada' });
return res.json(updated);
} catch (err) {
console.error(err);
return res.status(500).json({ error: 'Falha ao atualizar a matricula' });
}
},

async remove(req, res) {
try {
const { id } = req.params;
const deleted = await EnrollmentsModel.delete(id);
if (!deleted) return res.status(404).json({ error: 'Matricula não encontrada' });
return res.status(204).send();
} catch (err) {
console.error(err);
return res.status(500).json({ error: 'Falha ao deletar a matricula' });
}
}
};