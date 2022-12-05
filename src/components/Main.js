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
            <a href="https://www.linkedin.com/in/dejan-dosti%C4%87-45b8421a6/" target={'_blank'}>
                <FaLinkedin size={40} style={{color: '#333'}} />
            </a>
            <a href="https://www.github.com/dostic91" target={'_blank'}>
            <FaGithub size={40} style={{color: '#333'}} /> 
            </a>
            <a href="/" target={'_blank'}>
                <FaFile size={40} style={{color: '#333'}}  />
            </a>
        </div>
        </div>
    )
}

export default Main;