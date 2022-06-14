/**
 * @name AppLayout1.js
 * @description App layout wrapper- Sticky Header and Sticky Footer
 * @version 0.0.0
 */
import { React, useState } from 'react';
import PropTypes from 'prop-types';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import NextHead from '../NextHead/NextHead';
import styles from './applayout1.module.css';
import SideBar from '../SideBar/SideBar';

function AppLayout1({ children }) {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const toggleSideBar = () => {
    setIsSideBarOpen(!isSideBarOpen);
  };
  return (
    <div>
      <NextHead />
      <Header sticky toggleSideBar={toggleSideBar} />
      <SideBar toggleSideBar={toggleSideBar} isOpen={isSideBarOpen} />
      <div>{children}</div>
      <Footer className={styles.stickyFooter} />
    </div>
  );
}

AppLayout1.propTypes = {
  children: PropTypes.node.isRequired,
};
export default AppLayout1;
