'use client';

import { Canvas } from '@react-three/fiber';
import { Sphere, Wireframe } from '@react-three/drei';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';

function RotatingSphere() {
  const sphereRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (sphereRef.current) {
      sphereRef.current.rotation.x = state.clock.elapsedTime * 0.5;
      sphereRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <Sphere ref={sphereRef} args={[1, 16, 16]}>
      <Wireframe thickness={0.02} color="#00f5ff" />
    </Sphere>
  );
}

export default function NavigationSphere() {
  return (
    <Canvas camera={{ position: [0, 0, 3] }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[2, 2, 2]} intensity={1} color="#00f5ff" />
      <RotatingSphere />
    </Canvas>
  );
}