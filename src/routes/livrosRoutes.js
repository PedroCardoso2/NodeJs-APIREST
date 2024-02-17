import express from "express"
import LivroController from "../Controllers/livroController.js";

const routes = express.Router();

// MOSTRAR TODOS LIVROS
routes.get("/livros", LivroController.listarLivros);
