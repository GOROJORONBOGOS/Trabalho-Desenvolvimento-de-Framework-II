const SubjectsModel = require('../models/subject');

module.exports = {
  async list(req, res) {
    try {
      const subjects = await SubjectsModel.findAll();
      return res.status(200).json(subjects);
    } catch (err) {
      console.error('Error listing subjects:', err);
      return res.status(500).json({ error: 'Falha ao listar as materias' });
    }
  },

  async getById(req, res) {
    try {
      const { id } = req.params;
      const subject = await SubjectsModel.findById(id);
      if (!subject) {
        return res.status(404).json({ error: 'Materia não encontrada' });
      }
      return res.status(200).json(subject);
    } catch (err) {
      console.error('Error getting subject:', err);
      return res.status(500).json({ error: 'Falha ao receber a materia' });
    }
  },

  async create(req, res) {
    try {
      const { name, code, teacherId } = req.body;
      if (!name || !code) {
        return res.status(400).json({ error: 'Nome e código necessarios' });
      }
      const newSubject = await SubjectsModel.create({ name, code, teacherId });
      return res.status(201).json(newSubject);
    } catch (err) {
      console.error('Erro ao criar a materia:', err);
      return res.status(500).json({ error: 'Falha ao criar a materia' });
    }
  },

  async update(req, res) {
    try {
      const { id } = req.params;
      const payload = req.body;
      const updated = await SubjectsModel.update(id, payload);
      if (!updated) {
        return res.status(404).json({ error: 'Materia não encontrada' });
      }
      return res.status(200).json(updated);
    } catch (err) {
      console.error('Erro ao atualizar a materia:', err);
      return res.status(500).json({ error: 'Erro ao atualizar a materia' });
    }
  },

  async remove(req, res) {
    try {
      const { id } = req.params;
      const deleted = await SubjectsModel.delete(id);
      if (!deleted) {
        return res.status(404).json({ error: 'Materia não encontrada' });
      }
      return res.status(204).send();
    } catch (err) {
      console.error('Erro ao deletar a materia:', err);
      return res.status(500).json({ error: 'Erro ao deletar a materia' });
    }
  }
};