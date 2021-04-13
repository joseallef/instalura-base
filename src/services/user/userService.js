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
    try {
      const token = await authService(ctx).getToken();
      const response = await HttpClient(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      // eslint-disable-next-line no-console
      console.log('response ', response);

      return {
        posts: [],
      };
    } catch (err) {
      throw new Error('Não consegimos pegar os posts');
    }
  },
};
