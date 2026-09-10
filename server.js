import 'dotenv/config';
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import nodemailer from 'nodemailer';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Servir arquivos estáticos do diretório dist
app.use(express.static(path.join(__dirname, 'dist')));

const DESTINATARIO = process.env.EMAIL_DESTINATARIO || 'biamendes.profissional@gmail.com';

// Rota de recebimento e disparo de e-mail do formulário de contato
app.post('/api/contato', async (req, res) => {
  const { nome, email, telefone, empresa, segmento, mensagem } = req.body;

  if (!nome || !email) {
    return res.status(400).json({
      success: false,
      message: 'Nome e e-mail são campos obrigatórios.',
    });
  }

  // Verifica se as credenciais SMTP foram configuradas
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;

  if (!smtpUser || !smtpPass) {
    console.warn('⚠️ [AVISO SMTP] As variáveis SMTP_USER e SMTP_PASS ainda não foram preenchidas no arquivo .env.');
    console.log('📋 [DADOS DO FORMULÁRIO RECEBIDOS]:', { nome, email, telefone, empresa, segmento, mensagem });

    return res.status(200).json({
      success: true,
      message: 'Solicitação recebida com sucesso (Modo simulação: configure SMTP_USER e SMTP_PASS no .env para envio real).',
      destinatario: DESTINATARIO,
      dados: { nome, email, telefone, empresa, segmento, mensagem }
    });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    const mailOptions = {
      from: `"Site Polimeter" <${smtpUser}>`,
      to: DESTINATARIO,
      replyTo: email,
      subject: `[Novo Contato Comercial] ${nome} - ${empresa || 'Cliente'}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px; background-color: #f8fafc;">
          <h2 style="color: #0ea5e9; border-bottom: 2px solid #0ea5e9; padding-bottom: 10px; margin-top: 0;">
            Novo Contato Recebido pelo Site - Polimeter
          </h2>
          <p style="font-size: 15px; color: #334155;">Você recebeu uma nova solicitação de contato com os seguintes dados:</p>
          
          <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
            <tr>
              <td style="padding: 10px; font-weight: bold; width: 30%; color: #475569; border-bottom: 1px solid #e2e8f0;">Nome:</td>
              <td style="padding: 10px; color: #0f172a; border-bottom: 1px solid #e2e8f0;">${nome}</td>
            </tr>
            <tr>
              <td style="padding: 10px; font-weight: bold; color: #475569; border-bottom: 1px solid #e2e8f0;">E-mail:</td>
              <td style="padding: 10px; color: #0f172a; border-bottom: 1px solid #e2e8f0;"><a href="mailto:${email}" style="color: #0ea5e9;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px; font-weight: bold; color: #475569; border-bottom: 1px solid #e2e8f0;">Telefone:</td>
              <td style="padding: 10px; color: #0f172a; border-bottom: 1px solid #e2e8f0;">${telefone || 'Não informado'}</td>
            </tr>
            <tr>
              <td style="padding: 10px; font-weight: bold; color: #475569; border-bottom: 1px solid #e2e8f0;">Empresa:</td>
              <td style="padding: 10px; color: #0f172a; border-bottom: 1px solid #e2e8f0;">${empresa || 'Não informada'}</td>
            </tr>
            <tr>
              <td style="padding: 10px; font-weight: bold; color: #475569; border-bottom: 1px solid #e2e8f0;">Segmento:</td>
              <td style="padding: 10px; color: #0f172a; border-bottom: 1px solid #e2e8f0;">${segmento || 'Não informado'}</td>
            </tr>
            <tr>
              <td style="padding: 10px; font-weight: bold; color: #475569; vertical-align: top;">Mensagem:</td>
              <td style="padding: 10px; color: #0f172a; white-space: pre-line;">${mensagem || 'Nenhuma mensagem adicional.'}</td>
            </tr>
          </table>

          <div style="margin-top: 25px; padding-top: 15px; border-top: 1px solid #e2e8f0; font-size: 12px; color: #94a3b8; text-align: center;">
            Este e-mail foi enviado automaticamente através do formulário de contato do site Polimeter.
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    console.log(`✅ [E-MAIL ENVIADO COM SUCESSO] para ${DESTINATARIO}`);

    res.status(200).json({
      success: true,
      message: 'Solicitação enviada com sucesso.',
      destinatario: DESTINATARIO,
    });
  } catch (error) {
    console.error('❌ [ERRO AO ENVIAR E-MAIL]:', error);
    res.status(500).json({
      success: false,
      message: 'Ocorreu um erro interno ao enviar o e-mail. Tente novamente mais tarde.',
    });
  }
});

// Lidar com rotas do React Router (SPA redirecionamento para o index.html)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
