/* eslint-disable no-console */
import { isStagingEnv } from '../../infra/env/isStagingEnv';
import { HttpClient } from '../../infra/http/HttpClient';
import { authService } from '../auth/authService';

const BASE_URL = isStagingEnv
// BAck End de DEV
  ? 'https://instalura-api-git-master-omariosouto.vercel.app'

// Back End de PROD
  : 'https://instalura-api-git-master-omariosouto.vercel.app';

export const userService = {
  async getProfilePage(ctx) {
    const url = `${BASE_URL}/api/users/posts`;
    // console.log(ctx);
    try {
      const token = await authService(ctx).getToken();
      // eslint-disable-next-line no-unused-vars
      const { data } = await HttpClient(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      // eslint-disable-next-line no-console
      // console.log('response ', response);

      return {
        data,
      };
    } catch (err) {
      throw new Error('Não consegimos pegar os posts');
    }
  },
  async post(photoUrl, filter) {
    if (photoUrl.length < 80) {
      const url = `${BASE_URL}/api/posts`;
      const token = await authService(null).getToken();
      const description = 'new image';

      const response = await HttpClient(url, {
        method: 'POST',
        body: {
          photoUrl,
          description,
          filter,
        },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log('resposta enviada ', response);
      return {
        posts: [
          response,
        ],
      };
    }
    // eslint-disable-next-line no-alert
    alert('Url muito grande');
    return {};
  },

  async toggleLike(id) {
    const url = `${BASE_URL}/api/posts/${id}/like`;
    const token = await authService(null).getToken();

    const res = await HttpClient(url, {
      method: 'POST',
      body: {},
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log('deu like', res);
    return {
      like: [
        res,
      ],
    };
  },
};
