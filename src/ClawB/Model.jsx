/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/claw.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        name="thinRod"
        castShadow
        receiveShadow
        geometry={nodes.thinRod.geometry}
        material={nodes.thinRod.material}
        position={[0, 0.577, 0]}
      />
      <mesh
        name="bottom"
        castShadow
        receiveShadow
        geometry={nodes.bottom.geometry}
        material={nodes.bottom.material}
        position={[0, 0.016, 0]}
      />
      <mesh
        name="socket"
        castShadow
        receiveShadow
        geometry={nodes.socket.geometry}
        material={nodes.socket.material}
        position={[0, 1.912, 0]}
      />
      <mesh
        name="thickRod"
        castShadow
        receiveShadow
        geometry={nodes.thickRod.geometry}
        material={nodes.thickRod.material}
        position={[0, 2.422, 0]}
      />
      <mesh
        name="linkA"
        castShadow
        receiveShadow
        geometry={nodes.linkA.geometry}
        material={nodes.linkA.material}
        position={[1.016, 1.917, 0]}
        rotation={[0, 0, 0.284]}
      />
      <mesh
        name="linkB"
        castShadow
        receiveShadow
        geometry={nodes.linkB.geometry}
        material={nodes.linkB.material}
        position={[-0.508, 1.917, -0.88]}
        rotation={[Math.PI, Math.PI / 3, -2.858]}
      />
      <mesh
        name="linkC"
        castShadow
        receiveShadow
        geometry={nodes.linkC.geometry}
        material={nodes.linkC.material}
        position={[-0.508, 1.917, 0.88]}
        rotation={[Math.PI, -Math.PI / 3, -2.858]}
      />
      <mesh
        name="clawA"
        castShadow
        receiveShadow
        geometry={nodes.clawA.geometry}
        material={nodes.clawA.material}
        position={[0.475, -0.231, 0]}
        rotation={[0, 0, 2.034]}
      />
      <mesh
        name="clawB"
        castShadow
        receiveShadow
        geometry={nodes.clawB.geometry}
        material={nodes.clawB.material}
        position={[-0.237, -0.231, -0.411]}
        rotation={[-Math.PI, Math.PI / 3, -1.108]}
      />
      <mesh
        name="clawC"
        castShadow
        receiveShadow
        geometry={nodes.clawC.geometry}
        material={nodes.clawC.material}
        position={[-0.237, -0.231, 0.411]}
        rotation={[-Math.PI, -Math.PI / 3, -1.108]}
      />
    </group>
  )
}

useGLTF.preload('/claw.glb')
