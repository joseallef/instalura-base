/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { userService } from '../../../../services/user/userService';
import { Box } from '../../../foundation/layout/Box';
import Text from '../../../foundation/Text';
import { Button } from '../../Button';
import {
  Cont, ContentBottom, Icon, IconLike, Option, Image, WrapperFooter, WrapperImg,
} from './style';

export default function ImageCard({ data }) {
  // eslint-disable-next-line react/prop-types
  const liked = data.likes.length;
  const [like, setLike] = React.useState(liked);
  return (
    <>
      <WrapperImg
        isLiked={like}
      >
        <Image
          alt="Image do post"
          data-src={data.photoUrl}
          onClick={() => {
            // eslint-disable-next-line no-underscore-dangle
            userService.toggleLike(data._id);
            setLike(!like);
          }}
          variant={data.filter}
        />
      </WrapperImg>
      <WrapperFooter>
        <Option>
          <IconLike
            isLiked={like}
          />
          <span>{like ? 1 : 0}</span>
        </Option>
        <Option>
          <Icon>
            <img alt="Imagen" data-src="/images/comment.svg" />
          </Icon>
          <span>1.2k</span>
        </Option>
        <Option>
          <Icon>
            <img alt="Imagen" data-src="/images/send.svg" />
          </Icon>
        </Option>
        <Cont>
          <Icon>
            <img alt="Imagen" data-src="/images/bookmark.svg" />
          </Icon>
        </Cont>
      </WrapperFooter>
      <ContentBottom>
        <Box
          display="flex"
          justifyContent="left"
        >
          <img data-src="/images/avatar.svg" alt="Nicolas Cage" />
          <img data-src="/images/avatar.svg" alt="Nicolas Cage" />
          <img data-src="/images/avatar.svg" alt="Nicolas Cage" />
        </Box>
        <Box
          display="flex"
          justifyContent="center"
        >
          <Text
            tag="span"
            variant="paragraph1"
          >
            {data.description}
          </Text>
        </Box>
        <Box
          display="flex"
          justifyContent="flex-end"
        >
          <Button
            ghost
            logged
            variant="tertiary.light"
            backgroundColor="#F1F1F1"
          >
            Mais
          </Button>
        </Box>
      </ContentBottom>
    </>
  );
}

ImageCard.propTypes = {
  data: PropTypes.shape({
    description: PropTypes.string,
    filter: PropTypes.string,
    likes: PropTypes.arrayOf(PropTypes.shape({
      user: PropTypes.string,
      _id: PropTypes.string,
    })),
  }).isRequired,
};
