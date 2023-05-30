import React, { Suspense } from "react";
import { Canvas } from '@react-three/fiber';
import { SpotLightHelper } from 'three';
import Model from "./Ame";
import { OrbitControls, Preload, SpotLight } from '@react-three/drei';

import CanvasLoader from '../Loader';

const Earth = () => {
  // This component renders a 3D model of the Earth.
  return (
    <mesh>
      <Model
        scale={1.2}
        position-y={-2}
        rotation-y={-1}
      />
    </mesh>
  );
};

const EarthCanvas = () => {
  // This component renders a 3D canvas of the Earth.
  return (
    <Canvas
      shadows
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />

        <spotLight
          position={[0, 5, 0]} // Position the light in front of the model
          intensity={2} // Adjust the intensity of the light
          color="lightblue" // Set the color of the light
          castShadow // Enable shadow casting
          shadow-mapSize-width={1024} // Adjust shadow map size
          shadow-mapSize-height={1024} // Adjust shadow map size
          shadow-camera-near={1} // Adjust shadow camera near value
          shadow-camera-far={10} // Adjust shadow camera far value
          shadow-camera-fov={45} // Adjust shadow camera field of view
          shadow-camera-aspect={1} // Required for shadow mapping to work correctly
        /> 

        <Earth />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default React.memo(EarthCanvas);
