import { useState } from 'react'
import { Canvas } from '@react-three/fiber';
import { Viewport3DTest } from './Viewport3DTest';
import './App.css'

function App() {

  return (
    <>
      <div className="bg-gradient-to-r from-pink-500 to-yellow-500 text-white p-6 rounded-xl shadow-lg">
        <h1 className="text-4xl font-bold text-blue-600">Unikathek Explorer</h1>
      </div>
      <div className="w-screen h-screen">
        <Canvas>
          <ambientLight />
          <Viewport3DTest />
        </Canvas>
      </div>
    </>
  )
}

export default App
