import React from 'react';
import Head from 'next/head';

const MetaDecorator = ({ title, description, imageUrl, imageAlt }) => (
  <Head>
    <title>{title}</title>
    <meta property='og:title' content={title} />
    <meta name='description' content={description} />
    <meta property='og:description' content={description} />
    <meta property='og:image' content={imageUrl} />
    {/* <meta
      property='og:url'
      content={
        'https://app.nfttunz.io' +
        window.location.pathname +
        window.location.search
      }
    /> */}
    <meta name='twitter:card' content='summary_large_image' />
    <meta name='twitter:image:alt' content={imageAlt} />
    <meta
      name='twitter:site'
      content={`https://www.twitter.com/horlorlahdeh`}
    />
    <link rel='icon' href='/favicon.ico' />
    <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
    <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
    <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
    <link rel='manifest' href='/site.webmanifest' />
    <link rel='apple-touch-icon' href='%PUBLIC_URL%/logo192.png' />
  </Head>
);

// MetaDecorator.propTypes = {
//   title: PropTypes.string.isRequired,
//   description: PropTypes.string.isRequired,
//   imageUrl: PropTypes.string.isRequired,
//   imageAlt: PropTypes.string.isRequired,
// };

export default MetaDecorator;
