import React from 'react';
import { Offcanvas, OffcanvasBody, OffcanvasHeader } from 'reactstrap';
import PropTypes from 'prop-types';
import NavItems from './NavItems';

function SideBar({ toggleSideBar, isOpen }) {
  return (
    <>
      <Offcanvas toggle={toggleSideBar} isOpen={isOpen}>
        <OffcanvasHeader toggle={toggleSideBar}>Logo</OffcanvasHeader>
        <OffcanvasBody>
          <NavItems />
        </OffcanvasBody>
      </Offcanvas>
    </>
  );
}

SideBar.propTypes = {
  toggleSideBar: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
};
export default SideBar;
