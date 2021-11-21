import React, { useLayoutEffect, useRef, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import Expandable from '../../Util/Expandable/Expandable';
import "./Projects.scss";
import projects from "./ProjectsData";

const COLLPASED_HEIGHT = 350;

const Project = (project: typeof projects[0]) => {
    return (
        <div className='project'>
            <div className="project-media">
                <img src={project.mediaLink} alt={project.title} />
            </div>

            <Expandable>
                <div className="project-body">
                    <h1 className="project-title">
                        {project.title}
                    </h1>
                    <div className='project-description'>
                        <ReactMarkdown>{project.description}</ReactMarkdown>
                    </div>
                    <div className="links">
                        <button>GitHub</button>
                        <button>Live Deployment</button>
                    </div>
                </div>
            </Expandable>

            <div className='project-date-started'>
                {"Start Date: " + project.dateStarted.toLocaleString("en-GB", {
                    month: 'long',
                    year: "numeric"
                })}
            </div>
        </div>
    )
}

const Projects = () => {
    return (
        <div className='projects-container'>
            {projects.map(project => {
                return (
                    <Project {...project} />
                )
            })}
        </div>
    );
};

export default Projects;