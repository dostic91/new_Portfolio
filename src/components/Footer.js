import React from "react";
import '../styles/footer.scss'

const Footer = () => {

const current = new Date();
const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

    return(
        <div className="footer" id="contact">
            <p id="contact">Contact</p>
            <div className="info">
                <p>Dejan Dostic</p>
                <p>Email: dosticdejan@gmail.com</p>
                <p>Phone: +381 64 0456903</p>
            </div>
            <p id="date">{date}</p>
        </div>
    )
}

export default Footer;