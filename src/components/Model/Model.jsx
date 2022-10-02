/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: 3DWorkbench (https://sketchfab.com/3DWorkbench)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/black-helmet-fb2230b152824463a75e903d38d035a8
title: Black helmet
*/

import { useGLTF } from "@react-three/drei";
import { useScroll } from "framer-motion";
import React, { useEffect, useRef } from "react";

export const Model = (props) => {
  const { scrollYProgress } = useScroll();
  const ref = useRef();

  useEffect(() => {
    return scrollYProgress.onChange((latest) => {
      ref.current.rotation.y = (Math.PI / 2) * latest;
    });
  }, [scrollYProgress]);

  const { nodes, materials } = useGLTF("/black_helmet.glb");
  return (
    <group {...props} dispose={null} ref={ref}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <group position={[-2.63, -17.63, -33.11]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.parts_parts_0.geometry}
              material={materials.parts}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.parts_L2_0.geometry}
              material={materials.material}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.parts_L1_0.geometry}
              material={materials.material_2}
            />
          </group>
        </group>
      </group>
    </group>
  );
};

useGLTF.preload("/black_helmet (1).glb");
