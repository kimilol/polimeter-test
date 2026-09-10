export async function enviarContato(dados) {
  const response = await fetch('/api/contato', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(dados),
  });

  if (!response.ok) {
    throw new Error('Não foi possível enviar a solicitação.');
  }

  return response.json();
}
