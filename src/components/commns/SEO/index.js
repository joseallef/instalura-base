/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Head from 'next/head';
import propTypes from 'prop-types';

// eslint-disable-next-line react/prop-types
export default function SEO({ headTitle }) {
  const hasHeaderTitle = Boolean(headTitle);
  const baseTitle = 'Instalura - projeto Base do Alura Bootcamp JAMStack';
  const title = hasHeaderTitle ? (`${headTitle} | ${baseTitle}`) : baseTitle;

  const description = 'With Meta Tags you can edit and experiment with your content then preview how your webpage will look on Google, Facebook, Twitter and more!';
  const image = 'https://metatags.io/ https://www.alura.com.br/assets/img/alura-share.1571848411.png';
  const urlBase = 'https://metatags.io/';
  return (
    <Head>
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />

      {/* <!-- Open Graph / Facebook --> */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={urlBase} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* <!-- Twitter --> */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={urlBase} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
    </Head>
  );
}

SEO.defaultProps = {
  headTitle: '',
};

SEO.propTypes = {
  headTitle: propTypes.string,
};
