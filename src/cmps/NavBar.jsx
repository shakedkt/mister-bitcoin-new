import React from 'react';
import { NavLink } from 'react-router-dom';
import Hamburger from './Hamburger'

export default (props) => {
    return (
        <header>
            <div className="logo">
            <NavLink className="logo" activeClassName="active" exact to="/mister-bitcoin-new/home">MISTER.BITCOIN</NavLink>
            </div>
            <Hamburger/>
        </header>
    );
};
