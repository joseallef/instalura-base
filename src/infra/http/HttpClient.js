export async function HttpClient(url, { headers, body, ...options }) {
  return fetch(url, {
    headers: {
      ...headers,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
    ...options,
  })
    .then((respostaDoServer) => {
      if (respostaDoServer.ok) {
        if (respostaDoServer.status === 204) {
          return { };
        }
        return respostaDoServer.json();
      }
      if (respostaDoServer.status === 401) {
        return { };
      }
      throw new Error('Falha em pegar os dados do servidor :(');
    });
}
