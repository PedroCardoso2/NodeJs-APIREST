import mongoose from "mongoose";

// Schema => Objeto de configuração que define a estrutura e as propriedades de um documento
// Interface
const livrosSchema = new mongoose.Schema({
    id : {type : mongoose.Schema.Types.ObjectId },
    titulo : { type : String, required : true },
    editora : { type : String},
    preco : {type : Number},
    paginas : {type : Number}
}, {versionKey : false});



const livro = mongoose.model("livros", livrosSchema);

export default livro;