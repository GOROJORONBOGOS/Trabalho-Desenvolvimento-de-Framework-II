const TeachersModel = require('../models/teacher');

module.exports = {
async list(req, res) {
try {
const teachers = await TeachersModel.findAll();
return res.json(teachers);
} catch (err) {
console.error(err);
return res.status(500).json({ error: 'Falha ao listar professores' });
}
},

async getById(req, res) {
try {
const { id } = req.params;
const teacher = await TeachersModel.findById(id);
if (!teacher) return res.status(404).json({ error: 'Professor não encontrado' });
return res.json(teacher);
} catch (err) {
console.error(err);
return res.status(500).json({ error: 'Falha ao receber professor' });
}
},

async create(req, res) {
try {
const payload = req.body;
const created = await TeachersModel.create(payload);
return res.status(201).json(created);
} catch (err) {
console.error(err);
return res.status(500).json({ error: 'Falha ao criar professor' });
}
},

async update(req, res) {
try {
const { id } = req.params;
const payload = req.body;
const updated = await TeachersModel.update(id, payload);
if (!updated) return res.status(404).json({ error: 'Professor não encontrado' });
return res.json(updated);
} catch (err) {
console.error(err);
return res.status(500).json({ error: 'Falha ao atualizar professor' });
}
},

async remove(req, res) {
try {
const { id } = req.params;
const deleted = await TeachersModel.delete(id);
if (!deleted) return res.status(404).json({ error: 'Professor não encontrado' });
return res.status(204).send();
} catch (err) {
console.error(err);
return res.status(500).json({ error: 'Falha ao deletar professor' });
}
}
};