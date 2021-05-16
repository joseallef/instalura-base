import React from 'react';
import { Header, MenuWrapperLogged } from './styles/MenuWrapperLogged';
import { Logo } from '../../../../theme/Logo';
import InputSearch from './TextWrapper';

export default function MenuLogged() {
  return (
    <Header>
      <MenuWrapperLogged>
        <MenuWrapperLogged.LeftSide>
          <Logo />
        </MenuWrapperLogged.LeftSide>
        <MenuWrapperLogged.Wrapper>
          <MenuWrapperLogged.CenterSide>
            <InputSearch />
          </MenuWrapperLogged.CenterSide>
          <MenuWrapperLogged.RightSide>
            <MenuWrapperLogged.Icon>
              <img alt="Imagen" src="/images/home.svg" />
            </MenuWrapperLogged.Icon>
            <MenuWrapperLogged.IconToggle>
              <MenuWrapperLogged.Icon>
                <img alt="Imagen" src="/images/search.svg" />
              </MenuWrapperLogged.Icon>
            </MenuWrapperLogged.IconToggle>
            <MenuWrapperLogged.Icon>
              <img alt="Imagen" src="/images/add.svg" />
            </MenuWrapperLogged.Icon>
            <MenuWrapperLogged.Icon>
              <img alt="Imagen" src="/images/like.svg" />
            </MenuWrapperLogged.Icon>
            <MenuWrapperLogged.Icon>
              <img alt="Imagen" src="/images/avatar.svg" />
            </MenuWrapperLogged.Icon>
          </MenuWrapperLogged.RightSide>
        </MenuWrapperLogged.Wrapper>
      </MenuWrapperLogged>
    </Header>
  );
}
