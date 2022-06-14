/**
 * @name Header.js
 * @description App Header
 * @version 0.0.0
 */
import React from 'react';
import Link from 'next/link';
import { Navbar, Button, NavbarBrand } from 'reactstrap';
import propTypes from 'prop-types';
import styles from './Header.module.css';

function Header({ sticky, toggleSideBar }) {
  return (
    <Navbar
      color="light"
      expand="md"
      fixed={sticky && 'top'}
      light
      className={`${styles.headerBackground} `}
    >
      {/* <Image
          onClick={() => Router.push('/')}
          src="/images/IB-Recruitment-Logo.png"
          width="238"
          height="37"
          alt="IB RECRUITMENT"
          className="cursor-pointer"
        /> */}
      <div>
        <Button onClick={toggleSideBar} color="primary">
          <span className="material-symbols-outlined align-items-center d-flex">menu</span>
        </Button>
        <NavbarBrand className="mx-3">Logo</NavbarBrand>
      </div>
      {/* <NavbarToggler onClick={() => setIsOpen(!isOpen)} /> */}
      {/* <Collapse isOpen={isOpen} navbar className={styles.headerLinkDiv}>
          <Nav navbar>
            <NavItem>
              <Link href="/" passHref>
                <a className={styles.headerLink}>Dashboard</a>
              </Link>
            </NavItem>
            <NavItem style={{ marginLeft: 15 }}>
              <Link href="/" passHref>
                <a className={styles.headerLink}>Incomplete</a>
              </Link>
            </NavItem>
            <NavItem style={{ marginLeft: 15 }}>
              <Link href="/" passHref>
                <a className={styles.headerLink}>Complete</a>
              </Link>
            </NavItem>
            <NavItem style={{ marginLeft: 15 }}>
              <Link href="/" passHref>
                <a className={styles.headerLink}>Profile</a>
              </Link>
            </NavItem>
            <NavItem style={{ marginLeft: 15 }}>
              <Link href="/" passHref>
                <a className={styles.headerLink}>Report</a>
              </Link>
            </NavItem>
          </Nav>
        </Collapse> */}
      <div className={styles.singInRegisterButton}>
        <Button
          className="font-size-18 border-radius-20 border-radius-20"
          color="dark"
          outline
          style={{ padding: '8px 25px' }}
        >
          <Link href="/login">
            <a className="text-decoration-none" color="dark">
              Sign In
            </a>
          </Link>
        </Button>
        &nbsp;&nbsp;
        <Button color="light" className="font-size-18">
          <Link href="/register">
            <a className="text-decoration-none" color="dark">
              Register
            </a>
          </Link>
        </Button>
      </div>
    </Navbar>
  );
}

Header.propTypes = {
  sticky: propTypes.bool.isRequired,
  toggleSideBar: propTypes.func.isRequired,
};
export default Header;
