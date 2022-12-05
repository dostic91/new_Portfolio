import React, {useState} from 'react';
import {FaBars, FaTimes} from 'react-icons/fa'
import '../styles/header.scss'

const Header =() => {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
    const closeMenu = () => setClick(click)

    return (
        <div className="navbar">
            <div className="left">
                Dejan Dostic
            </div>
            <div className="hamburger" onClick={handleClick}>
                {click ? (<FaTimes  size={25} style={{color: '#black'}}/>) : (<FaBars size={25} style={{color: '#black'}}/>)}
            </div>
            <div className={click ? 'nav-menu active' : 'nav-menu'}>
                <ul>
                    <li>
                        <a href='/'>Home</a>
                    </li>
                    <li>
                        <a href='/'>About</a>
                    </li>
                    <li>
                        <a href='/'>Projects</a>
                    </li>
                    <li>
                        <a href='/'>Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Header;