import { Perf } from 'r3f-perf'
import {
  OrbitControls,
  CameraControls,
  useHelper,
  Helper,
} from '@react-three/drei'
import { Machine } from './Machine.jsx'
import { useEffect, useRef } from 'react'
import { DirectionalLightHelper, CameraHelper } from 'three'
import { useThree } from '@react-three/fiber'

export default function Experience() {
  const directionalLight = useRef()

  const { scene } = useThree()

  // DirectionalLightHelper
  // useHelper(directionalLight, DirectionalLightHelper, 1, 'red')

  // useEffect(() => {
  //   if (directionalLight.current) {
  //     const helper = new CameraHelper(directionalLight.current.shadow.camera)
  //     scene.add(helper)
  //   }
  // }, [directionalLight])

  return (
    <>
      <Perf position="top-left" />

      <OrbitControls makeDefault={true}></OrbitControls>

      <ambientLight intensity={0.5} color={'white'}></ambientLight>

      <directionalLight
        ref={directionalLight}
        castShadow
        position={[-1, 3, 2]}
        intensity={4.5}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-far={5}
        shadow-camera-left={-1}
        shadow-camera-right={1}
        shadow-camera-top={1.5}
        shadow-camera-bottom={-0.5}
      />

      <group>
        <Machine />
      </group>
    </>
  )
}
