const Medi = require('../models/medi')

module.exports = {

    allmedi: async (req, res, next) => {
        const medics = await Medi.find({});
        res.json(medics);
    },

    onemedi: async (req, res, next) => {
        const medi = await Medi.findById(req.params.id);
        res.json(medi);
    },

    insertmedi: async (req, res, next) => {
        const { nombre, prospecto, existencia, laboratorio, formafarma } = req.body;
        const medi = new Medi ({ nombre, prospecto, existencia, laboratorio, formafarma });
        await medi.save();
        res.json({status: 'recivido'});
    },

    updatemedi: async (req, res, next) => {
        const { nombre, prospecto, existencia, laboratorio, formafarma } = req.body;
        const newMedi = { nombre, prospecto, existencia, laboratorio, formafarma };
        await Medi.findByIdAndUpdate(req.params.id, newMedi, {useFindAndModify: false});
        res.json({status: 'Usuario Actualizado'})
    },

    deletemedi: async (req, res, next) => {
        await Medi.findByIdAndRemove(req.params.id);
        res.json({status: 'Usuario Eliminado'});
    }
}