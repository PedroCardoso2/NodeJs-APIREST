// import http from "http";
import app from "./src/app.js";



const rotas = {
    "/": "Curso de Express.API",
    "/livros": "Entrei na rotas livros",
    "/autores": "Estou em autores"
};



//const server = http.createServer((req, res) => {
//    res.writeHead(200, {"Content-Type": "text/plain"});
//    res.end(rotas[req.url])
//});




app.listen(3000, () => {
    console.log("Servidor escutando")
})