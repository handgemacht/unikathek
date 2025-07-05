import React from 'react'
import { useFrame } from '@react-three/fiber'

export function Viewport3DTest() {
  const myMesh = React.useRef()

  useFrame(({ clock }) => {
    myMesh.current.rotation.x = clock.elapsedTime
    myMesh.current.rotation.y = Math.sin(clock.elapsedTime)
  })

  return (
      <mesh ref={myMesh}>
       <boxGeometry />
       <meshStandardMaterial color="orange" />
      </mesh>
  );
}