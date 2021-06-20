import React from 'react';
import styled, { css } from 'styled-components';
import { breakpointsMedia } from '../../../../theme/utils/breakpointsMedia';

const ContentImg = styled.div`
  position: relative;
  width: 100%;
  max-height: 60%;
  opacity: 0.8;
  background: #D5D5D4;

  img {
    width: 100%;
    height: 100%;
  }


  ${breakpointsMedia({
    xs: css`
      height: 500px;
    `,
    sm: css`
      width: 375px;
      height: 275px;
      left: 0px;
      top: 0px;
    `,
  })}
  /* tertiaryDarkMain */
  display: flex;
  justify-content: center;
  aling-items: center;

  ${(props) => (props.tones === 'gracyscale' ? 'filter: grayscale(1);' : '')}
  ${(props) => (props.tones === 'brightness' ? 'filter: brightness(200%);' : '')}
  ${(props) => (props.tones === 'contrast' ? 'filter: contrast(2);' : '')}

`;

// eslint-disable-next-line react/prop-types
export function ImageModal({ url, tones }) {
  return (
    <ContentImg tones={tones}>
      <img alt="imagem" src={url} />
    </ContentImg>
  );
}
