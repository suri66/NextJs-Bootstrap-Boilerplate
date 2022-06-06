/**
 * @name NextHead.js
 * @description All Meta tags, external links and script can be placed here
 * @version 0.0.0
 */

import React from 'react';
import Head from 'next/head';
import { APP_INFO } from '../../../constants/constants';

function NextHead() {
  return (
    <Head data-testid="nextHead">
      <title>{APP_INFO.name}</title>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="title" content={APP_INFO.name} />
      <meta name="description" content={APP_INFO.name} />
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={APP_INFO.website} />
      <meta property="og:title" content={APP_INFO.name} />
      <meta property="og:description" content={APP_INFO.name} />
      <meta property="og:image" content="/images/logo.png" />
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={APP_INFO.website} />
      <meta property="twitter:title" content={APP_INFO.name} />
      <meta property="twitter:description" content={APP_INFO.name} />
      <meta property="twitter:image" content="/images/logo.png" />
    </Head>
  );
}

export default NextHead;
