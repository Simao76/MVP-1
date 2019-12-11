import React from 'react';
import Logo from "../../assets/images/mvp_logo_full.png";
import './navbar.scss';

const Navbar = () => {
  return (
    <nav>
        <img src={Logo} alt="logo"/>
    </nav>
  )
}

export default Navbar;
