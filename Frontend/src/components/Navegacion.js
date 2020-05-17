import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from './ubimed-logo.png'

export default class Navegacion extends Component {
    render() {
        return (
            <div>
            <nav className="navbar-fixed teal lighten-1">
                <div className="container">
                    <div className="nav-wrapper">
                        <NavLink className="brand-logo" to="/">UbiMed</NavLink>
                            <a href="/" className="sidenav-trigger" data-target="menuresponsive">
                            <i className="material-icons">menu</i>
                            </a>
                            
                        <ul className="right hide-on-med-and-down">
                            <li><NavLink to="/Medicamentos">Medicamentos</NavLink></li>
                            <li><NavLink to="/Login">Login</NavLink></li>
                        </ul>
                    </div>
                </div>
            </nav>
            <ul className="sidenav" id="menuresponsive">
                <li><NavLink to="/">Inicio</NavLink></li>
                <li><NavLink to="/Medicamentos">Aprende mas</NavLink></li>
                <li><NavLink to="/Login">Login</NavLink></li>
            </ul>
        </div>
        )
    }
}
