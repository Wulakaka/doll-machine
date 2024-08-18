import {CuboidCollider, RigidBody} from "@react-three/rapier";

export default function Walls() {
  return (
    <RigidBody type={"fixed"}>
      <CuboidCollider args={[0.1, 0.5, 0.5]} position={[0.6,1.3,0]} />
      <CuboidCollider args={[0.1, 0.5, 0.5]} position={[-0.6,1.3,0]} />
      <CuboidCollider args={[0.1, 0.5, 0.5]} position={[0,1.3,0.6]} rotation={[0, Math.PI / 2, 0]} />
      <CuboidCollider args={[0.1, 0.5, 0.5]} position={[0,1.3,-0.6]} rotation={[0, Math.PI / 2, 0]} />
    </RigidBody>
  );
}
