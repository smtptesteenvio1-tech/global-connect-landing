const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname));

app.post('/', (req, res) => {
  console.log('Dados recebidos:', req.body);
  res.send('<h2>Obrigado! Seus dados foram registrados.</h2>');
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
