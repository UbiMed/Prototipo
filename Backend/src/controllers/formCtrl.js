const formafarma = require('../models/formafarma');

module.exports = {
    
    allform: async (req, res, next) => {
        const forms = await formafarma.find({});
        res.json(forms);
    },

    oneform: async (req, res, next) => {
        const form = await formafarma.findById(req.params.id);
        res.json(form);
    },

    insertform: async (req, res, next) => {
        const { nombre, descripcion } = req.body;
        const form = new formafarma ({ nombre, descripcion });
        await form.save();
        res.json({status: 'recivido'});
    },

    updateform: async (req, res, next) => {
        const { nombre, descripcion } = req.body;
        const newForm = { nombre, descripcion };
        await formafarma.findByIdAndUpdate(req.params.id, newForm, {useFindAndModify: false});
        res.json({status: 'Forma Farmaceutica Actualizado'})
    },

    deleteform: async (req, res, next) => {
        await formafarma.findByIdAndRemove(req.params.id);
        res.json({status: 'Forma Farmaceutica Eliminada'});
    }
}

