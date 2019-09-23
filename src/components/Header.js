import React from 'react';
import {NavLink} from 'react-router-dom';
const Header = () =>(
    <header>
        <h1 className="headerH1">Expensify</h1>
        <NavLink to="/" activeClassName="is-active"  exact={true}>Dashboard Page</NavLink>
        <NavLink to="/create" activeClassName="is-active">Create Page</NavLink>
        <NavLink to="/help" activeClassName="is-active">Help Page</NavLink>
        <NavLink to="/history" activeClassName="is-active">History</NavLink>
    </header>
);
export default Header;