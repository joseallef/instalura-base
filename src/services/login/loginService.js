import { setCookie, destroyCookie } from 'nookies';
import { isStagingEnv } from '../../infra/env/isStagingEnv';

async function HttpClient(url, { headers, body, ...options }) {
  return fetch(url, {
    headers: {
      ...headers,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
    ...options,
  })
  .then((respostaDoServer)  => {
    if(respostaDoServer.ok){
      return respostaDoServer.json();
    }  
    throw new Error('Falha em pegar os dados do servidor : (');
  });
}

const BASE_URL = isStagingEnv
// BAck End de DEV
? 'https://instalura-api-git-master-omariosouto.vercel.app'

// Back Ende de PROD
: 'https://instalura-api.omariosouto.vercel.app';

export const loginService = {
  async login({ username, password, } ){
    return HttpClient(`${BASE_URL}/api/login`, {
      method: 'POST',
      body: {
        username,
        password,
      },
    })
    .then((respostaConvertida) => {
      const { token } = respostaConvertida.data;
      const DAY_IN_SECONDS = 86400;
      
      // Salvar o Token
      setCookie(null, 'APP_TOKEN', token, {
        path: '/',
        maxAge: DAY_IN_SECONDS * 7,
      });

      // Escrever os testes
      return token;
    });
  },
  logout() {
    destroyCookie(null, 'APP_TOKEN');
  },
};