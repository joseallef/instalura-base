import React from 'react';
import Proptypes from 'prop-types';
import styled, { createGlobalStyle, css } from 'styled-components';
import { motion } from 'framer-motion';
import { MyContext } from '../../patterns/selectionPost';

const ModalWrapper = styled.div`
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
  overflow: hidden;
  transition: .3s;
  z-index: 100;
  ${({ isOpen }) => {
    if (isOpen) {
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

const LockScroll = createGlobalStyle`
  body {
    overflow: hidden;
  }
`;

// eslint-disable-next-line react/prop-types
function Modal({ isOpen, onClose, children }) {
  const { scrImg, setSrcImg } = React.useContext(MyContext);
  return (
    <ModalWrapper
      isOpen={isOpen}
      onClick={(event) => {
        const isSafeArea = event.target.closest('[data-modal-safe-area="true"]');
        // isOpen = false;
        if (!isSafeArea) {
          setSrcImg(scrImg);
          onClose();
        }
      }}
    >
      {isOpen && <LockScroll />}
      <motion.div
        variants={{
          open: {
            x: 0,
          },
          closed: {
            x: '100%',
          },
        }}

        // eslint-disable-next-line react/jsx-props-no-multi-spaces
        animate={isOpen ? 'open' : 'closed'}
        transition={{
          duration: 0.5,
        }}
        style={{
          display: 'flex',
          flex: 1,
        }}
      >
        {children({
          'data-modal-safe-area': 'true',
          onClose,
        })}
      </motion.div>
    </ModalWrapper>
  );
}

Modal.propTypes = {
  isOpen: Proptypes.bool.isRequired,
  children: Proptypes.func.isRequired,
  onClose: Proptypes.func.isRequired,
};

export default Modal;
