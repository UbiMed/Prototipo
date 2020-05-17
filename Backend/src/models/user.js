//OBTENIENDO LA CLAVE DE ENCRIPTACION 
const mongoose = require('mongoose');

const { Schema } = mongoose;

//MODULO PARA REALIZAR LA ENCRIPTACION 
const bcrypt = require('bcryptjs')

const UserSchema = new Schema({
    nombre: { type: String, required: true },
    password: { type: String, required: true },
    coordenadas: {
        lat: { type: Number, required: true},
        lan: { type: Number, required: true}
    },
    signupDate: { type: Date, default: Date.now() },
    lastLogin: Date,
    medics: [{
        type: Schema.Types.ObjectId,
        ref: 'medi'
    }]
    
});

    //ENCRIPTANDO LA CONTRASEÑA 
    UserSchema.methods.encryptPassword = async (password) => {
        const salt =  await bcrypt.genSalt(10);
        return bcrypt.hash(password, salt)
    }

    //VALIDACION DE LA CONTRASEÑA DESENCRIPTADA
    UserSchema.methods.validatePassword = function (password) {
       return bcrypt.compare(password, this.password)
    }

//EXPORTANDO EL SQUEMA DEL USUARIO 
module.exports = mongoose.model('User', UserSchema);