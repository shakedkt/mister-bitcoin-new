import React from 'react';
import { NavLink } from 'react-router-dom';

export default (props) => {
    return (
        <header>
            <div className="logo">
                MISTER.BITCOIN
            </div>
            <nav className="NavBar">
                <NavLink activeClassName="active" exact to="/">HOME</NavLink>
                <NavLink activeClassName="active" exact to="/Contact">CONTACTS</NavLink>
                <NavLink activeClassName="active" exact to="/Statistic">STATISTIC</NavLink>
            </nav>
        </header>
    );
};
