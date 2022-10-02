import { Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Loader, Model } from "../index";
import { Lights } from "../../components";
import "./HelmetScene.scss";

export const HelmetScene = () => {
  return (
    <div className="helmetScene">
      <Canvas orthographic camera={{ zoom: 150, position: [0, 0, 10] }}>
        <Suspense fallback={<Loader />}>
          <Model />
          <Environment preset="night" />
        </Suspense>
        <Lights />
      </Canvas>
    </div>
  );
};
