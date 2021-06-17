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
      // console.log('response ', data);

      return {
        data,
      };
    } catch (err) {
      throw new Error(err, 'Não consegimos pegar os posts');
    }
  },
  async post(photoUrl, filter) {
    const url = `${BASE_URL}/api/posts`;
    try {
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
      return {
        posts: [
          response,
        ],
      };
    } catch (err) {
      throw new Error(err, 'Erro ao cadastrar um novo poste');
    }
  },

  async toggleLike(id) {
    const url = `${BASE_URL}/api/posts/${id}/like`;
    try {
      const token = await authService(null).getToken();

      const res = await HttpClient(url, {
        method: 'POST',
        body: {},
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return {
        like: [
          res,
        ],
      };
    } catch (err) {
      throw new Error(err, 'Erro no like! ):');
    }
  },
};
