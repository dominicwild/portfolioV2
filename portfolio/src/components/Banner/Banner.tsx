import React from 'react';
import "./Banner.scss";
import ParticlesBackdrop from './Particles/ParticlesBackdrop';
import Skills from './Skills/Skills';

    const icons = {
        java: <ParticlesBackdrop />,
    }

const Banner = () => {
    return (
        <div className="banner">
            <div className='particles'>
                <ParticlesBackdrop />
            </div>
            <div className="bannerContainer">

                <div className="overviewContainer">
                    <div className="overview">
                        <div className="name">
                            <h1>Dominic Wild</h1>
                        </div>
                        <div className="statement">
                            <h2>Software Developer - Seeking constant growth, learning and expanded perspective on the industry </h2>
                        </div>
                    </div>
                </div>

                <div className="skillsContainer">
                    <div className='skillsTitle'>
                        <h1>Skills</h1>
                    </div>
                    <div className="skillsDetail">
                        <Skills />
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Banner;