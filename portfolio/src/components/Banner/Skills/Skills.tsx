import React, { FunctionComponent } from 'react';
import { ReactOriginalIcon } from 'react-devicons';
import "./Skills.scss";
import skillsData, { SkillData } from "./skillsData";

const SkillDetail = ({ skill }: { skill: SkillData }) => {
    const { detail } = skill;
    if (detail != undefined) {
        return (
            <div className="skill-detail">
                {detail}
            </div>
        )
    }
    return (
        <>
        </>
    );
}

const SkillsContent = () => {
    return (
        <>
            {skillsData.map((skill, index) => {
                const noDetailClass = skill.detail == undefined ? "no-detail" : "";
                return (
                    <div className={`skill-item ${noDetailClass}`} key={index}>

                        <div className='skill-icon' title={skill.name}>
                            <skill.icon color="white" />
                        </div>


                        <SkillDetail skill={skill} />

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