import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Nav.css';

export const Nav = ({activeUser, onLogout}) => {
    const logout = () => {
        onLogout();
    }

    if (activeUser === undefined) {
        return (
            <nav className='Nav'>
                <NavLink className={({ isActive }) => isActive ? "active" : undefined} to="/home">
                    Home
                </NavLink>
                <NavLink className={({ isActive }) => isActive ? "active" : undefined} to="/register">
                    Register
                </NavLink>
                <NavLink className={({ isActive }) => isActive ? "active" : undefined} to="/login">
                    Login
                </NavLink>
            </nav>
        );
    }
    else {
        return (
            <nav className='Nav'>
                <NavLink className={({ isActive }) => isActive ? "active" : undefined} to="/home">
                    Home
                </NavLink>
                <NavLink className={({ isActive }) => isActive ? "active" : undefined} to="/create-recipe">
                    Create Recipe
                </NavLink>
                <NavLink className={({ isActive }) => isActive ? "active" : undefined} to="/" onClickCapture={logout} >
                    Logout
                </NavLink>
            </nav>
        )
    }
}
