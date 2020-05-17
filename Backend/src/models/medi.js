const mongoose = require('mongoose');
const { Schema } = mongoose;

const medicSchema = new Schema({
    nombre: { type: String, required: true },
    prospecto: { type: String, require: true},
    existencia: { type: Boolean, required: true },
    laboratorio: { type: String, require: true},
    formafarma: { 
        type: Schema.Types.ObjectId,
        ref: 'formafarma'
        },
    user: { 
        type: Schema.Types.ObjectId,
        ref: 'user'
        }
});

module.exports = mongoose.model('medics', medicSchema);