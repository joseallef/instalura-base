import React from 'react';
import { Logo } from '../../theme/Logo';
import { MunuWrapper } from './styles/MenuWrapper';


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
                <li>
                    <a href={link.url}>
                        {link.texto}
                    </a>
                </li>
            )
        })}
      </MunuWrapper.CentralSide>
      <MunuWrapper.RightSide>
        <button>
            Entrar
        </button>
        <button>
            Cadastrar
        </button>
      </MunuWrapper.RightSide>
    </MunuWrapper>
  )
}
