import { useMemo } from 'react'
import { InstancedRigidBodies } from '@react-three/rapier'
import * as THREE from 'three'

export default function Dolls() {
  const cubesCount = 100
  const instances = useMemo(() => {
    const instances = []
    for (let i = 0; i < cubesCount; i++) {
      const scale = (Math.random() * 0.5 + 0.5) * 0.007
      instances.push({
        key: `instance_${i}`,
        position: [Math.random() - 0.5, 1 + i * 0.02, Math.random() - 0.5],
        rotation: [Math.random(), Math.random(), Math.random()],
        scale: [scale, scale, scale],
      })
    }

    return instances
  }, [])

  const heartShape = useMemo(() => {
    const x = 0,
      y = 0

    const heartShape = new THREE.Shape()

    heartShape.moveTo(x + 5, y + 5)
    heartShape.bezierCurveTo(x + 5, y + 5, x + 4, y, x, y)
    heartShape.bezierCurveTo(x - 6, y, x - 6, y + 7, x - 6, y + 7)
    heartShape.bezierCurveTo(x - 6, y + 11, x - 3, y + 15.4, x + 5, y + 19)
    heartShape.bezierCurveTo(x + 12, y + 15.4, x + 16, y + 11, x + 16, y + 7)
    heartShape.bezierCurveTo(x + 16, y + 7, x + 16, y, x + 10, y)
    heartShape.bezierCurveTo(x + 7, y, x + 5, y + 5, x + 5, y + 5)

    return heartShape
  }, [])

  const extrudeSettings = {
    depth: 3,
    bevelEnabled: true,
    bevelSegments: 2,
    steps: 2,
    bevelSize: 3,
    bevelThickness: 3,
  }

  return (
    <InstancedRigidBodies
      instances={instances}
      colliders="cuboid"
      gravityScale={0.5}
    >
      <instancedMesh args={[null, null, cubesCount]} castShadow receiveShadow>
        <extrudeGeometry args={[heartShape, extrudeSettings]} />
        <meshStandardMaterial color="tomato" />
      </instancedMesh>
    </InstancedRigidBodies>
  )
}
