import React from 'react'
import './navbar.css';
import { LuPhilippinePeso } from 'react-icons/lu';
export const Navbar = () => {
    return (
        <div>

            <div className="nav-bar">
                <div className="icon">
                    <LuPhilippinePeso />
                </div>

                <div className="nav-items">
                    <ul>

                        <li>Home</li>
                        <li>Contact</li>
                        <li>About</li>
                        <li>Login</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

