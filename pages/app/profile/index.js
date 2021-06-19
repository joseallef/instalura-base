import React from 'react';
import PropTypes from 'prop-types';
import websitePageLoggedHOC from '../../../src/components/wrappers/WebsitePageLogged/hoc';
import { authService } from '../../../src/services/auth/authService';
import { userService } from '../../../src/services/user/userService';
import Profile from '../../../src/components/screens/Profile';

export function ProfilePage({ user, posts }) {
  // eslint-disable-next-line react/prop-types
  const postagem = posts.data.map((post) => ({ post }));
  return (
    <Profile postagem={postagem} user={user} />
  );
}

export default websitePageLoggedHOC(ProfilePage, {
  pageWrapperProps: {
    propsLogo: false,
    seoProps: {
      headTitle: 'Perfil',
    },
  },
});

export async function getServerSideProps(ctx) {
  const auth = authService(ctx);

  const hasActiveSession = await auth.hasActiveSession();

  if (hasActiveSession) {
    const session = await auth.getSession();
    const profilePage = await userService.getProfilePage(ctx);
    return {
      props: {
        user: session,
        posts: profilePage,
      }, // will be passed to the page component as props
    };
  }

  ctx.res.writeHead(307, { location: '/login' });
  ctx.res.end();

  return {
    props: {
    },
  };
}

ProfilePage.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.string,
    username: PropTypes.string,
  }).isRequired,
  posts: PropTypes.shape({
    description: PropTypes.string,
    filter: PropTypes.string,
    likes: PropTypes.shape({
      user: PropTypes.string,
      _id: PropTypes.string,
    }),
  }).isRequired,
};
