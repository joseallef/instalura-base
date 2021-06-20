/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import LoadImage from '../../../services/loadImg';
import { Box } from '../../foundation/layout/Box';
import { Grid } from '../../foundation/layout/Grid';
import Text from '../../foundation/Text';
import { Content } from './style';

import ImagePostProfile from './ImagePostProfile';

export default function Profile({ postagem, user }) {
  LoadImage();
  return (
    <Box
      display="flex"
      flex="1"
    >
      <Grid.Container
        marginTop={{
          xs: '20px',
          sm: '0px',
          md: '0px',
        }}
      >
        <Grid.Row
          marginTop="0px"
          display="flex"
          alignItems="left"
          justifyContent="space-between"
        >
          <Content.WrapperProfile>
            <Content.ProfilePhoto>
              <img data-src="https://avatars.githubusercontent.com/u/46696111?v=4" alt="Nicolas Cage" />
            </Content.ProfilePhoto>
            <Grid.Row>
              <Grid.Col
                display="flex"
                value={{ xs: 12, md: 12 }}
                offset={{ xs: 0, md: 1 }}
                alignItems="center"
                justifyContent="center"
              >
                <Box
                  display="flex"
                  flexDirection="column"
                  flex="1"
                >
                  <Text
                    variant="paragraph1"
                    tag="p"
                    color="main.color"
                    fontWeight="500"
                  >
                    {postagem.length}
                  </Text>
                  <Text
                    variant="paragraph1"
                    color="tertiary.light"
                  >
                    Publicações
                  </Text>
                </Box>
                <Box
                  display="flex"
                  flexDirection="column"
                  flex="1"
                >
                  <Text
                    variant="paragraph1"
                    tag="p"
                    color="main.color"
                    fontWeight="500"
                  >
                    22k
                  </Text>
                  <Text
                    variant="paragraph1"
                    color="tertiary.light"
                  >
                    Seguindo
                  </Text>
                </Box>
                <Box
                  display="flex"
                  flexDirection="column"
                  flex="1"
                >
                  <Text
                    variant="paragraph1"
                    tag="p"
                    color="main.color"
                    fontWeight="500"
                  >
                    134k
                  </Text>
                  <Text
                    variant="paragraph1"
                    color="tertiary.light"
                  >
                    Seguidores
                  </Text>
                </Box>
              </Grid.Col>
              <Content.ProfileUser>
                <Grid.Row
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Box
                    display="flex"
                    flexDirection="column"
                  >
                    <Text
                      variant="paragraph1"
                      tag="p"
                      color="main.color"
                      fontWeight="700"
                    >
                      {user.username.toUpperCase()}
                    </Text>
                    <Text
                      variant="paragraph1"
                      color="tertiary.light"
                    >
                      A wholesome person responsible for the best movies ever.
                    </Text>
                  </Box>
                </Grid.Row>
              </Content.ProfileUser>

            </Grid.Row>
          </Content.WrapperProfile>
        </Grid.Row>

        <Grid.Row
          justifyContent="center"
          marginTop="50px"
        >
          <Content.WrapperPhoto>
            {postagem.map((data) => (
              <Grid.Col
                display="flex"
                justifyContent="center"
                paddingRight="0"
                paddingLeft="0"
                value={{
                  sx: 4,
                }}
                // eslint-disable-next-line no-underscore-dangle
                key={data.post._id}
              >
                <ImagePostProfile postagem={data} />
              </Grid.Col>
            ))}
          </Content.WrapperPhoto>
        </Grid.Row>
      </Grid.Container>
    </Box>
  );
}

Profile.propTypes = {
  postagem: PropTypes.arrayOf(PropTypes.shape({
    description: PropTypes.string,
    filter: PropTypes.string,
    likes: PropTypes.shape({
      user: PropTypes.string,
      _id: PropTypes.string,
    }),
  })).isRequired,

  user: PropTypes.shape({
    id: PropTypes.string,
    username: PropTypes.string,
  }).isRequired,
};
