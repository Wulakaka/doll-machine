import { RigidBody } from '@react-three/rapier'
import { useGLTF } from '@react-three/drei'
import { useEffect, useMemo, useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import gsap from 'gsap'

const progress = { y: 0, rotation: 0, positionReset: 0 }
const tl = gsap.timeline({
  onComplete: () => {
    progress.y = 0
    progress.rotation = 0
    progress.positionReset = 0
  },
  // onUpdate: () => {
  //   console.log('reset', progress.positionReset)
  // },
})
tl.to(progress, {
  y: -0.4,
})
tl.to(progress, {
  rotation: Math.PI / 8,
})
tl.to(progress, {
  y: 0,
})
tl.to(progress, {
  positionReset: 1,
  duration: 2,
  ease: 'none',
})
tl.to(progress, {
  rotation: 0,
})
tl.pause()

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

  const [catching, setCatching] = useState(false)
  const [positions, setPositions] = useState({
    clawA: { x: 0, y: 0, z: 0 },
    clawB: { x: 0, y: 0, z: 0 },
    clawC: { x: 0, y: 0, z: 0 },
    Cube007: { x: 0, y: 0, z: 0 },
  })

  useEffect(() => {
    const keyDownListener = (event) => {
      if (event.key === 'ArrowLeft') {
        setPressLeft(true)
      } else if (event.key === 'ArrowRight') {
        setPressRight(true)
      } else if (event.key === 'ArrowUp') {
        setPressUp(true)
      } else if (event.key === 'ArrowDown') {
        setPressDown(true)
      } else if (event.key === ' ') {
        tl.restart()
        setCatching(true)
        setPositions({
          clawA: clawA.current.translation(),
          clawB: clawB.current.translation(),
          clawC: clawC.current.translation(),
          Cube007: clawBar.current.translation(),
        })
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

    const tlCallback = () => {
      setCatching(false)
    }

    window.addEventListener('keydown', keyDownListener)
    window.addEventListener('keyup', keyUpListener)
    tl.add(tlCallback)

    return () => {
      window.removeEventListener('keydown', keyDownListener)
      window.removeEventListener('keyup', keyUpListener)
      tl.remove(tlCallback)
    }
  }, [])

  useFrame((state, delta) => {
    if (pressDown || pressUp || pressLeft || pressRight) {
      const claw = [clawA, clawB, clawC, clawBar]
      claw.forEach((child) => {
        const currentTranslation = child.current.translation()
        let deltaX = 0
        let deltaY = 0
        const speed = 0.5
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
    }

    if (catching) {
      const claw = [
        { ref: clawA, name: 'clawA' },
        { ref: clawB, name: 'clawB' },
        { ref: clawC, name: 'clawC' },
        { ref: clawBar, name: 'Cube007' },
      ]
      claw.forEach(({ ref, name }) => {
        const originalPosition = nodes[name].position

        const targetX = -0.3
        const x = THREE.MathUtils.lerp(
          positions[name].x,
          targetX,
          progress.positionReset,
        )

        const targetZ = 0.3
        const z = THREE.MathUtils.lerp(
          positions[name].z,
          targetZ,
          progress.positionReset,
        )

        ref.current.setNextKinematicTranslation({
          x: x,
          y: originalPosition.y + progress.y,
          z: z,
        })
      })

      const clawARotation = new THREE.Quaternion()
      clawARotation.setFromEuler(
        new THREE.Euler(0, 0, -0.611 + progress.rotation),
      )
      clawA.current?.setNextKinematicRotation(clawARotation)

      const clawBRotation = new THREE.Quaternion()
      clawBRotation.setFromEuler(
        new THREE.Euler(Math.PI, Math.PI / 3, 2.531 + progress.rotation),
      )
      clawB.current?.setNextKinematicRotation(clawBRotation)

      const clawCRotation = new THREE.Quaternion()
      clawCRotation.setFromEuler(
        new THREE.Euler(Math.PI, -Math.PI / 3, 2.531 + progress.rotation),
      )
      clawC.current?.setNextKinematicRotation(clawCRotation)
    }
  })

  return (
    <group>
      <RigidBody
        type="kinematicPosition"
        colliders="trimesh"
        restitution={0.2}
        friction={0}
        ref={clawA}
        position={[0, 1.555, 0]}
        rotation={[0, 0, -0.611]}
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
        colliders="trimesh"
        restitution={0.2}
        friction={0}
        ref={clawB}
        position={[0, 1.555, 0]}
        rotation={[Math.PI, Math.PI / 3, 2.531]}
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
        colliders="trimesh"
        restitution={0.2}
        friction={0}
        ref={clawC}
        position={[0, 1.555, 0]}
        rotation={[Math.PI, -Math.PI / 3, 2.531]}
      >
        <mesh
          name="clawC"
          castShadow
          receiveShadow
          geometry={nodes.clawC.geometry}
          material={materials.arm}
        />
      </RigidBody>
      <RigidBody
        type="kinematicPosition"
        restitution={0.2}
        friction={0}
        ref={clawBar}
        position={[0, 1.73, 0]}
      >
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
