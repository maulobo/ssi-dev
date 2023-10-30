"use client";
import { Canvas } from "@react-three/fiber";
import React from "react";
import { Environment } from "@react-three/drei";
import { Model } from "./model";

const Scene = () => {
  return (
    <Canvas
      shadows
      camera={{
        fov: 100,
        position: [2, 2, 5],
      }}
    >
      <Model />
      <Environment preset="apartment" />
      <ambientLight intensity={1} color={"#222"} />
      <pointLight position={[0, 0, 15]} color={"#555"} />
    </Canvas>
  );
};

export default Scene;
