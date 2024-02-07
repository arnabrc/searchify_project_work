import React, { useEffect } from 'react';
import { Button, Container, Form, Nav, Navbar, NavDropdown, Offcanvas } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './header.scss';

interface HeaderProps {

};

const handleClick = () => {

}

const Header = (props: HeaderProps) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary px-4 navbar-class">
            <Link className="navbar-brand" to="" >Searchify </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav  ms-auto">
                    <li className="nav-item active">
                        <Link className="nav-link" to="" >{'Home'}</Link>
                    </li>
                    <li className="nav-item active">
                        <i className="fa-sharp fa-regular fa-bell fa-xl"></i>
                    </li>
                    <li className="nav-item active">
                        <img src="https://cdn.iconscout.com/icon/free/png-256/free-avatar-370-456322.png?f=webp" alt="avatar" height="30px" className="rounded-circle" />
                    </li>
                </ul>
            </div>
        </nav>
    )
};

export default Header;