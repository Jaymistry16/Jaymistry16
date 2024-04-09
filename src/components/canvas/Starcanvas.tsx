import { OrbitControls, Preload } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
// import * as random from "maath/random/dist/maath-random.esm";
import { Suspense } from "react";

const Star = () => {
  // const ref = useRef();
  // const sphere = random.inSphere(new Float32Array(5000), { radius: 1.2 });
  // console.log(sphere);

  // return (
  //   <group rotation={[0, 0, Math.PI / 4]}>
  //     <Points
  //       ref={ref}
  //       position={[
  //         -0.14310480654239655, 0.1655472218990326, 0.9181624054908752,
  //         0.4721381366252899, 0.6166083812713623, 0.3436160683631897,
  //         0.5554977655410767, -0.8518515825271606, -0.6169755458831787,
  //         0.8213489651679993, 0.1799640953540802, -0.7799255847930908,
  //         -0.2653791904449463, 0.5066301226615906, 0.5182888507843018,
  //         0.9239453673362732, 0.21956948935985565, 0.6507462859153748,
  //         0.6419640779495239, -0.8835922479629517, 0.25016942620277405,
  //         0.5564227104187012, -0.3886640667915344, -0.38445910811424255,
  //         0.5785521864891052, -0.7532886862754822, -0.21251219511032104,
  //         -0.3759334981441498, 0.41581636667251587, -0.7294812202453613,
  //         0.16531306505203247, -0.342149555683136, 0.3651573956012726,
  //         0.44382143020629883, 0.4767674505710602, 0.5092602968215942,
  //         -0.49751946330070496, 0.22370609641075134, -0.18514709174633026,
  //         0.6024314165115356, 0.4497348666191101, -0.9174224138259888,
  //         -0.345279335975647, 0.441556453704834, -0.8859001398086548,
  //         0.24354374408721924, 0.5861896872520447, 0.4682827293872833,
  //         -0.775731086730957, 0.6373391151428223, 0.16587978601455688,
  //         -0.26800107955932617, 0.7270155549049377, 0.5594562888145447,
  //         0.4102681279182434, -0.7142691612243652, -0.29905426502227783,
  //         -0.10123059153556824, 0.6066457033157349, -0.3669877350330353,
  //         -0.4777846932411194, -0.6511685848236084, -0.6224097013473511,
  //         -0.5730299353599548, 0.40184760093688965, 0.025439007207751274,
  //         0.42369344830513, -0.37512660026550293, 0.828271746635437,
  //         0.747379720211029, -0.16326990723609924, -0.7313393354415894,
  //         -0.46456778049468994, -0.8761876225471497, 0.29165002703666687,
  //         -0.2611357271671295, -0.7513548135757446, -0.14164651930332184,
  //         0.30269771814346313, 0.37402045726776123, 0.2310350090265274,
  //         -0.6956040263175964, -0.5245085954666138, -0.42807987332344055,
  //         0.46383824944496155, 0.8382754325866699, 0.6311301589012146,
  //         -0.8098663091659546, 0.05208935588598251, 0.6999711990356445,
  //         -0.7657982707023621, 0.33689290285110474, -0.6991975903511047,
  //         0.38412144780158997, 0.1308579295873642, -0.5642863512039185,
  //         -0.006562788039445877, -0.7973561882972717, -0.5433197617530823,
  //         0.1617387980222702,
  //       ]}
  //       stride={3}
  //       frustumCulled
  //       {...props}
  //     >
  //       <PointMaterial
  //         color="#f272c8"
  //         size={0.02}
  //         sizeAttenuation={true}
  //         depthWrite={false}
  //       />
  //     </Points>
  //   </group>
  // );

  const particlesCount = 5000;
  const particlePositions = new Float32Array(particlesCount * 4);

  for (let i = 0; i < particlesCount; i++) {
    const i3 = i * 5;

    particlePositions[i3] = Math.random();
    particlePositions[i3 + 1] = Math.random();
    particlePositions[i3 + 2] = Math.random();
    particlePositions[i3 + 3] = Math.random();
    particlePositions[i3 + 4] = Math.random();
    particlePositions[i3 + 5] = Math.random();
    particlePositions[i3 + 6] = Math.random();
    particlePositions[i3 + 7] = Math.random();
    particlePositions[i3 + 8] = Math.random();
    particlePositions[i3 + 9] = Math.random();
    particlePositions[i3 + 15] = Math.random();
  }

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particlesCount}
          itemSize={3}
          array={particlePositions}
        />
      </bufferGeometry>
      <pointsMaterial size={0.0011} color="white" transparent />
    </points>
  );
};

const Starcanvas = () => {
  return (
    <div className="w-full h-full absolute inset-0  -z-10 ">
      <Canvas
        camera={{ position: [0.5, 1, 0.5], fov: 60 }}
        onPointerEnter={() => console.log("dfga")}
      >
        <Suspense fallback={null}>
          <Star />
          <OrbitControls
            enableZoom={false}
            // maxPolarAngle={2.57}
            minPolarAngle={0.57}
            autoRotate
          />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default Starcanvas;
