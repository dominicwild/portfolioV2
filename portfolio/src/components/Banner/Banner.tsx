import React from 'react';
import "./Banner.scss";

const Banner = () => {
    return (
        <div className="banner">
            <div className="bannerContainer">

                <div className="overviewContainer">
                    <div className="overview">
                        <div className="name">
                            <h1>Dominic Wild</h1>
                        </div>
                        <div className="statement">
                            <h2>Software Developer - Seeking constant growth </h2>
                        </div>
                    </div>
                </div>

                <div className="skillsContainer">
                    <div>
                        <h1>Skills</h1>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Banner;