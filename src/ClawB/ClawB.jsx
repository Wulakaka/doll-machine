/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useEffect, useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'
import {
  RigidBody,
  usePrismaticJoint,
  useRevoluteJoint,
} from '@react-three/rapier'
import { useFrame } from '@react-three/fiber'

useGLTF.setDecoderPath('./draco/')

const material = new THREE.MeshStandardMaterial({ color: 'hotpink' })

export default function ClawB(props) {
  const { nodes } = useGLTF('./blender/claw.glb')

  const scale = 1
  const position = [0, 1.3, 0]
  const friction = 0

  const socket = useRef()
  const thickRod = useRef()
  const linkA = useRef()
  const linkB = useRef()
  const linkC = useRef()
  const clawA = useRef()
  const clawB = useRef()
  const clawC = useRef()

  usePrismaticJoint(thickRod, socket, [
    // Position of the joint in bodyA's local space
    [0, 0, 0],
    // Position of the joint in bodyB's local space
    [0, 0, 0],
    // Axis of the joint, expressed in the local-space of
    // the rigid-bodies it is attached to. Cannot be [0,0,0].
    [0, 1, 0],
  ])

  useRevoluteJoint(linkA, socket, [
    [1.0164, 1.9145, 0],
    [1.0164, 1.9145, 0],
    [0, 0, 1],
  ])

  useRevoluteJoint(linkA, clawA, [
    [1.4236, 0.51914, 0],
    [1.4236, 0.51914, 0],
    [0, 0, 1],
  ])
  useRevoluteJoint(clawA, socket, [
    [0.51221, -0.20807, 0],
    [0.51221, -0.20807, 0],
    [0, 0, 1],
  ])

  return (
    <group {...props} dispose={null}>
      <RigidBody
        ref={thickRod}
        position={position}
        scale={scale}
        colliders={'trimesh'}
        type={'fixed'}
        friction={friction}
      >
        <mesh
          name="thickRod"
          castShadow
          receiveShadow
          geometry={nodes.thickRod.geometry}
          material={material}
          position={[0, 2.422, 0]}
        />
        <mesh
          name="thinRod"
          castShadow
          receiveShadow
          geometry={nodes.thinRod.geometry}
          material={material}
          position={[0, 0.577, 0]}
        />
      </RigidBody>
      <RigidBody
        ref={socket}
        position={position}
        scale={scale}
        colliders={'trimesh'}
        friction={friction}
        canSleep={true}
        type={'fixed'}
      >
        <mesh
          name="bottom"
          castShadow
          receiveShadow
          geometry={nodes.bottom.geometry}
          material={material}
          position={[0, 0.016, 0]}
        />
        <mesh
          name="socket"
          castShadow
          receiveShadow
          geometry={nodes.socket.geometry}
          material={material}
          position={[0, 1.912, 0]}
        />
      </RigidBody>
      <RigidBody
        ref={linkA}
        position={position}
        scale={scale}
        colliders={'trimesh'}
        friction={friction}
        canSleep={true}
      >
        <mesh
          name="linkA"
          castShadow
          receiveShadow
          geometry={nodes.linkA.geometry}
          material={material}
          position={[1.016, 1.917, 0]}
          rotation={[0, 0, 0.284]}
        />
      </RigidBody>
      {/*<RigidBody
        ref={linkB}
        position={position}
        scale={scale}
        colliders={'trimesh'}
        friction={friction}
        canSleep={true}
      >
        <mesh
          name="linkB"
          castShadow
          receiveShadow
          geometry={nodes.linkB.geometry}
          material={material}
          position={[-0.508, 1.917, -0.88]}
          rotation={[Math.PI, Math.PI / 3, -2.858]}
        />
      </RigidBody>
      <RigidBody
        ref={linkC}
        position={position}
        scale={scale}
        colliders={'trimesh'}
        friction={friction}
        canSleep={true}
      >
        <mesh
          name="linkC"
          castShadow
          receiveShadow
          geometry={nodes.linkC.geometry}
          material={material}
          position={[-0.508, 1.917, 0.88]}
          rotation={[Math.PI, -Math.PI / 3, -2.858]}
        />
      </RigidBody>*/}
      <RigidBody
        ref={clawA}
        position={position}
        scale={scale}
        colliders={'trimesh'}
        friction={friction}
        canSleep={true}
      >
        <mesh
          name="clawA"
          castShadow
          receiveShadow
          geometry={nodes.clawA.geometry}
          material={material}
          position={[0.475, -0.231, 0]}
          rotation={[0, 0, 2.034]}
        />
      </RigidBody>
      {/*<RigidBody
        ref={clawB}
        position={position}
        scale={scale}
        colliders={'trimesh'}
        friction={friction}
        canSleep={true}
      >
        <mesh
          name="clawB"
          castShadow
          receiveShadow
          geometry={nodes.clawB.geometry}
          material={material}
          position={[-0.237, -0.231, -0.411]}
          rotation={[-Math.PI, Math.PI / 3, -1.108]}
        />
      </RigidBody>
      <RigidBody
        ref={clawC}
        position={position}
        scale={scale}
        colliders={'trimesh'}
        friction={friction}
        canSleep={true}
      >
        <mesh
          name="clawC"
          castShadow
          receiveShadow
          geometry={nodes.clawC.geometry}
          material={material}
          position={[-0.237, -0.231, 0.411]}
          rotation={[-Math.PI, -Math.PI / 3, -1.108]}
        />
      </RigidBody>*/}
    </group>
  )
}

useGLTF.preload('./blender/claw.glb')
