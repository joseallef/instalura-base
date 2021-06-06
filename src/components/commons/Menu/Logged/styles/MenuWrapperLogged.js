import styled, { css } from 'styled-components';
import { breakpointsMedia } from '../../../../../theme/utils/breakpointsMedia';

export const Header = styled.header`
  display: flex;
  width: 100%;
  height: 64px;
  background: #FFFFFF;
  box-shadow: 0px 5px #F2F2F2;
  position: fixed;
  bottom: 0;
  border-radius: 24px 24px 0px 0px;


  z-index: 2;
  
  ${breakpointsMedia({
    sm: css`
      height: 96px;
      position: relative;
      width: 100%;
      background: #FFFFFF;
      border-radius: 0px;
    `,
  })}
`;

export const MenuWrapperLogged = styled.nav`

  font-family: 'Rubik', sans-serif;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;

  ${breakpointsMedia({
    sm: css`
      justify-content: space-around;
      margin-left: 2px;
      width: 100%;
      padding: 10px;
      `,
    md: css`
      padding: 10px;
    `,
  })}
`;

MenuWrapperLogged.LeftSide = styled.div`

  margin: 0;
  order: 1;
  padding: 0px; 

  position: fixed;
  left: 0%;
  right: 0%;
  top: 0%;
  text-align: center;

  

  ${breakpointsMedia({
    xs: css`
      ${({ ImgLogo }) => (ImgLogo === true ? 'opacity: 1' : 'opacity: 0;')}
    `,
    sm: css`
      opacity: 1;
      position: relative;
      display: flex;
      align-items: center;
      text-align: left;
      margin: 0;
      order: 0;
      `,
    md: css`
      order: initial;
    `,
  })}
`;

MenuWrapperLogged.CenterSide = styled.div`
  position: relative;
  padding: 0px;
  margin: 0;
  order: 1;
  display: none;
  align-items: center;
  padding: 10px;
  
  ${breakpointsMedia({
    sm: css`
      position: relative;
      order: 1;
      display: flex;
      height: 54px;
      min-width: 150px;
      `,
    md: css`
      margin-right: 20;
      justify-content: space-between;
      order: initial;
    `,
    lg: css`
      margin-left: 177px;
    `,
  })}

`;

MenuWrapperLogged.RightSide = styled.div`
  position: relative;
  display: flex;
  align-items: right;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-around;
  order: 5;
  padding: 0px;
  ${breakpointsMedia({
    sm: css`
      position: relative;
      display: flex;
      align-items: right;
      flex-wrap: wrap;
      
      order: 4;
      padding: 0px;
      max-width: 200px;
      `,
    md: css`
      max-width: 250px;
    `,
  })}
  
`;

MenuWrapperLogged.Icon = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 32px;
  height: 32px;


`;

MenuWrapperLogged.Wrapper = styled.div`
  display: flex;
  width: 100%;
  float: right;
  ${breakpointsMedia({
    sm: css`
      justify-content: space-around;
      width: 60%;
    `,
    md: css`
      width: 65%;
    `,
  })}
`;

MenuWrapperLogged.IconToggle = styled.div`
  ${breakpointsMedia({
    sm: css`
      display: none;
    `,
    md: css`
    `,
  })}
`;
