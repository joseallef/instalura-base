/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import WebsitePageLogged from '..';
import WebsiteGlobalProvider from '../../WebsitePage/provider';

export default function websitePageLoggedHOC(PageComponent,
  { pageWrapperProps } = { pageWrapperProps: {} }) {
  return (props) => (
    <WebsiteGlobalProvider>
      <WebsitePageLogged
        {...pageWrapperProps}
        ImgLogo={pageWrapperProps.propsLogo}
      >
        <PageComponent {...props} />
      </WebsitePageLogged>
    </WebsiteGlobalProvider>
  );
}
