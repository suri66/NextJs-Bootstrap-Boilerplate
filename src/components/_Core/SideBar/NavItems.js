import Link from 'next/link';
import React from 'react';
import { Nav, NavItem } from 'reactstrap';

function NavItems() {
  return (
    <Nav vertical className="list-unstyled pb-3">
      {/* <SubMenu title="Home" icon={faHome} items={submenus[0]} /> 
      // if submenu required it will go here */}
      <NavItem className="my-2">
        <Link href="/orders">
          <a className="text-decoration-none">My Orders</a>
        </Link>
      </NavItem>
      <NavItem className="my-2">
        <Link href="/wishlist">
          <a className="text-decoration-none">My Wishlist</a>
        </Link>
      </NavItem>
      <NavItem className="my-2">
        <Link href="/cart">
          <a className="text-decoration-none">My Cart</a>
        </Link>
      </NavItem>
      <NavItem className="my-2">
        <Link href="/setting">
          <a className="text-decoration-none">Settings</a>
        </Link>
      </NavItem>
      <NavItem className="my-2">
        <Link href="/logout">
          <a className="text-decoration-none">Logout</a>
        </Link>
      </NavItem>
    </Nav>
  );
}

export default NavItems;
