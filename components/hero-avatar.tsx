"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float, Text } from "@react-three/drei";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Group, Mesh } from "three";

function Avatar() {
  const groupRef = useRef<Group>(null);
  const ringRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y =
        Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
    if (ringRef.current) {
      ringRef.current.rotation.z = state.clock.elapsedTime * 0.5;
    }
  });

  return (
    <group ref={groupRef}>
      <Float speed={2} rotationIntensity={0.1} floatIntensity={0.5}>
        {/* Main Avatar Sphere */}
        <mesh position={[0, 0, 0]}>
          <sphereGeometry args={[1.5, 32, 32]} />
          <meshStandardMaterial
            color="#00f5ff"
            transparent
            opacity={0.8}
            wireframe
          />
        </mesh>

        {/* Inner Core */}
        <mesh position={[0, 0, 0]}>
          <sphereGeometry args={[0.8, 16, 16]} />
          <meshStandardMaterial
            color="#8b5cf6"
            transparent
            opacity={0.6}
            wireframe
          />
        </mesh>

        {/* Rotating Ring */}
        <mesh ref={ringRef} position={[0, 0, 0]} rotation={[0, 0, 0]}>
          <torusGeometry args={[2, 0.1, 8, 32]} />
          <meshStandardMaterial
            color="#ec4899"
            transparent
            opacity={0.7}
            wireframe
          />
        </mesh>

        {/* Floating Code Symbols */}
        <Float speed={1} rotationIntensity={0.5} floatIntensity={1}>
          <Text
            position={[-3, 2, 1]}
            fontSize={0.5}
            color="#00f5ff"
            anchorX="center"
            anchorY="middle"
          >
            {"</>"}
          </Text>
        </Float>

        <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
          <Text
            position={[3, -1, 1]}
            fontSize={0.4}
            color="#8b5cf6"
            anchorX="center"
            anchorY="middle"
          >
            {"{}"}
          </Text>
        </Float>

        <Float speed={0.8} rotationIntensity={0.5} floatIntensity={1}>
          <Text
            position={[2, 3, -1]}
            fontSize={0.3}
            color="#ec4899"
            anchorX="center"
            anchorY="middle"
          >
            {"()"}
          </Text>
        </Float>
      </Float>

      {/* Orbital Elements */}
      <Float speed={3} rotationIntensity={1} floatIntensity={2}>
        <mesh position={[4, 0, 2]}>
          <boxGeometry args={[0.3, 0.3, 0.3]} />
          <meshStandardMaterial
            color="#00f5ff"
            transparent
            opacity={0.8}
            wireframe
          />
        </mesh>
      </Float>

      <Float speed={2.5} rotationIntensity={1} floatIntensity={2}>
        <mesh position={[-4, 1, -2]}>
          <octahedronGeometry args={[0.4]} />
          <meshStandardMaterial
            color="#8b5cf6"
            transparent
            opacity={0.8}
            wireframe
          />
        </mesh>
      </Float>
    </group>
  );
}

export default function HeroAvatar() {
  return (
    <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[5, 5, 5]} intensity={1} color="#00f5ff" />
      <pointLight position={[-5, -5, 5]} intensity={0.5} color="#8b5cf6" />
      <Avatar />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.5}
      />
    </Canvas>
  );
}
