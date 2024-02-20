import express from "express";
import conectaNaDatabase from "./config/dbConnect.js";
import routes from "./routes/index.js";

const conexao = await conectaNaDatabase();

// Se Houve algum erro
conexao.on("error", (erro) => {
  console.error("erro de conexão", erro);
});

// Conexão feita
conexao.once("open", () => {
  console.log("Conexao com o banco feita com sucesso");
})

const app = express();
routes(app);


export default app;
