import { Canvas } from '@react-three/fiber'
import Experience from './Experience.jsx'

function App() {
  return (
    <Canvas
      shadows
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [0, 4, 4],
      }}
    >
      <Experience />
    </Canvas>
  )
}

export default App
