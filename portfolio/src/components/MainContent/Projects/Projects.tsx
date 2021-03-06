import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import ExpandIcon from '../../Icons/ExpandIcon';
import Expandable from '../../Util/Expandable/Expandable';
import "./Projects.scss";
import projects from "./ProjectsData";

const Project = (project: typeof projects[0]) => {
    const [expanded, setExpanded] = useState(false);
    const [arrowRotation, setArrowRotation] = useState(0);
    const [projectDescription, setProjectDescription] = useState("");

    useEffect(() => {
        fetch(project.descriptionMarkDownFile)
            .then(res => res.text())
            .then(text => text.match("<!DOCTYPE html>") ? Promise.reject() : setProjectDescription(text))
            .catch(err => setProjectDescription("## [Error fetching project description]"))
    })

    const toggleExpanded = () => {
        setExpanded(!expanded);
        setArrowRotation(arrowRotation + 180);
    };

    const expandedClassName = expanded ? "expanded" : "collapsed";

    return (
        <div className='project' key={`${projectDescription}`}>
            <div className="project-media">
                <img src={project.mediaLink} alt={project.title} />
            </div>

            <Expandable expanded={expanded}>
                <div className={`project-body ${expandedClassName}`} onClick={toggleExpanded}>
                    <h1 className="project-title">
                        {project.title}
                    </h1>
                    <div className='project-description'>
                        <ReactMarkdown>{projectDescription}</ReactMarkdown>
                    </div>
                    <div className="links">
                        <button>GitHub</button>
                        <button>Live Deployment</button>
                    </div>
                </div>
            </Expandable>

            <div className='project-date-started'>
                <div>
                    {"Start Date: " + project.dateStarted.toLocaleString("en-GB", {
                        month: 'long',
                        year: "numeric"
                    })}
                </div>
                <div className={`expand-icon`}>
                    <ExpandIcon style={{ transform: `rotate(${arrowRotation}deg)` }} />
                </div>
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