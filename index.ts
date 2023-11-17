const express = require('express');
const bodyParser = require('body-parser');
const usuarioRoutes = require('./controllers/UsuarioController');
const lanceRoutes = require('./controllers/LanceController');
const leilaoRoutes = require('./controllers/LeilaoController');

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Rotas para a entidade Usuario
app.use('/usuarios', usuarioRoutes);

// Rotas para a entidade Lance
app.use('/lances', lanceRoutes);

// Rotas para a entidade Leilao
app.use('/leiloes', leilaoRoutes);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
