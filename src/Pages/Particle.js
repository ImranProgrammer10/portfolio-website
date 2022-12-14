 
import { loadFull } from "tsparticles";
import { useCallback } from "react";
import React  from 'react';
import Particles from "react-tsparticles";


function Particle() {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
}, []);

const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
}, []);
  return (
    <>
      <Particles width="100%" height="100vh" 
      
id="tsparticles"
init={particlesInit}
loaded={particlesLoaded}
              params={{
                particles: {
                  number:{
                    value:109,
                    density:{
                      enable: true,
                      value_area: 1200
                    }
                  },
                  color:{
                    value: '#636e72'
                  },
                  shape:{
                    type: 'circle',
                    stroke: {
                      width: 0
                    },
                    polygon:{
                      nb_sides: 6
                    }
                  },
                  line_linked: {
                    enable: false,
                    distance: 150,
                    opacity: 0.9,
                    width: 1,
                    shadow: {
                      enable: true,
                      color: "#e74c3c",
                      blur: 5
                    }
                  },
                  move:{
                    enable: true,
                    random: true,
                    speed: .6,
                    attract:{
                      rotateX: 600,
                      rotateY: 1200
                    }
                  },
                  size: {
                    value: 4,
                    random: true,
                    anim:{
                      speed: 40,
                      size_min: 0.1
                    }
                  },
                  opacity: {
                    value: 0.8,
                    anim: {
                      speed: 1,
                      opacity_min: 0.1
                    }
                  }
                }
              }}
      />
    </>
  )
}

export default Particle;
