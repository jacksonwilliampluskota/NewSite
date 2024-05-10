const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 3000;

// Configuração do bodyParser para lidar com solicitações POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Permitir apenas requisições de 'http://localhost:8080'
app.use(cors({
    origin: 'http://localhost:8080'
}));

// Substitua pelos seus dados reais do Gmail
const YOUR_EMAIL = 'sanplus.gamestudio@gmail.com';
const YOUR_PASSWORD = 'ygdvphmuahuxsqre';

// Configuração do Nodemailer para usar o Gmail
let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: YOUR_EMAIL,
    pass: YOUR_PASSWORD,
  },
});

// Rota POST para enviar e-mails
app.post('/send-email', (req, res) => {
  const { name, email, message } = req.body;

  let mailOptions = {
    from: email, // Remetente do e-mail
    to: YOUR_EMAIL, // Destinatário do e-mail
    subject: `Novo contato do formulario do site.`,
    text: `Novo contato do formulario do site.\n\nName: ${name}\nEmail: ${email}\nMensagem: ${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send("Erro ao enviar o seu e-mail: " + error.toString());
    }
    res.status(200).send("E-mail enviado com sucesso: " + info.response);
  });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});