import React from "react";
import Slider from "./slider/Slider";
import '../styles/projects.scss'

const Projects = () => {
    return (
        <div className="projects" id="projects_part">
            <h3>Projects</h3>
            <div className="slideShow">
            <Slider />
        </div>
        </div>
    )
}

export default Projects;