import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { KeyboardControls } from '@react-three/drei'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <KeyboardControls
      map={[
        { name: 'forward', keys: ['KeyW', 'ArrowUp'] },
        { name: 'backward', keys: ['KeyS', 'ArrowDown'] },
        { name: 'leftward', keys: ['KeyA', 'ArrowLeft'] },
        { name: 'rightward', keys: ['KeyD', 'ArrowRight'] },
        { name: 'grab', keys: ['Space'] },
      ]}
    >
      <App />
    </KeyboardControls>
  </React.StrictMode>,
)
