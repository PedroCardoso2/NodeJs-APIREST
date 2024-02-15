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

function buscaLivro(id){
    return livros.findIndex(livros => {
        return livros.id === Number(id);
    })
}


app.get("/", (req,res) => {
    res.status(200).send("Curso Node.js"); 
});

app.get("/livros", (req, res) => {
    res.status(200).json(livros);
});

app.get("/livros/:id", (req, res) => {
    const index = buscaLivro(req.params.id);

    res.status(200).json(livros[index]);
})


app.post("/livros", (req,res) => {
    livros.push(req.body);
    res.status(201).send("Livro Cadastrado com Sucesso");
});

app.put("/livros/:id", (req,res) => {
    const index = buscaLivro(req.params.id);
    livros[index].titulo = req.body.titulo;

    res.status(200).json(livros[index]);
})

export default app;