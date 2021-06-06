/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import WebsitePageLogged from '..';
import WebsiteGlobalProvider from '../../WebsitePage/provider';

export default function websitePageLoggedHOC(PageComponent,
  { propsLogo } = { propsLogo: {} }) {
  return (props) => (
    <WebsiteGlobalProvider>
      <WebsitePageLogged
        ImgLogo={propsLogo}
      >
        <PageComponent {...props} />
      </WebsitePageLogged>
    </WebsiteGlobalProvider>
  );
}
