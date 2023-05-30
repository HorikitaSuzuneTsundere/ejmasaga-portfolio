import React, { Suspense, useEffect, useState } from "react";
import { Canvas, useFrame } from '@react-three/fiber';
import Model from "./Scene";
import { Preload } from '@react-three/drei';
import { easing } from "maath"

import CanvasLoader from '../Loader';

function Rig() {
  return useFrame((state, delta) => {
    easing.damp3(state.camera.position, [1 + state.mouse.x / 4, 1.5 + state.mouse.y / 4, 2.5], 0.2, delta)
  })
}

const Computers = ({ isMobile }) => {
  return (
    <mesh>
      <Model 
      scale={isMobile ? 0.8 : 1}
      position={isMobile ? [1.2,-1,0] : [2.7,-1,0.08]}
      rotation={isMobile ? [-0.35,0,0] : [0,-0.5,0.2]}
      />  
      <hemisphereLight intensity={0.15} groundColor="black" />
      <pointLight intensity={1} />
      <spotLight 
        position={[-20,50,10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 500px)');

    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    }

    mediaQuery.addEventListener('change',handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener('change',handleMediaQueryChange);
    }
  }, [])

  return (
    <Canvas
      shadows
      camera={{ position: [0,1.5,3], fov: 65 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <Computers isMobile={isMobile}/>
      </Suspense>
      <Preload all />
      <Rig />
    </Canvas>
  );
};

export default React.memo(ComputersCanvas);