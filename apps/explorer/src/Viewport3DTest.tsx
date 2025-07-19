import { useRef, type MutableRefObject } from "react";
import { useFrame } from "@react-three/fiber";
import type { Mesh } from "three";
import type * as THREE from "three";

export function Viewport3DTest() {
  const myMesh = useRef<THREE.Mesh>(null!) as MutableRefObject<Mesh>;

  useFrame(({ clock }) => {
    myMesh.current.rotation.x = clock.elapsedTime;
    myMesh.current.rotation.y = Math.sin(clock.elapsedTime);
  });

  return (
    <mesh ref={myMesh}>
      <boxGeometry />
      <meshStandardMaterial color="orange" />
    </mesh>
  );
}
