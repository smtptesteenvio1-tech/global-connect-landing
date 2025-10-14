app.post('/', (req, res) => {
  console.log('Dados recebidos:', req.body);
  res.send(`
    <!DOCTYPE html>
    <html lang="pt-br">
    <head>
      <meta charset="UTF-8"/>
      <title>Simulação de Phishing</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          background-color: #fff3f3;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
        }
        .alert {
          background-color: #f44336;
          color: white;
          padding: 30px;
          border-radius: 8px;
          text-align: center;
          max-width: 500px;
        }
      </style>
    </head>
    <body>
      <div class="alert">
        <h2>Você acaba de cair em um teste de phishing.</h2>
        <p>Esta é uma simulação de segurança realizada pela equipe de TI para fins de conscientização.</p>
      </div>
    </body>
    </html>
  `);
});
