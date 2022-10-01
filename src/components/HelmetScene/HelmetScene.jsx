import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Model } from "../index";
import "./HelmetScene.scss";

export const HelmetScene = () => {
  return (
    <div className="helmetScene">
      <Canvas orthographic camera={{ zoom: 150, position: [0, 0, 10] }}>
        <Suspense fallback={null}>
          <Model />
          <Environment preset="night" />
        </Suspense>
        <spotLight position={[-350, 600, 200]} intensity={3} />
      </Canvas>
    </div>
  );
};
