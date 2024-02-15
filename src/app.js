import express from "express";

const app = express();
// Conversão para JSON
app.use(express.json());

const livros = [
    {
        id: 1,
        titulo: "O senhor dos anéis"
    },
    {
        id: 2,
        titulo: "O hobbit"
    }
]


app.get("/", (req,res) => {
    res.status(200).send("Curso Node.js"); 
});

app.get("/livros", (req, res) => {
    res.status(200).json(livros);
});


app.post("/livros", (req,res) => {
    livros.push(req.body);
    res.status(201).send("Livro Cadastrado com Sucesso");
});
export default app;