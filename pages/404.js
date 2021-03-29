import React from 'react';
import styled from 'styled-components';
import { Box } from '../src/components/foundation/layout/Box';
import websitePageHOC from '../src/components/wrappers/WebsitePage/hoc';

const NotFoud = styled.div`
  width: 100vw;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Span = styled.span`
  display: block;
  margin-top: 25%;
  width: 100%;
  z-index: 10;
  text-align: center;
  font-size: 4em;
  color: #aaa;

`;

const SvgPage = styled.img`
  position: absolute;
  margin: auto;
  top: 20%;
  width: 70vw;
  height: 70vh;
  z-index: 0;
`;

function Page404() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      flex="1"
    >
      <NotFoud>
        <Span>404 Page Not Found</Span>
        <SvgPage src="/images/404.svg" alt="Page Not Found" />
      </NotFoud>
    </Box>
  );
}

export default websitePageHOC(Page404, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'Page Not Found',
    },
  },
});
