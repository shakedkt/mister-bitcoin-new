import React from 'react';
import { NavLink } from 'react-router-dom';
import Hamburger from './Hamburger'

export default (props) => {
    return (
        <header>
            <div className="logo">
            <NavLink className="logo" activeClassName="active" exact to="/">MISTER.BITCOIN</NavLink>
            </div>
            <Hamburger/>
            {/* <nav className="NavBar">
                <NavLink activeClassName="active" exact to="/">HOME</NavLink>
                <NavLink activeClassName="active" exact to="/Contact">CONTACTS</NavLink>
                <NavLink activeClassName="active" exact to="/Statistic">STATISTIC</NavLink>
            </nav> */}
        </header>
    );
};
