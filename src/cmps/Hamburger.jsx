import { slide as Menu } from 'react-burger-menu'
import { NavLink } from 'react-router-dom';
import React, { Component } from 'react';


class Hamburger extends Component {
    showSettings(event) {
        event.preventDefault();
    }

    render() {
        // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling

        return (
            <Menu>
                <NavLink className="menu-item" activeClassName="active" exact to="/">HOME</NavLink>
                <NavLink className="menu-item" activeClassName="active" exact to="/Contact">CONTACTS</NavLink>
                <NavLink className="menu-item" activeClassName="active" exact to="/Statistic">STATISTIC</NavLink>
            </Menu>
        );
    }
}
export default Hamburger
