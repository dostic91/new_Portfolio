import React from "react";
import '../styles/about.scss'

const About = () => {
    return (
        <div className="about" id="about_part">
            <h3>About Me</h3>
            <div className="about_fields">
                <div className="aboutMe">
                    <p id="naslov">About Me</p>
                    <p id="text">Software development enthusiast with a good understanding of technical concepts and knowledge of
                        popular programming languages. Now looking for the right opportunity to bring my skills to a dynamic IT
                        software company in a software development position.
                    </p>
                </div>
                <div className="education">
                    <p id="naslov">Education</p>
                    <p id="text">
                        -Electrotecnical High School
                            Mihajlo Pupin, Novi Sad
                    </p>
                    <p id="text">
                        -Mechanical Engineering
                            Faculty of Technical Science, Novi Sad
                    </p>
                    <p id="text">
                        -Programming Fundamentals
                            FTN Informatika, Novi Sad
                    </p>
                    <p id='text'>
                        -Test Development Course
                            FTN Informatika, Novi Sad
                    </p>
                </div>
                <div className="skills">
                    <p id="naslov">Skills</p>
                    <p id="text">
                        HTML 5<br></br>
                        CSS<br></br>
                        ScSS<br></br>
                        Bootstrap<br></br>
                        JavaScript<br></br>
                        React<br></br>
                        NodeJs<br></br>
                        MongoDB<br></br>
                        MySQL<br></br>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About;