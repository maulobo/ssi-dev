import React, { useRef } from "react";
import { OrbitControls, useGLTF } from "@react-three/drei";

export function Model(props) {
  const { nodes, materials } = useGLTF("models/INTERIOR.glb");
  const modelPosition = [0, -2, 0];
  return (
    <group position={modelPosition} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={nodes.Cube.material}
        position={[0, 0.133, -0.021]}
        scale={[6, 0.059, 1.648]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube001.geometry}
        material={nodes.Cube001.material}
        position={[0, 1.39, -1.583]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[6, 0.059, 1.201]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube003.geometry}
        material={nodes.Cube003.material}
        position={[1.257, 1.39, 0.05]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={[1.564, 0.059, 1.201]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube004.geometry}
        material={nodes.Cube004.material}
        position={[0.24, 0.772, -1.089]}
        scale={0.309}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube005.geometry}
        material={nodes.Cube005.material}
        position={[2.454, 2.203, -1.089]}
        scale={[1.082, 0.375, 0.441]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube006.geometry}
        material={nodes.Cube006.material}
        position={[0.24, 1.122, -1.089]}
        scale={[0.249, 0.064, 0.249]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube007.geometry}
        material={nodes.Cube007.material}
        position={[-5.956, 1.39, 0.05]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={[1.564, 0.059, 1.201]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube008.geometry}
        material={nodes.Cube008.material}
        position={[-4.862, 1.603, -1.257]}
        scale={[0.417, 0.017, 0.309]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube009.geometry}
        material={nodes.Cube009.material}
        position={[-4.195, 1.836, -1.257]}
        scale={[0.417, 0.017, 0.309]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube010.geometry}
        material={nodes.Cube010.material}
        position={[-4.871, 2.1, -1.257]}
        scale={[0.417, 0.017, 0.309]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube011.geometry}
        material={nodes.Cube011.material}
        position={[2.835, 0.658, -1.089]}
        scale={[0.693, 0.379, 0.441]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube012.geometry}
        material={nodes.Cube012.material}
        position={[2.835, 0.236, -1.089]}
        scale={[0.651, 0.064, 0.414]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube013.geometry}
        material={nodes.Cube013.material}
        position={[2.835, 1.037, -1.089]}
        scale={[0.702, 0.015, 0.457]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube014.geometry}
        material={nodes.Cube014.material}
        position={[4.734, 1.399, -1.489]}
        rotation={[0, 0, -Math.PI]}
        scale={[-1.113, -1.128, -0.028]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube015.geometry}
        material={nodes.Cube015.material}
        position={[5.954, 1.39, 0.05]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={[1.564, 0.059, 1.201]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube016.geometry}
        material={nodes.Cube016.material}
        position={[4.734, 1.002, -1.254]}
        rotation={[0, 0, -Math.PI]}
        scale={[-0.794, -0.038, -0.193]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube017.geometry}
        material={nodes.Cube017.material}
        position={[4.734, 0.77, -1.294]}
        rotation={[0, 0, -Math.PI]}
        scale={[-0.826, -0.023, -0.19]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube018.geometry}
        material={nodes.Cube018.material}
        position={[4.734, 1.646, -1.321]}
        rotation={[0, 0, -Math.PI]}
        scale={[-0.734, -0.419, -0.017]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube019.geometry}
        material={nodes.Cube019.material}
        position={[2.405, 1.399, -1.489]}
        rotation={[0, 0, -Math.PI]}
        scale={[-1.123, -0.49, -0.027]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube026.geometry}
        material={nodes.Cube026.material}
        position={[-5.763, 0.577, 1.172]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={[-0.162, -0.145, -0.125]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube027.geometry}
        material={nodes.Cube027.material}
        position={[-5.763, 0.716, 1.172]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={[-0.187, -0.166, -0.011]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube020.geometry}
        material={nodes.Cube020.material}
        position={[0, 0.198, 0]}
        scale={[6, 0.013, 1.648]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Bed_Wood_Plane014.geometry}
        material={nodes.Bed_Wood_Plane014.material}
        position={[-4.918, 0.41, 0.039]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={1.425}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder001.geometry}
        material={nodes.Cylinder001.material}
        position={[0.24, 1.248, -1.295]}
        scale={[0.021, 0.095, 0.021]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder002.geometry}
        material={nodes.Cylinder002.material}
        position={[0.24, 1.367, -1.225]}
        rotation={[Math.PI / 2, 0, Math.PI]}
        scale={[0.005, 0.053, 0.005]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube021.geometry}
        material={nodes.Cube021.material}
        position={[0.24, 1.323, -1.188]}
        rotation={[-0.244, 0, 0]}
        scale={[0.014, 0.003, 0.083]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Toilet_Button_Cube012.geometry}
        material={nodes.Toilet_Button_Cube012.material}
        position={[1.002, 0.323, 0]}
        rotation={[Math.PI / 2, 0, -3.142]}
        scale={1.201}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Toilet_Seat_WC_Board_Cube003.geometry}
        material={nodes.Toilet_Seat_WC_Board_Cube003.material}
        position={[1.002, 0.323, 0]}
        rotation={[Math.PI / 2, 0, -3.142]}
        scale={1.201}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Toilet_WC_Cube002.geometry}
        material={nodes.Toilet_WC_Cube002.material}
        position={[1.002, 0.323, 0]}
        rotation={[Math.PI / 2, 0, -3.142]}
        scale={1.201}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["DB_Apps&Tech_04_13"].geometry}
        material={nodes["DB_Apps&Tech_04_13"].material}
        position={[1.721, 0.2, -0.971]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[1.002, 0.94, 0.94]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube022.geometry}
        material={nodes.Cube022.material}
        position={[-1.575, 0.237, -0.872]}
        scale={[0.65, 0.057, 0.804]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube023.geometry}
        material={nodes.Cube023.material}
        position={[-1.562, 1.399, -1.52]}
        rotation={[0, 0, -Math.PI]}
        scale={[-0.638, -1.193, -0.033]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube024.geometry}
        material={nodes.Cube024.material}
        position={[-0.914, 1.399, -1.489]}
        rotation={[0, 0, -Math.PI]}
        scale={[-0.012, -1.193, -0.033]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder003.geometry}
        material={nodes.Cylinder003.material}
        position={[-1.641, 2.373, -1.45]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.021, 0.186, 0.021]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder004.geometry}
        material={nodes.Cylinder004.material}
        position={[-1.452, 1.248, -1.509]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.021, 0.095, 0.021]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder005.geometry}
        material={nodes.Cylinder005.material}
        position={[-1.683, 1.236, -1.509]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.021, 0.095, 0.021]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Semi-Sheer_Rod_Pocket_Curtains_-_Left"].geometry}
        material={nodes["Semi-Sheer_Rod_Pocket_Curtains_-_Left"].material}
        position={[-1.915, 1.115, -0.276]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.396, 0.905, 0.836]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Steel_Curtain_Rod001.geometry}
        material={nodes.Steel_Curtain_Rod001.material}
        position={[-0.231, 1.155, -1.457]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[0.006, 0.031, 0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane001.geometry}
        material={nodes.Plane001.material}
        position={[-0.503, 1.218, -1.457]}
        scale={[0.189, 0.377, 0.321]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.diining_furnitures_29__vray.geometry}
        material={nodes.diining_furnitures_29__vray.material}
        position={[5.307, 0.196, 0.329]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube025.geometry}
        material={nodes.Cube025.material}
        position={[3.193, 1.829, -0.628]}
        rotation={[0, 0, -Math.PI]}
        scale={[-0.369, -0.011, -0.008]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube028.geometry}
        material={nodes.Cube028.material}
        position={[2.454, 1.829, -0.628]}
        rotation={[0, 0, -Math.PI]}
        scale={[-0.362, -0.011, -0.008]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube029.geometry}
        material={nodes.Cube029.material}
        position={[1.715, 1.829, -0.628]}
        rotation={[0, 0, -Math.PI]}
        scale={[-0.369, -0.011, -0.008]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube030.geometry}
        material={nodes.Cube030.material}
        position={[0.24, 0.963, -1.069]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[0.286, 0.094, 0.286]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube031.geometry}
        material={nodes.Cube031.material}
        position={[0.24, 0.769, -1.069]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[0.286, 0.094, 0.286]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube032.geometry}
        material={nodes.Cube032.material}
        position={[0.24, 0.575, -1.069]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[0.286, 0.094, 0.286]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder.geometry}
        material={nodes.Cylinder.material}
        position={[-1.869, 1.934, -0.278]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[-0.009, -0.318, -0.009]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder006.geometry}
        material={nodes.Cylinder006.material}
        position={[0.24, 0.967, -0.779]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.013, 0.01, 0.013]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder007.geometry}
        material={nodes.Cylinder007.material}
        position={[0.24, 0.765, -0.779]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.013, 0.01, 0.013]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder008.geometry}
        material={nodes.Cylinder008.material}
        position={[0.24, 0.569, -0.779]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.013, 0.01, 0.013]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube033.geometry}
        material={nodes.Cube033.material}
        position={[-5.744, 0.632, 1.172]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={[-0.141, -0.126, -0.053]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube034.geometry}
        material={nodes.Cube034.material}
        position={[-5.744, 0.522, 1.172]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={[-0.141, -0.126, -0.053]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder009.geometry}
        material={nodes.Cylinder009.material}
        position={[-5.617, 0.634, 1.178]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={[0.012, 0.009, 0.012]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder010.geometry}
        material={nodes.Cylinder010.material}
        position={[-5.617, 0.523, 1.178]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={[0.012, 0.009, 0.012]}
      />
      <group
        position={[-2.721, 0.209, -1.255]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.01, 0.01, 0.014]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Aset_props__S_wjkjegiaw_00_lod0.geometry}
          material={nodes.Aset_props__S_wjkjegiaw_00_lod0.material}
          position={[-13.701, 23.022, 0]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder012.geometry}
        material={nodes.Cylinder012.material}
        position={[5.964, 1.041, -0.128]}
        rotation={[Math.PI / 2, 0, 1.024]}
        scale={0.134}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["OBJ+MTL"].geometry}
        material={nodes["OBJ+MTL"].material}
        position={[3.265, 1.052, -1.057]}
        rotation={[Math.PI / 2, 0, -1.308]}
        scale={0.002}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube035.geometry}
        material={nodes.Cube035.material}
        position={[4.734, 1.002, -1.295]}
        rotation={[0, 0, -Math.PI]}
        scale={[-0.818, -0.056, -0.23]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.nespresso001.geometry}
        material={nodes.nespresso001.material}
        position={[2.944, 1.369, -0.981]}
        scale={0.916}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.krups_logo.geometry}
        material={nodes.krups_logo.material}
        position={[2.944, 1.113, -0.74]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.916}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.espresso001.geometry}
        material={nodes.espresso001.material}
        position={[2.944, 1.37, -1.002]}
        scale={0.916}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lungo001.geometry}
        material={nodes.lungo001.material}
        position={[2.944, 1.37, -1.027]}
        scale={0.916}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.hotwater001.geometry}
        material={nodes.hotwater001.material}
        position={[2.944, 1.37, -1.052]}
        scale={0.916}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.nespresso_order001.geometry}
        material={nodes.nespresso_order001.material}
        position={[2.944, 1.37, -1.077]}
        scale={0.916}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.buttons.geometry}
        material={nodes.buttons.material}
        position={[2.944, 1.368, -1.036]}
        scale={0.916}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.button_panel.geometry}
        material={nodes.button_panel.material}
        position={[2.944, 1.151, -1.004]}
        scale={0.916}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.cup_holder.geometry}
        material={nodes.cup_holder.material}
        position={[2.944, 1.093, -0.822]}
        scale={0.916}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.cup_holder_grid.geometry}
        material={nodes.cup_holder_grid.material}
        position={[2.944, 1.125, -0.812]}
        scale={0.916}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.ring.geometry}
        material={nodes.ring.material}
        position={[2.944, 1.125, -0.819]}
        scale={0.916}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.water_tank.geometry}
        material={nodes.water_tank.material}
        position={[2.944, 1.099, -1.224]}
        scale={0.916}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.stand_watertank.geometry}
        material={nodes.stand_watertank.material}
        position={[2.944, 1.073, -1.224]}
        scale={0.916}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.water_tank_cap.geometry}
        material={nodes.water_tank_cap.material}
        position={[2.944, 1.349, -1.224]}
        scale={0.916}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.stand.geometry}
        material={nodes.stand.material}
        position={[2.944, 1.184, -0.996]}
        scale={0.916}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lever.geometry}
        material={nodes.lever.material}
        position={[2.944, 1.363, -0.872]}
        scale={0.916}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.output.geometry}
        material={nodes.output.material}
        position={[2.944, 1.188, -1.131]}
        scale={0.916}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.body.geometry}
        material={nodes.body.material}
        position={[2.944, 1.188, -1.004]}
        scale={0.916}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.capsule_holder.geometry}
        material={nodes.capsule_holder.material}
        position={[2.944, 1.165, -0.912]}
        scale={0.916}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder013.geometry}
        material={nodes.Cylinder013.material}
        position={[4.712, 1, -1.069]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.013, 0.01, 0.013]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube002.geometry}
        material={nodes.Cube002.material}
        position={[-2.28, 1.39, 0.05]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={[1.564, 0.059, 1.201]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes._e1f4_Var1_LOD0.geometry}
        material={nodes._e1f4_Var1_LOD0.material}
        position={[-2.862, 0.474, -1.052]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.007}
      />
      <OrbitControls />
    </group>
  );
}

useGLTF.preload("/INTERIOR.glb");
