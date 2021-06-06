import styled, { css } from 'styled-components';
import { breakpointsMedia } from '../../../../theme/utils/breakpointsMedia';

const WrapperForm = styled.div`
  margin: auto;
  width: 95%;

  ${breakpointsMedia({
    sm: css`
      width: 375px;
      height: 567px;
      left: 0px;
      top: 0px;
    `,
  })}
  
  /* tertiaryDark */
  
  background: #FFFFFF;
  box-shadow: -10px 0px 24px rgba(7, 12, 14, 0.1);

  border-radius: 5px;
  background: rgb(255, 255, 255);
  box-shadow: rgb(204 204 204) 0px 0px 10px 2px;
  overflow: hidden;

`;

const Image = styled.div` 
  position: relative;
  width: 100%;

  opacity: 0.8;

  ${breakpointsMedia({
    sm: css`
      width: 375px;
      height: 275px;
      left: 0px;
      top: 0px;
    `,
  })}
  

  /* tertiaryDarkMain */

  background: #D5D5D5;
  
  display: flex;
  justify-content: center;
  aling-items: center;

`;

const Section = styled.section`
  padding: 15px;
  float: right;

  &:hover {
    cursor: pointer;
  }
`;
const WrapperInteration = styled.div`
  padding: 20px;
`;

const WrapperPreviewImg = styled.div`
  margin: 10px;
  height: 150px;
  display: flex;
  overflow-y: hidden;
  overflow-x: auto;

  ::-webkit-scrollbar {
    width: 5px;
    height: 10px;
  }

  ::-webkit-scrollbar-track {
    background: rgb(179, 177, 177);
    border-radius: 8px;
  }

  ::-webkit-scrollbar-thumb {
      background: rgb(136, 136, 136);
      border-radius: 5px;
    }

  ::-webkit-scrollbar-thumb:hover {
      background: rgb(100, 100, 100);
      border-radius: 10px;
    }

  ::-webkit-scrollbar-thumb:active {
      background: rgb(68, 68, 68);
      border-radius: 10px;
    }

`;

const PreviewImg = styled.div`
  text-align: center;

  &:active {
    background: rgb(179, 177, 177);
  }
`;

const Img = styled.img`
  display: flex;
  width: 88px;
  height: 88px;
  z-index: 100;
  margin: 10px;

  ${(props) => (props.variant === 'gracyscale' ? 'filter: grayscale(1);' : '')}
  ${(props) => (props.variant === 'brightness' ? 'filter: brightness(200%);' : '')}
  ${(props) => (props.variant === 'contrast' ? 'filter: contrast(2);' : '')}

`;

export {
  WrapperForm, Image, Section, WrapperInteration, PreviewImg, WrapperPreviewImg, Img,
};
