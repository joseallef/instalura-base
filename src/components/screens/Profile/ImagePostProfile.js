import React from 'react';
import PropTypes from 'prop-types';
import { userService } from '../../../services/user/userService';
import { WrapperImg } from '../../commons/Image/ImageCard/style';
import { Content } from './style';

export default function ImagePostProfile({ postagem }) {
  const { post } = postagem;
  const liked = postagem.post.likes.length;
  const [like, setLike] = React.useState(liked);
  return (
    <WrapperImg
      isLiked={like}
      onClick={() => {
      // eslint-disable-next-line no-underscore-dangle
        userService.toggleLike(post._id);
        setLike(!like);
      }}
    >
      <Content.Photo>
        <img data-src={post.photoUrl} alt="Imagem do post" />
      </Content.Photo>
    </WrapperImg>
  );
}

ImagePostProfile.propTypes = {
  postagem: PropTypes.shape({
    post: PropTypes.shape({
      _id: PropTypes.string.isRequired,
      photoUrl: PropTypes.string.isRequired,
      // eslint-disable-next-line react/forbid-prop-types
      likes: PropTypes.array,
    }),
  }).isRequired,
};
