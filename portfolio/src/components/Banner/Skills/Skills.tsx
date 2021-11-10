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
                const skillIconFlexGrow = skill.detail != undefined ? 1 : 0;
                return (
                    <div className="skill-item" key={index}>
                        <div>
                            <div className='skill-icon' title={skill.name}>
                                <skill.icon color="white" />
                            </div>
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