const mongoose = require('mongoose');
const { Schema } = mongoose;

const formaFarmaSchema = new Schema({
    nombre: { type: String, required: true },
    descripcion: { type: String, required: true }
});

module.exports = mongoose.model('formaFarma', formaFarmaSchema);