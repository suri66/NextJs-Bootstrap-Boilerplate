// @name AppLayout1.js
// * @description App layout wrapper- Sticky Header

import { React, useState } from 'react';
import PropTypes from 'prop-types';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import NextHead from '../NextHead/NextHead';
import SideBar from '../SideBar/SideBar';

function AppLayout3({ children }) {
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
      <Footer />
    </div>
  );
}

AppLayout3.propTypes = {
  children: PropTypes.node.isRequired,
};
export default AppLayout3;
