import { RigidBody } from '@react-three/rapier'
import { useGLTF } from '@react-three/drei'
import { useEffect, useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export default function Claw() {
  const { nodes, materials } = useGLTF('/model.glb')

  const clawA = useRef()
  const clawB = useRef()
  const clawC = useRef()
  const clawBar = useRef()

  const [pressUp, setPressUp] = useState(false)
  const [pressDown, setPressDown] = useState(false)
  const [pressLeft, setPressLeft] = useState(false)
  const [pressRight, setPressRight] = useState(false)

  useEffect(() => {
    const listener = (event) => {
      if (event.key === 'ArrowLeft') {
        setPressLeft(true)
      } else if (event.key === 'ArrowRight') {
        setPressRight(true)
      } else if (event.key === 'ArrowUp') {
        setPressUp(true)
      } else if (event.key === 'ArrowDown') {
        setPressDown(true)
      }
    }

    const keyUpListener = (event) => {
      if (event.key === 'ArrowLeft') {
        setPressLeft(false)
      } else if (event.key === 'ArrowRight') {
        setPressRight(false)
      } else if (event.key === 'ArrowUp') {
        setPressUp(false)
      } else if (event.key === 'ArrowDown') {
        setPressDown(false)
      }
    }

    window.addEventListener('keydown', listener)
    window.addEventListener('keyup', keyUpListener)

    return () => {
      window.removeEventListener('keydown', listener)
      window.removeEventListener('keyup', keyUpListener)
    }
  }, [])

  useFrame((state, delta) => {
    const time = state.clock.getElapsedTime()
    const rotationZ = time * 0.5
    const rotationA = new THREE.Quaternion()
    // [0, 0, -0.611]
    rotationA.setFromEuler(new THREE.Euler(0, 0, -0.611 + rotationZ))
    clawA.current?.setNextKinematicRotation(rotationA)

    const rotationB = new THREE.Quaternion()
    // Math.PI, Math.PI / 3, 2.531
    rotationB.setFromEuler(
      new THREE.Euler(Math.PI, Math.PI / 3, 2.531 + rotationZ),
    )
    clawB.current?.setNextKinematicRotation(rotationB)

    const rotationC = new THREE.Quaternion()
    // Math.PI, -Math.PI / 3, 2.531
    rotationC.setFromEuler(
      new THREE.Euler(Math.PI, -Math.PI / 3, 2.531 + rotationZ),
    )
    clawC.current?.setNextKinematicRotation(rotationC)

    const claw = [clawA, clawB, clawC, clawBar]
    claw.forEach((child) => {
      const currentTranslation = child.current.translation()
      let deltaX = 0
      let deltaY = 0
      const speed = 0.2
      if (pressLeft) {
        deltaX -= speed
      }

      if (pressRight) {
        deltaX += speed
      }

      if (pressUp) {
        deltaY -= speed
      }

      if (pressDown) {
        deltaY += speed
      }

      child.current.setNextKinematicTranslation({
        x: currentTranslation.x + deltaX * delta,
        y: currentTranslation.y,
        z: currentTranslation.z + deltaY * delta,
      })
    })
  })

  return (
    <group position-y={-0.4}>
      <RigidBody
        type="kinematicPosition"
        ref={clawA}
        position={[0, 1.555, 0]}
        colliders="trimesh"
      >
        <mesh
          name="clawA"
          castShadow
          receiveShadow
          geometry={nodes.clawA.geometry}
          material={materials.arm}
        />
      </RigidBody>
      <RigidBody
        type="kinematicPosition"
        ref={clawB}
        position={[0, 1.555, 0]}
        colliders="trimesh"
      >
        <mesh
          name="clawB"
          castShadow
          receiveShadow
          geometry={nodes.clawB.geometry}
          material={materials.arm}
        />
      </RigidBody>
      <RigidBody
        type="kinematicPosition"
        ref={clawC}
        position={[0, 1.555, 0]}
        colliders="trimesh"
      >
        <mesh
          name="clawC"
          castShadow
          receiveShadow
          geometry={nodes.clawC.geometry}
          material={materials.arm}
        />
      </RigidBody>
      <RigidBody type="kinematicPosition" ref={clawBar} position={[0, 1.73, 0]}>
        <mesh
          name="Cube007"
          castShadow
          receiveShadow
          geometry={nodes.Cube007.geometry}
          material={materials.arm}
        />
      </RigidBody>
    </group>
  )
}
