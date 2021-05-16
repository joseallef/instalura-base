import React from 'react';
import { Box } from '../../src/components/foundation/layout/Box';
import { authService } from '../../src/services/auth/authService';
import { userService } from '../../src/services/user/userService';
import MenuLogged from '../../src/components/commons/Menu/Logged';

export default function ProfilePage(props) {
  userService.getProfilePage()
    .then((response) => {
      // eslint-disable-next-line no-console
      console.log(response, props);
    });
  return (
    <Box
      display="flex"
      flexDirection="column"
      flex="1"
      margin="0"
      backgroundColor="#F2F2F2"
    >
      <MenuLogged>
        <h1>MenuLogged</h1>
      </MenuLogged>
      <div>
        Página de Profile!
        <img src="https://media.giphy.com/media/bn0zlGb4LOyo8/giphy.gif" alt="Nicolas Cage" />
      </div>
    </Box>
  );
}

// export default websitePageHOC(ProfilePage, {
//   pageWrapperProps: {
//     seoProps: {
//       headTitle: 'Logado',
//     },
//     menuProps: {
//       display: false,
//     },
//   },
// });

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
    props: {},
  };
}
