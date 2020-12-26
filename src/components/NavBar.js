import React from "react";
import { NavLink } from "react-router-dom";
import '../styles/style.css';

export default function NavBar() {
    return (
        <div className="menu-container">
            <div className="name-container">
                Francesca<br/>Pusceddu
            </div>
            <div>
                <div className="nav-container">
                    <nav>
                        <ul className="ul-container">
                            <li><NavLink to="/">portraits</NavLink></li>                            
                            <li><NavLink to="/professional">professional</NavLink></li>
                            <li><NavLink to="/poster">poster</NavLink></li>
                            <li><NavLink to="/picturebooks">picture books</NavLink></li>
                            <li><NavLink to="/bitsandpieces">bits and pieces</NavLink></li>
                            <li><NavLink to="/about">about</NavLink></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
        
    )
}


