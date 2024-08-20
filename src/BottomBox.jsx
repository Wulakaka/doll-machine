import { RigidBody } from '@react-three/rapier'
import { useGLTF } from '@react-three/drei'

export default function BottomBox() {
  const { nodes, materials } = useGLTF('/model.glb')

  return (
    <RigidBody type={'fixed'} colliders={'trimesh'}>
      <mesh
        name="floor"
        castShadow
        receiveShadow
        geometry={nodes.floor.geometry}
        position={[0, 0.843, 0]}
      >
        <meshStandardMaterial color="pink" roughness={0} />
      </mesh>
      <mesh
        name="glassA"
        castShadow
        receiveShadow
        geometry={nodes.glassA.geometry}
        position={[-0.137, 0.967, 0.319]}
      >
        <meshStandardMaterial
          color="lightpink"
          roughness={0}
          transparent
          metalness={0}
        />
      </mesh>
      <mesh
        name="glassB"
        castShadow
        receiveShadow
        geometry={nodes.glassB.geometry}
        material={materials.glass}
        position={[-0.315, 0.967, 0.129]}
        rotation={[0, -1.571, 0]}
      >
        <meshStandardMaterial
          color="lightpink"
          roughness={0}
          transparent
          metalness={0}
        />
      </mesh>
    </RigidBody>
  )
}
