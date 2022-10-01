import { Environment, OrbitControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"
import { Model } from "./Model"

export const HelmetScene = () => {
  return (
    <Canvas orthographic camera={{ zoom: 150, position: [0, 0, 10] }} >
      <Suspense fallback={null}>
        <Model />
        <Environment 
          preset='night'
        />
      </Suspense>
      <OrbitControls />
      <spotLight
        position={[-350, 600, 200]}
        intensity={3}
      />
    </Canvas>
  )
}