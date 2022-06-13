// @name AppLayout1.js
// * @description App layout wrapper- Sticky Header

import React from 'react';
import PropTypes from 'prop-types';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import NextHead from '../NextHead/NextHead';

function AppLayout3({ children }) {
  return (
    <div>
      <NextHead />
      <Header sticky />
      <div>{children}</div>
      <Footer />
    </div>
  );
}

AppLayout3.propTypes = {
  children: PropTypes.node.isRequired,
};
export default AppLayout3;
