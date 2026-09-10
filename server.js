import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Servir arquivos estáticos do diretório dist
app.use(express.static(path.join(__dirname, 'dist')));

const DESTINATARIO = 'polimeter@polimeter.com.br';

app.post('/api/contato', async (req, res) => {
  const { nome, email, telefone, empresa, segmento, mensagem } = req.body;

  res.status(200).json({
    success: true,
    message: 'Solicitação enviada com sucesso.',
    destinatario: DESTINATARIO,
    dados: { nome, email, telefone, empresa, segmento, mensagem }
  });
});

// Lidar com rotas do React Router (SPA redirecionamento para o index.html)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
