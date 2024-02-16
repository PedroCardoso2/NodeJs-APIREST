const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const app = express();
const PORT = 3000;
const SECRET_KEY = 'seu_segredo_super_secreto';

// Simulação de um banco de dados de usuários
const users = [
  { id: 1, username: 'usuario1', password: '$2b$10$giW9gDqBkc6JGHqVEUzA.Ogy82s/eisgavGb/5FVoMJgR5Lni7ovK' }, // senha: 123456
  // Adicione mais usuários conforme necessário
];

app.use(bodyParser.json());

// Rota para autenticação
app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  // Encontrar usuário no banco de dados
  const user = users.find(u => u.username === username);

  if (!user) {
    return res.status(401).json({ message: 'Credenciais inválidas' });
  }

  try {
    // Comparar senhas de forma assíncrona
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ message: 'Credenciais inválidas' });
    }

    // Gerar token JWT
    const token = jwt.sign({ userId: user.id, username: user.username }, SECRET_KEY, { expiresIn: '1h' });

    res.json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro interno do servidor' });
  }
});

// Restante do código permanece o mesmo

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
