import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = props => {
    return (
        <div className='navbar'>
            <h3>Smurf Village</h3>
            <div className='nav-links'>
                <NavLink to='/'>Smurfs</NavLink>
                <NavLink to='/smurf-form'>Add Smurf</NavLink>
            </div>
        </div>
    );
}

export default NavBar;