import React, { useLayoutEffect, useRef, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import "./Projects.scss";
import projects from "./ProjectsData";

const COLLPASED_HEIGHT = 350;

const Project = (project: typeof projects[0]) => {
    const [height, setHeight] = useState(COLLPASED_HEIGHT);
    const [expanded, setExpanded] = useState(false);
    const projectBodyHeight = useRef(-1);
    const projectBody = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        if (projectBodyHeight.current === -1 && projectBody.current != null) {
            projectBodyHeight.current = projectBody.current.scrollHeight;
        }
    })

    const expandProject = (e: React.MouseEvent<HTMLInputElement>) => {
        if (projectBody.current) {
            if(expanded) {
                setHeight(COLLPASED_HEIGHT);
                setExpanded(false);
            } else {
                setHeight(projectBodyHeight.current);
                setExpanded(true);
            }
        }
    }

    return (
        <div className='project'>
            <div className="project-media">
                <img src={project.mediaLink} alt={project.title} />
            </div>

            <div className="project-body" onClick={expandProject} ref={projectBody} style={{maxHeight: `${height}px`}}>
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