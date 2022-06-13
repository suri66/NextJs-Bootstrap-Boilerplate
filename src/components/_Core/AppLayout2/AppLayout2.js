// @name AppLayout2.js
// * @description App layout wrapper- Non-Sticky Header and Footer

import React from 'react';
import PropTypes from 'prop-types';
import NextHead from '../NextHead/NextHead';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function AppLayout2({ children }) {
  return (
    <div>
      <NextHead />
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
}

AppLayout2.propTypes = {
  children: PropTypes.node.isRequired,
};
export default AppLayout2;
