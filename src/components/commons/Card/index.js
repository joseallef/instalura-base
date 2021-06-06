import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Text from '../../foundation/Text';
import ImageCard from '../Image/ImageCard';

const WrapperCard = styled.div`
  position: relative;
  padding: 0px;
  left: 0.27%;
  right: 0.27%;
  top: 10px;
  margin-bottom: 50px;
  max-width: 600px;
  border-radius: 3px;
  background: #FFFFFF;

`;

const WrapperHeader = styled.div`  
  display: flex;
  justijy-content: center;
  align-items: center;
  padding: 10px;
  padding-left: 20px;
  padding-right: 20px;
`;

const IconMoreInformatio = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  text-align: center;

 `;

export default function Card({ post, user }) {
  return (
    <>
      {post.map((infoPost) => (
        // eslint-disable-next-line no-underscore-dangle
        <WrapperCard key={infoPost.data._id}>
          <WrapperHeader>
            <img src="/images/avatar.svg" alt="Nicolas Cage" />
            <Text
              tag="span"
              variant="paragraph1"
              color="main.color"
              fontWeight="500"
              margin="15px"
            >
              {user.username}
            </Text>
            <IconMoreInformatio>
              <img src="/images/iconMoreLight.svg" alt="More Information" />
            </IconMoreInformatio>
          </WrapperHeader>
          <ImageCard
            data={infoPost.data}
          />
        </WrapperCard>
      ))}
    </>
  );
}

Card.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.string,
    username: PropTypes.string,
  }).isRequired,
  post: PropTypes.arrayOf(PropTypes.shape({
    description: PropTypes.string,
    filter: PropTypes.string,
    likes: PropTypes.shape({
      user: PropTypes.string,
      _id: PropTypes.string,
    }),
  })).isRequired,
};
