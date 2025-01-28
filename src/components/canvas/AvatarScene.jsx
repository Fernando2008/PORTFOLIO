/* eslint-disable react/no-unknown-property */
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Avatar from "./Avatar";
import CanvasLoader from "./CanvasLoader";

const AvatarScene = () => {
  return (
    <div className="absolute w-full h-full">
      <Canvas
        dpr={[1, 2]}
        camera={{ position: [2, 1, 2] }}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            enableDamping={true}
            dampingFactor={0.1}
            rotateSpeed={0.5}
            target={[0, 0, 0]}
            minPolarAngle={Math.PI / 4}
            maxPolarAngle={Math.PI / 2}
          />
          <group position={[1.9, -0.8, 1]}>
            <Avatar />
          </group>
        </Suspense>
        <ambientLight intensity={1} />
      </Canvas>
    </div>
  );
};

export default AvatarScene;
