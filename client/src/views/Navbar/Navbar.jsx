import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/mvp_logo_full.png';
import NavigationItems from './NavigationItems/NavigationItems'
import './navbar.scss';

const Navbar = () => {
  return (
    <nav>
        <Link to="/"><img src={Logo} alt="logo" /></Link>
        <NavigationItems />
    </nav>
  )
}

export default Navbar;
