import {Perf} from "r3f-perf";
import {OrbitControls, useGLTF} from "@react-three/drei";
import {Model} from "./Model.jsx";

export default function Experience() {
  const model = useGLTF('./model.glb');
  return (
    <>
      <Perf position="top-left" />

      <OrbitControls makeDefault={true}></OrbitControls>

      <ambientLight intensity={0.5} color={'white'}></ambientLight>

      <directionalLight castShadow position={[1, 2, 3]} intensity={4.5}/>

      <Model />
    </>

  )
}
