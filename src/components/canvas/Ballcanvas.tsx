import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";
import { Loader } from "..";

const Ball = (props: { img: any; index: number }) => {
  const [decal] = useTexture([props.img]);

  return (
    <Float speed={2} rotationIntensity={props.index / 2} floatIntensity={5}>
      <ambientLight intensity={3} />
      <directionalLight position={[0, 0, 0, 0] as any} />
      <mesh castShadow receiveShadow scale={2}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#ffffff"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          map={decal}
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 4]}
        />
      </mesh>
    </Float>
  );
};

const Ballcanvas = (props: any) => {
  return (
    <Canvas frameloop="demand" gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<Loader />}>
        <OrbitControls enableZoom={false} autoRotate />
        <Ball img={props.icon} index={props.index} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default Ballcanvas;
