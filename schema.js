const mongoose = require("mongoose");
var Schema = mongoose.Schema;
var voluntariasSchema = new Schema({
    _id: { type: mongoose.Schema.Types.ObjectId, auto: true},
    nome: { type: String, required: true},
    email: { type: String },
    telefone: { type: String },
    endereco: { type: String },
    horarios: { type: String },
    sobre: { type: String }
})

const voluntariasModel = mongoose.model("voluntarias", voluntariasSchema);

module.exports = voluntariasModel; 