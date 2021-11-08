import React from 'react';
import Particles, { Container, Main } from "react-tsparticles";
import "./ParticlesBackdrop.scss";

const ParticlesBackdrop = () => {
    const particlesInit = (main: Main) => {
        console.log(main);

        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets


    };

    const particlesLoaded = (container: Container) => {
        console.log(container);
    };

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                fpsLimit: 60,
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: "push",
                        },
                        resize: true,
                    },
                    modes: {
                        bubble: {
                            distance: 400,
                            duration: 2,
                            opacity: 0.8,
                            size: 40,
                        },
                        push: {
                            quantity: 0,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#ffffff",
                    },
                    links: {
                        color: "#ffffff",
                        distance: 120,
                        enable: true,
                        opacity: 0.5,
                        width: 1,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outMode: "bounce",
                        random: true,
                        speed: 1,
                        straight: false,
                    },
                    number: {
                        value: 80,
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        random: true,
                        value: 5,
                    },
                },
            }}

        />

    );
};

export default ParticlesBackdrop;