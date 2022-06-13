// @name AppLayout1.js
// * @description App layout wrapper- Sticky Header and Sticky Footer

import React from 'react';
import PropTypes from 'prop-types';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import NextHead from '../NextHead/NextHead';
import styles from './applayout1.module.css';

function AppLayout1({ children }) {
  return (
    <div>
      <NextHead />
      <Header sticky />
      <div>{children}</div>
      <Footer className={styles.stickyFooter} />
    </div>
  );
}

AppLayout1.propTypes = {
  children: PropTypes.node.isRequired,
};
export default AppLayout1;
