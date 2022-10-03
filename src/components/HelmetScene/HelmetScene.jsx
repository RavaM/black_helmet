import { Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useRef } from "react";
import { Loader, Model } from "../index";
import { Lights } from "../../components";
import "./HelmetScene.scss";
import { useScroll } from "framer-motion";

export const HelmetScene = () => {
  const { scrollYProgress } = useScroll();
  const ref = useRef();

  useEffect(() => {
    return scrollYProgress.onChange((latest) => {
      ref.current.rotation.y = (Math.PI / 2) * latest;
    });
  }, [scrollYProgress]);

  return (
    <div className="helmetScene">
      <Canvas orthographic camera={{ zoom: 150, position: [0, 0, 10] }}>
        <Suspense fallback={<Loader />}>
          <mesh ref={ref}>
            <Model />
          </mesh>
          <Environment preset="night" />
        </Suspense>
        <Lights />
      </Canvas>
    </div>
  );
};
