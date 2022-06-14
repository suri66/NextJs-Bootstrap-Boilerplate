// @name AppLayout2.js
// * @description App layout wrapper- Non-Sticky Header and Footer

import { React, useState } from 'react';
import PropTypes from 'prop-types';
import NextHead from '../NextHead/NextHead';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SideBar from '../SideBar/SideBar';

function AppLayout2({ children }) {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const toggleSideBar = () => {
    console.log('sidebar');
    setIsSideBarOpen(!isSideBarOpen);
  };
  return (
    <div>
      <NextHead />
      <Header toggleSideBar={toggleSideBar} />
      <SideBar toggleSideBar={toggleSideBar} isOpen={isSideBarOpen} />
      <div>{children}</div>
      <Footer />
    </div>
  );
}

AppLayout2.propTypes = {
  children: PropTypes.node.isRequired,
};
export default AppLayout2;
