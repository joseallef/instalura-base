import React from 'react';
import { Logo } from '../../../theme/Logo';
import { MunuWrapper } from './styles/MenuWrapper';
import { Button } from './../Button/index';
import Text from './../../foundation/Text';


const links = [
    {
        texto: 'Home',
        url:  '/',
    },
    {
        texto: 'Perguntas frequentes',
        url:  '/faq',
    },
    {
        texto: 'Sobre',
        url:  '/Sobre',
    }


]

export default function Menu(){
  return (
    <MunuWrapper>
      <MunuWrapper.LeftSide>
        <Logo />
      </MunuWrapper.LeftSide>
      <MunuWrapper.CentralSide>
        {links.map((link) => {
            return (
                <li key={link.url}>
                    <Text variant="smallestException" tag="a" href={link.url}>
                        {link.texto}
                    </Text>
                </li>
            )
        })}
      </MunuWrapper.CentralSide>
      <MunuWrapper.RightSide>
        <Button ghost variant="secondary.main">
            Entrar
        </Button>
        <Button variant="primary.main">
            Cadastrar
        </Button>
      </MunuWrapper.RightSide>
    </MunuWrapper>
  )
}
