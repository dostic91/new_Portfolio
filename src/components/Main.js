import React from "react";
import '../styles/main.scss'
import {FaGithub, FaLinkedin, FaFile} from 'react-icons/fa'

const Main = () => {
    return (
        <div className="center">
        <div className="text">
            <p id="name">Dejan Dostic</p>
            <p id="job">Software Developer</p>
        </div>
            <div className="icons">
            <a href="https://www.linkedin.com">
                <FaLinkedin size={40} style={{color: '#333'}} />
            </a>
            <a href="https://www.github.com">
            <FaGithub size={40} style={{color: '#333'}}/> 
            </a>
            <a href="/">
                <FaFile size={40} style={{color: '#333'}} />
            </a>
        </div>
        </div>
    )
}

export default Main;