import styled, { css } from 'styled-components';
import { breakpointsMedia } from '../../../../theme/utils/breakpointsMedia';

const ProfilePhoto = styled.div`
display: flex;
width: 200px;
height: 100px;
margin-right: 10px;
img {
  width: 100%;
  border-radius: 50%;
}

${breakpointsMedia({
    xs: css`
  
  `,
    md: css`
    margin-left: 20px;
    margin-right: 0px;
    width: 250px;
    height: 150px;
  `,
  })}

`;

const WrapperProfile = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;
  padding: 10px;
  font-size: 12px;
  margin: 0px;

  ${breakpointsMedia({
    xs: css`
    
    `,
    sm: css`
      font-size: 16px;
      margin-top: 50px;
    `,
    lg: css`
    margin-left: 300px; 
    margin-right: 300px; 
    `,
  })}

`;
const WrapperPhoto = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 100%;

  ${breakpointsMedia({
    md: css`
      width: 750px;
    `,
  })}
`;

const ProfileUser = styled.div`
display: flex;
margin-top: 50px;
margin-left: -100px;

${breakpointsMedia({
    md: css`
      margin-left: 70px;
    `,
    lg: css`
    margin-top: 0px;
    `,
  })}

`;

const Photo = styled.div`
  display: flex;
  width: 120px;
  height: 120px;
  margin: 5px;
  cursor: pointer;
  
  :hover {
    opacity: .6;
  }

  img {
    max-width: 100%;
  }

  ${breakpointsMedia({
    xs: css`
      img {
        width: 400px;
      }
    `,
    sm: css`
      width: 140px;
      height: 140px;
    `,
    md: css`
      width: 200px;
      height: 200px;
      
      img {
        width: 400px;
      }
    `,
    lg: css`
      width: 220px;
      height: 220px;
    `,
  })}
`;

export const Content = {
  ProfilePhoto, WrapperProfile, WrapperPhoto, ProfileUser, Photo,
};
