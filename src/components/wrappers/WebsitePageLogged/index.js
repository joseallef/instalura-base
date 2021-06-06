import React from 'react';
import PropTypes from 'prop-types';
import MenuLogged from '../../commons/Menu/Logged';
import ModalPost from '../../commons/ModalPost';
import { Box } from '../../foundation/layout/Box';
import FormPost from '../../patterns/FormPost';
import { MyContext } from './context';

export default function WebsitePageLogged({ ImgLogo, children }) {
  const [stateModal, setStateModal] = React.useState(false);
  const [scrImg, setSrcImg] = React.useState({
    url: '/images/notExist.svg',
  });
  return (
    <Box
      display="flex"
      flexDirection="column"
      flex="1"
      margin="0"
      backgroundColor="#F2F2F2"
    >
      <MenuLogged
        onClickPost={() => {
          setStateModal(true);
        }}
        ImgLogo={ImgLogo}
      />
      <MyContext.Provider value={{ scrImg, setSrcImg }}>
        <ModalPost
          isOpen={stateModal}
          onClose={() => {
            setStateModal(false);
          }}
        >
          {(propsDoModal) => (
            <FormPost
              propsDoModal={propsDoModal}
              onClose={() => {
                setStateModal(false);
              }}
            />
          )}
        </ModalPost>
        {children}
      </MyContext.Provider>
    </Box>
  );
}

WebsitePageLogged.propTypes = {
  ImgLogo: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};
