import React, { FunctionComponent } from 'react';
import { ReactOriginalIcon } from 'react-devicons';
import "./Skills.scss";
import skillsData from "./skillsData";

const SkillsContent = () => {
    return (
        <>
            {skillsData.map((skill, index) => {
                return (
                    <div className="skill-item" key={index}>
                        <div className='skill-icon' title={skill.name}>
                            <skill.icon color="white" />
                        </div>
                        <div className="skill-name">
                            {skill.name}
                        </div>
                    </div>
                );
            })}
        </>
    );
}

const Skills = () => {
    return (
        <div className="skills-content">
            <SkillsContent />
        </div>
    );
};

export default Skills;