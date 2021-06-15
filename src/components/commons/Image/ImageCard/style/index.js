import styled, { css } from 'styled-components';
import { breakpointsMedia } from '../../../../../theme/utils/breakpointsMedia';

export const Image = styled.img`
  width: 100%;
  height: 450px; 
  :hover {
    opacity: .6;
    cursor: pointer;
    fill: #red;
  }

  ${breakpointsMedia({
    md: css`  
      width: 100%;
      height: 500px;
    `,
    lg: css`
      height: 400px;
    `,
  })}

  ${(props) => (props.variant === 'gracyscale' ? 'filter: grayscale(1);' : '')}
  ${(props) => (props.variant === 'brightness' ? 'filter: brightness(200%);' : '')}
  ${(props) => (props.variant === 'contrast' ? 'filter: contrast(2);' : '')}

`;

export const WrapperImg = styled.figure` 
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px;
  
  :hover {
    ${({ isLiked }) => (isLiked
    ? 'background-image: url("/images/liked.svg");'
    : 'background-image: url("/images/like.svg");')}
    background-repeat: no-repeat;
    background-position: center;
    max-width: 100%;

  }
`;

export const WrapperFooter = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  padding-left: 10px;
  
`;

export const Option = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 20px;
  
  span {
    margin-left: 5px;
    margin-right: 10px;
  }
`;

export const Icon = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2px;

`;

export const IconLike = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  

  ${({ isLiked }) => (isLiked
    ? 'background-image: url("/images/liked.svg");'
    : 'background-image: url("/images/like.svg");')
}
    background-repeat: no-repeat;
    background-position: center;
    max-width: 100%;

`;

export const Cont = styled.div`
  display: flex;
  justify-content:  flex-end;
  align-items: center;
  width: 100px;

  ${breakpointsMedia({
    sm: css`
    width: 200px;
    `,
    md: css`
    width: 250px;
    `,
    lg: css`
    width: 300px;
    `,
  })}

`;

export const ContentBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  order: 3;
  padding-bottom: 15px;
  padding-left: 30px;
  padding-right: 30px;
  width: 100%;
`;
