"use client";

import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  useGLTF,
  OrbitControls,
  PerspectiveCamera,
  Environment,
} from "@react-three/drei";

interface ModelProps {
  scale?: number;
  position?: [number, number, number];
}

function Model({ scale = 50, position = [0, 0, 0] }: ModelProps) {
  // Đường dẫn đến file GLTF trong thư mục public
  const { scene } = useGLTF("/scene.gltf");

  return <primitive object={scene} scale={scale} position={position} />;
}

interface SceneViewProps {
  modelScale?: number;
  modelPosition?: [number, number, number];
  cameraPosition?: [number, number, number];
  enableAutoRotate?: boolean;
  enableZoom?: boolean;
  containerClassName?: string;
}

export default function SceneView({
  modelScale = 10,
  modelPosition = [0, 0, 0],
  cameraPosition = [0, 0, 3],
  enableAutoRotate = true,
  enableZoom = false,
  containerClassName = "h-[500px] w-full bg-gradient-to-br from-slate-900 to-slate-700",
}: SceneViewProps) {
  return (
    <div className={containerClassName}>
      <Canvas dpr={[1, 2]}>
        <PerspectiveCamera makeDefault position={cameraPosition} fov={50} />

        <ambientLight intensity={0.8} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} />
        <directionalLight position={[-10, -10, -5]} intensity={0.5} />
        <pointLight position={[0, 5, 0]} intensity={1} />

        <Environment preset="city" />

        <Suspense fallback={null}>
          <Model scale={modelScale} position={modelPosition} />
        </Suspense>

        <OrbitControls
          autoRotate={enableAutoRotate}
          enableZoom={enableZoom}
          autoRotateSpeed={1}
          minDistance={1}
          maxDistance={10}
          enablePan={false}
        />
      </Canvas>
    </div>
  );
}

// useGLTF.preload("/scene.gltf");
