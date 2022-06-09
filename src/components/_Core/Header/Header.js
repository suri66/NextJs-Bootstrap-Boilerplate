/**
 * @name Header.js
 * @description App Header
 * @version 0.0.0
 */

import React, { useState } from 'react';
import Link from 'next/link';
import { Collapse, Navbar, NavbarToggler, Nav, NavItem, Button, NavbarBrand } from 'reactstrap';
import styles from './Header.module.css';
import LoginModal from '../../Modals/LoginModal/LoginModal';
import RegisterModal from '../../Modals/RegisterModal/RegisterModal';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  const toggleModal = () => {
    setIsSignInOpen(!isSignInOpen);
  };
  const toggleRegisterModal = () => {
    setIsRegisterOpen(!isRegisterOpen);
  };
  return (
    <div>
      <Navbar color="light" expand="md" fixed="" light className={styles.headerBackground}>
        {/* <Image
          onClick={() => Router.push('/')}
          src="/images/IB-Recruitment-Logo.png"
          width="238"
          height="37"
          alt="IB RECRUITMENT"
          className="cursor-pointer"
        /> */}
        <NavbarBrand>Logo</NavbarBrand>
        <NavbarToggler onClick={() => setIsOpen(!isOpen)} />
        <Collapse isOpen={isOpen} navbar className={styles.headerLinkDiv}>
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
        </Collapse>
        <div className={styles.singInRegisterButton}>
          <Button
            className="font-size-18 border-radius-20 border-radius-20"
            color="dark"
            outline
            style={{ padding: '8px 25px' }}
            onClick={toggleModal}
          >
            Sign In
          </Button>
          &nbsp;&nbsp;
          <Button color="light" className="font-size-18" onClick={toggleRegisterModal}>
            Register
          </Button>
        </div>
      </Navbar>

      <LoginModal toggleModal={toggleModal} isOpen={isSignInOpen} />
      <RegisterModal toggleModal={toggleRegisterModal} isOpen={isRegisterOpen} />
    </div>
  );
}

export default Header;
