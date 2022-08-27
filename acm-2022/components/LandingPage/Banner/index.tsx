import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";

const Banner = () => {
  const particlesInit = useCallback(async (engine: any) => {
    console.log(engine);

    // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: any | undefined) => {
    await console.log(container);
  }, []);

  return (
    <Particles height="100%" id="tsparticles" url="json/particles.json" init={particlesInit} loaded={particlesLoaded} />
  );
};

export default Banner;