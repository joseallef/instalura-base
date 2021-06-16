import React from 'react';
import { Header, IconBottom, MenuWrapperLogged } from './styles/MenuWrapperLogged';
import { Logo } from '../../../../theme/Logo';
import InputSearch from './TextWrapper';
import { Button } from '../../Button';

// eslint-disable-next-line no-unused-vars
const paths = [
  {
    url: 'home.svg',
  },
  {
    url: 'search.svg',
  },
  {
    url: 'add.svg',
  },
  {
    url: 'like.svg',
  },
  {
    url: 'avatar.svg',
  },
];

// eslint-disable-next-line react/prop-types
export default function MenuLogged({ onClickPost, ImgLogo }) {
  return (
    <Header>
      <MenuWrapperLogged>
        <MenuWrapperLogged.LeftSide ImgLogo={ImgLogo}>
          <Logo />
        </MenuWrapperLogged.LeftSide>
        <MenuWrapperLogged.Wrapper>
          <MenuWrapperLogged.CenterSide>
            <InputSearch />
          </MenuWrapperLogged.CenterSide>
          <MenuWrapperLogged.RightSide>
            <MenuWrapperLogged.Icon>
              <Button
                href="/app/fead"
                ghost
              >
                <img alt="Imagen" src="/images/home.svg" />
              </Button>
            </MenuWrapperLogged.Icon>
            <MenuWrapperLogged.IconToggle>
              <MenuWrapperLogged.Icon>
                <img alt="Imagen" src="/images/search.svg" />
              </MenuWrapperLogged.Icon>
            </MenuWrapperLogged.IconToggle>
            <MenuWrapperLogged.Icon>
              <Button
                ghost
                logged
                variant="secondary.main"
                onClick={onClickPost}
                id="toggleModal"
              >
                <img alt="Imagen" src="/images/add.svg" />
              </Button>
            </MenuWrapperLogged.Icon>
            <MenuWrapperLogged.Icon>
              <img alt="Imagen" src="/images/like.svg" />
            </MenuWrapperLogged.Icon>
            <MenuWrapperLogged.Icon>
              <Button
                href="/app/profile"
                ghost
              >
                <IconBottom>
                  <img alt="Imagen" src="/images/avatar.jpg" />
                </IconBottom>
              </Button>
            </MenuWrapperLogged.Icon>
          </MenuWrapperLogged.RightSide>
        </MenuWrapperLogged.Wrapper>
      </MenuWrapperLogged>
    </Header>
  );
}
