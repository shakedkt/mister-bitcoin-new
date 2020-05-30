import { slide as Menu } from 'react-burger-menu'
import { NavLink } from 'react-router-dom';
import React, { Component } from 'react';


class Hamburger extends Component {
    showSettings(event) {
        event.preventDefault();
    }

    render() {
        return (
            <Menu>
                <NavLink className="menu-item" activeClassName="active" to="/mister-bitcoin-new/Home">HOME</NavLink>
                <NavLink className="menu-item" activeClassName="active"  to="/mister-bitcoin-new/Contact">CONTACTS</NavLink>
                <NavLink className="menu-item" activeClassName="active"  to="/mister-bitcoin-new/Statistic">STATISTIC</NavLink>
            </Menu>
        );
    }
}
export default Hamburger
