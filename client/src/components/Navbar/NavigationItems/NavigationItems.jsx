import React from "react";
import { NavLink } from "react-router-dom";
import "./NavigationItems.scss";

const navigationItems = props => {
    return (
        <div className="navigationItems">
            <ul>            
                <NavLink to="/soccer" activeClassName="active"><span className="navigation-links"><li>Football</li></span></NavLink>
                <NavLink to="/basketball" activeClassName="active"><span className="navigation-links"><li>Basketball</li></span></NavLink>                
                <NavLink to="/baseball" activeClassName="active"><span className="navigation-links"><li>Baseball</li></span></NavLink>
                <NavLink to="/americanfootball" activeClassName="active"><span className="navigation-links"><li>American Football</li></span></NavLink>
            </ul>
        </div>
    )
};
    
export default navigationItems;
