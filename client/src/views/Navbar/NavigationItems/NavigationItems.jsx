import React from "react";
import { NavLink } from "react-router-dom";
import "./NavigationItems.scss";

const navigationItems = props => (
    <div className="navigationItems">
        <ul>            
            <NavLink to="/football" activeClassName="active"><span className="navigation-links"><li>Football</li></span></NavLink>
            <NavLink to="/basketball" activeClassName="active"><span className="navigation-links"><li>Basketball</li></span></NavLink>
            <NavLink to="/tennis" activeClassName="active"><span className="navigation-links"><li>Tennis</li></span></NavLink>
            <NavLink to="/formula1" activeClassName="active"><span className="navigation-links"><li>Formula1</li></span></NavLink>
            <NavLink to="/fighting" activeClassName="active"><span className="navigation-links"><li>Fighting</li></span></NavLink>
        </ul>
    </div>
);
    
export default navigationItems;