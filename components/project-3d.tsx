'use client';

import { Canvas } from '@react-three/fiber';
import { Float, Box } from '@react-three/drei';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';

interface Project3DProps {
  color: string;
}

function ProjectModel({ color }: Project3DProps) {
  const meshRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.6) * 0.1;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.1} floatIntensity={0.2}>
      <group ref={meshRef}>
        {/* Main Container */}
        <Box args={[3, 2, 0.2]} position={[0, 0, 0]}>
          <meshStandardMaterial
            color={color}
            transparent
            opacity={0.8}
            wireframe
          />
        </Box>
        
        {/* Screen Content Simulation */}
        <Box args={[2.5, 1.5, 0.1]} position={[0, 0, 0.15]}>
          <meshStandardMaterial
            color={color}
            transparent
            opacity={0.3}
          />
        </Box>
        
        {/* Floating Elements */}
        <Float speed={1} rotationIntensity={0.5} floatIntensity={1}>
          <Box args={[0.3, 0.3, 0.3]} position={[-2, 1.5, 1]}>
            <meshStandardMaterial
              color={color}
              transparent
              opacity={0.6}
              wireframe
            />
          </Box>
        </Float>
        
        <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
          <Box args={[0.2, 0.2, 0.2]} position={[2.5, -1, 1.5]}>
            <meshStandardMaterial
              color={color}
              transparent
              opacity={0.7}
              wireframe
            />
          </Box>
        </Float>
      </group>
    </Float>
  );
}

export default function Project3D({ color }: Project3DProps) {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[5, 5, 5]} intensity={1} color={color} />
      <pointLight position={[-5, -5, 5]} intensity={0.5} color="#ffffff" />
      <ProjectModel color={color} />
    </Canvas>
  );
}