const ClassesModel = require('../models/class');

module.exports = {
async list(req, res) {
try {
const classes = await ClassesModel.findAll();
return res.json(classes);
} catch (err) {
console.error(err);
return res.status(500).json({ error: 'Falha ao listar a aula' });
}
},

async getById(req, res) {
try {
const { id } = req.params;
const cls = await ClassesModel.findById(id);
if (!cls) return res.status(404).json({ error: 'Aula não encontrada' });
return res.json(cls);
} catch (err) {
console.error(err);
return res.status(500).json({ error: 'Falha ao receber a aula' });
}
},

async create(req, res) {
try {
const payload = req.body;
const created = await ClassesModel.create(payload);
return res.status(201).json(created);
} catch (err) {
console.error(err);
return res.status(500).json({ error: 'Falha ao criar a aula' });
}
},

async update(req, res) {
try {
const { id } = req.params;
const payload = req.body;
const updated = await ClassesModel.update(id, payload);
if (!updated) return res.status(404).json({ error: 'Aula não encontrada' });
return res.json(updated);
} catch (err) {
console.error(err);
return res.status(500).json({ error: 'Falha ao atualizar a aula' });
}
},

async remove(req, res) {
try {
const { id } = req.params;
const deleted = await ClassesModel.delete(id);
if (!deleted) return res.status(404).json({ error: 'Aula não encontrad' });
return res.status(204).send();
} catch (err) {
console.error(err);
return res.status(500).json({ error: 'Falha ao deletar a aula' });
}
}
};