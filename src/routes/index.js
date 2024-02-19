import express from "express";
import livro from "../routes/livrosRoutes.js";

const routes = (app) => {
  app.route("/").get((req, res) => res.status(200).send("Node.js"));

  // Conversão para JSON
  app.use(express.json(), livro);
};

export default routes;
