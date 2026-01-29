"use client";

import React, { Suspense, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import {
  useGLTF,
  OrbitControls,
  PerspectiveCamera,
  Environment,
  useProgress,
} from "@react-three/drei";

interface ModelProps {
  scale?: number;
  position?: [number, number, number];
  onLoad?: () => void;
}

function Model({ scale = 50, position = [0, 0, 0], onLoad }: ModelProps) {
  const { scene } = useGLTF("/scene.gltf");
  const { progress } = useProgress();

  useEffect(() => {
    if (progress === 100 && onLoad) {
      onLoad();
    }
  }, [progress, onLoad]);

  return <primitive object={scene} scale={scale} position={position} />;
}

interface SceneViewProps {
  modelScale?: number;
  modelPosition?: [number, number, number];
  cameraPosition?: [number, number, number];
  enableAutoRotate?: boolean;
  enableZoom?: boolean;
  containerClassName?: string;
  onLoadComplete?: () => void;
}

export default function SceneView({
  modelScale = 10,
  modelPosition = [0, 0, 0],
  cameraPosition = [0, 0, 3],
  enableAutoRotate = true,
  enableZoom = false,
  containerClassName = "h-[500px] w-full bg-gradient-to-br from-slate-900 to-slate-700",
  onLoadComplete,
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
          <Model
            scale={modelScale}
            position={modelPosition}
            onLoad={onLoadComplete}
          />
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
