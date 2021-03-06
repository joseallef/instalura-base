import React from 'react';
import PropTypes from 'prop-types';
import MenuLogged from '../../commons/Menu/Logged';
import Modal from '../../commons/Modal';
import { Box } from '../../foundation/layout/Box';
import FormPost from '../../patterns/FormPost';
import { MyContext } from './context';
import SEO from '../../commons/SEO';

export default function WebsitePageLogged({ ImgLogo, children, seoProps }) {
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
      <SEO
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...seoProps}
      />
      <MenuLogged
        onClickPost={() => {
          setStateModal(true);
        }}
        ImgLogo={ImgLogo}
      />
      <MyContext.Provider value={{ scrImg, setSrcImg }}>
        <Modal
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
        </Modal>
        {children}
      </MyContext.Provider>
    </Box>
  );
}

WebsitePageLogged.propTypes = {
  ImgLogo: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  seoProps: PropTypes.object.isRequired,
};
