import { useGLTF } from '@react-three/drei'
import { Physics, RigidBody } from '@react-three/rapier'
import Dolls from './Dolls.jsx'
import Walls from './Walls.jsx'
import Claw from './Claw.jsx'

/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

export function Machine(props) {
  const { nodes, materials } = useGLTF('/model.glb')

  return (
    <Physics debug={true} gravity={[0, -9.81, 0]}>
      <RigidBody>
        <mesh scale={[0.1, 0.1, 0.1]} position={[0, 2, 0]}>
          <boxGeometry />
          <meshBasicMaterial color="red" />
        </mesh>
      </RigidBody>
      <group {...props} dispose={null}>
        <RigidBody type={'fixed'} colliders={'trimesh'}>
          <mesh
            name="floor"
            castShadow
            receiveShadow
            geometry={nodes.floor.geometry}
            material={materials['Material.001']}
            position={[0, 0.843, 0]}
          />
          <mesh
            name="glassA"
            castShadow
            receiveShadow
            geometry={nodes.glassA.geometry}
            material={materials.glass}
            position={[-0.137, 0.967, 0.319]}
          />
          <mesh
            name="glassB"
            castShadow
            receiveShadow
            geometry={nodes.glassB.geometry}
            material={materials.glass}
            position={[-0.315, 0.967, 0.129]}
            rotation={[0, -1.571, 0]}
          />
        </RigidBody>
        <Claw />
      </group>

      <Walls />
      {/*<Dolls />*/}
    </Physics>
  )
}

useGLTF.preload('/model.glb')
