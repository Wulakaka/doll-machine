import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { KeyboardControls } from '@react-three/drei'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <KeyboardControls
      map={[
        { name: 'forward', keys: ['KeyW', 'ArrowUp', 'GamepadButton12'] }, // GamepadButton12 is the D-pad up button
        { name: 'backward', keys: ['KeyS', 'ArrowDown', 'GamepadButton13'] }, // GamepadButton13 is the D-pad down button
        { name: 'leftward', keys: ['KeyA', 'ArrowLeft', 'GamepadButton14'] }, // GamepadButton14 is the D-pad left button
        { name: 'rightward', keys: ['KeyD', 'ArrowRight', 'GamepadButton15'] }, // GamepadButton15 is the D-pad right button
        { name: 'grab', keys: ['Space', 'GamepadButton0'] }, // GamepadButton0 is the A button
      ]}
    >
      <App />
    </KeyboardControls>
  </React.StrictMode>,
)
