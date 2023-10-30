import React, { useRef } from "react";
import { OrbitControls, useGLTF } from "@react-three/drei";

export function Model(props) {
  const { nodes, materials } = useGLTF("models/trailer.glb");
  return (
    <group {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_Cube001_1.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_Cube001_2.geometry}
          material={materials["Material.002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_Cube001_3.geometry}
          material={materials["Material.003"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane001.geometry}
        material={materials.None}
        rotation={[1.56, 0.002, 0]}
      />
      <OrbitControls />
    </group>
  );
}

useGLTF.preload("models/trailer.glb");
