import express from "express";
import connectDataBase from "./config/dbConnection.js";
import livro from "./models/Livros.js";

const conexao = await connectDataBase();

conexao.on("Error", error => {
  console.error("erro de conexão", error)
});

conexao.once("open" , () => {
  console.log("Conexão com o Banco de Dados MongoDb")
});

const app = express();
// Conversão para JSON
app.use(express.json());



app.get("/", (req, res) => {
  res.status(200).send("Curso Node.js");
});


// MOSTRAR TODOS LIVROS
app.get("/livros", async (req, res) => {
  const listaLivros = await livro.find({});
  res.status(200).json(listaLivros);
});




// MOSTRAR REGISTRO ÚNICO
app.get("/livros/:id", (req, res) => {
  const index = buscaLivro(req.params.id);

  res.status(200).json(livros[index]);
});


// ADICIONAR LIVRO
app.post("/livros", (req, res) => {
  livros.push(req.body);
  res.status(201).send("Livro Cadastrado com Sucesso");
});


// ATUALIZAR LIVRO --> PATCH
app.put("/livros/:id", (req, res) => {
  const index = buscaLivro(req.params.id);
  livros[index].titulo = req.body.titulo;

  res.status(200).json(livros[index]);
});


// DELETAR LIVRO
app.delete("/livros/:id", (req, res) => {
  const index = buscaLivro(req.params.id);
  livros.splice(index, 1);

  res.status(204).send("Deletado");
});



export default app;



