import express from "express"
import LivroController from "../Controllers/livroController.js";

const routes = express.Router();

// MOSTRAR TODOS LIVROS
routes.get("/livros", LivroController.listarLivros);
routes.get("/livros:id", LivroController.listarLivroPorId);
routes.post("/livros", LivroController.adicionarLivro);
routes.put("/livros/:id", LivroController.atualizarLivro);


export default routes;
