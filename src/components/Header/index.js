import React, { Component } from 'react'
import logo from '../../logo.svg'
import { Link, NavLink } from 'react-router-dom'

export default class Header extends Component {
    render() {
        return (
            <header>
                <div className="container h-flex">
                    <div>
                        <Link to='/' className="logo">
                            <img src={logo} alt="logo"></img>
                        </Link>
                    </div>
                    <nav className="links">
                        <ul>
                            <li>
                                <NavLink to='/' className="menu__links">Feed</NavLink>
                            </li>
                            <li>
                                <NavLink to='/profile' className="menu__links">Profile</NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        )
    }
}