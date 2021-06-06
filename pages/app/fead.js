import React from 'react';
import PropTypes from 'prop-types';
import { authService } from '../../src/services/auth/authService';
import { userService } from '../../src/services/user/userService';
import { Grid } from '../../src/components/foundation/layout/Grid';
import Card from '../../src/components/commons/Card';
import Profile from '../../src/components/commons/Profile';
import websitePageLoggedHOC from '../../src/components/wrappers/WebsitePageLogged/hoc';

export function FeadPage({ posts, user }) {
  // eslint-disable-next-line react/prop-types
  const pathImg = posts.data.map((post) => ({ data: post }));

  userService.getProfilePage()
    // eslint-disable-next-line no-unused-vars
    .then((response) => {
      // eslint-disable-next-line no-console
      // console.log(response, props);
    });

  return (
    <Grid.Container
      paddingRight={{
        sx: '0px',
        md: '90px',
      }}
      paddingLeft={{
        sx: '0px',
        md: '90px',
      }}
    >
      <Grid.Row
        justifyContent="center"
        marginTop="20px"
      >
        <Grid.Col
          display="block"
          value={{
            lg: 6,
          }}
          offset={{
            lg: 0,
          }}
        >
          <Card post={pathImg} user={user} />
        </Grid.Col>

        <Grid.Col
          display="block"
        >
          <Profile />
        </Grid.Col>
      </Grid.Row>
    </Grid.Container>
  );
}
// {/* <img src="https://media.giphy.com/media/bn0zlGb4LOyo8/giphy.gif" alt="Nicolas Cage" /> */}
// export default websitePageHOC(FeadPage, {
//   pageWrapperProps: {
//     seoProps: {
//       headTitle: 'Fead',
//     },
//     menuProps: {
//       display: false,
//     },
//     headerProps: {
//       display: false,
//     },
//   },
// });

export default websitePageLoggedHOC(FeadPage, {
  propsLogo: true,
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

FeadPage.propTypes = {
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
