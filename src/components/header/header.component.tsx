import React from "react";
import { NavLink } from "react-router-dom";

// css styles
import './header.component.css';

const Header: React.FC = () => {
    return (
        <>
            <header>
                <nav>

                    <ul className="ulList">
                        <li>
                            <NavLink to={'/'}>Home </NavLink>
                        </li>
                        <li>
                            <NavLink to={'/about'}>About </NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
}

export default Header