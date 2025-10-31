const StudentsModel = require('../models/student');

module.exports = {
async list(req, res) {
try {
const students = await StudentsModel.findAll();
return res.json(students);
} catch (err) {
console.error(err);
return res.status(500).json({ error: 'Falha ao listar estudantes' });
}
},

async getById(req, res) {
try {
const { id } = req.params;
const student = await StudentsModel.findById(id);
if (!student) return res.status(404).json({ error: 'Estudante não encontrado' });
return res.json(student);
} catch (err) {
console.error(err);
return res.status(500).json({ error: 'Falha ao receber estudante' });
}
},

async create(req, res) {
try {
const payload = req.body;
const created = await StudentsModel.create(payload);
return res.status(201).json(created);
} catch (err) {
console.error(err);
return res.status(500).json({ error: 'Falha ao criar estudante' });
}
},

async update(req, res) {
try {
const { id } = req.params;
const payload = req.body;
const updated = await StudentsModel.update(id, payload);
if (!updated) return res.status(404).json({ error: 'Estudante não encontrado' });
return res.json(updated);
} catch (err) {
console.error(err);
return res.status(500).json({ error: 'Falha ao atualizar estudante' });
}
},

async remove(req, res) {
try {
const { id } = req.params;
const deleted = await StudentsModel.delete(id);
if (!deleted) return res.status(404).json({ error: 'Estudante não encontrado' });
return res.status(204).send();
} catch (err) {
console.error(err);
return res.status(500).json({ error: 'Falha ao deletar estudante' });
}
}
};