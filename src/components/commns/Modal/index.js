import React from 'react';
import Proptypes from 'prop-types';
import style, { css } from 'styled-components';

const ModalWrapper = style.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  background: rgba(0,0,0,0.1);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  overflow: scroll;


  ${({ isOpen }) => {
    if(isOpen){
      return css`
        opacity: 1;
        pointer-events: all;
     `;
    }

    return css`
      opacity: 0;
      pointer-events: none;
    `;
  }}

`;


function Modal({ isOpen, onClose, children }) {
  return (
    <ModalWrapper
      isOpen={isOpen}
      onClick={(event) => {
        const isSafeArea = event.target.closest('[data-modal-safe-area="true"]');
        console.log(isSafeArea);
        // isOpen = false;
        if(!isSafeArea){
          onClose();
        }
      }}
      >
      {children({
        'data-modal-safe-area': 'true',
      })}
    </ModalWrapper>
  )
}


Modal.Proptypes = {
  isOpen: Proptypes.bool.isRequired,
  children: Proptypes.func.isRequired,
  onClose: Proptypes.func.isRequired,
}


export default Modal;