
import { useCallback } from "react";
import Particles from "react-particles";

import { loadSlim } from "tsparticles-slim"; 

const Particle = () => {
    const particlesInit = useCallback(async engine => {
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        //await loadFull(engine);
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);

    return (
        <Particles 
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
            background: {
                color: {
                    value: "/public/kages.png",
                },
            },
            fpsLimit: 120,
            interactivity: {
                events: {
                    onClick: {
                        enable: true,
                        mode: "repulse",
                    },
                    onHover: {
                        enable: false,
                        mode: "attract",
                       
                    },
                    resize: true,
                },
                modes: {
                    push: {
                        quantity: 4,
                    },
                    repulse: {
                        distance: 200,
                        duration: 0.5,
                    },
                },
            },
            particles: {
                color: {
                    value: "#000000",
                },
                links: {
                    color: "#000000",
                    distance: 150,
                    enable: true,
                    opacity: 0.1,
                    width: 0.1,
                },
                move: {
                    direction: "none",
                    enable: true,
                    outModes: {
                        default: "bounce",
                    },
                    random: true,
                    speed: 0.3,
                    straight: true,
                },
                number: {
                    density: {
                        enable: true,
                        area: 800,
                    },
                    value: 90,
                },
                opacity: {
                    value: 0.5,
                },
                shape: {
                    type: "image",

                    image: {
                      src: "/public/aldeiadaFolha.svg"
                    }
                },
                size: {
                    value: { min: 5, max: 20 },
                },
            },
            detectRetina: true,
        }}
    />
    );
};

export default Particle