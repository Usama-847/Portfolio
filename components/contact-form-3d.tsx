"use client";

import { Canvas } from "@react-three/fiber";
import { Float, Text } from "@react-three/drei";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Group } from "three";

function ContactVisualization() {
  const groupRef = useRef<Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y =
        Math.sin(state.clock.elapsedTime * 0.3) * 0.2;
    }
  });

  return (
    <group ref={groupRef}>
      <Float speed={2} rotationIntensity={0.1} floatIntensity={0.5}>
        {/* Email Symbol */}
        <mesh position={[0, 1, 0]}>
          <boxGeometry args={[2, 1.2, 0.1]} />
          <meshStandardMaterial
            color="#00f5ff"
            transparent
            opacity={0.8}
            wireframe
          />
        </mesh>

        {/* Email Envelope Flap */}
        <mesh position={[0, 1.3, 0.05]} rotation={[0.3, 0, 0]}>
          <planeGeometry args={[2, 0.8]} />
          <meshStandardMaterial
            color="#00f5ff"
            transparent
            opacity={0.6}
            wireframe
          />
        </mesh>
      </Float>

      {/* Floating Message Bubbles */}
      <Float speed={1} rotationIntensity={0.5} floatIntensity={1}>
        <mesh position={[-2.5, 0, 1]}>
          <sphereGeometry args={[0.3, 8, 8]} />
          <meshStandardMaterial
            color="#8b5cf6"
            transparent
            opacity={0.7}
            wireframe
          />
        </mesh>
      </Float>

      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
        <mesh position={[2.5, -1, 0.5]}>
          <sphereGeometry args={[0.25, 8, 8]} />
          <meshStandardMaterial
            color="#ec4899"
            transparent
            opacity={0.7}
            wireframe
          />
        </mesh>
      </Float>

      <Float speed={0.8} rotationIntensity={0.5} floatIntensity={1}>
        <mesh position={[1, 2.5, -1]}>
          <sphereGeometry args={[0.2, 8, 8]} />
          <meshStandardMaterial
            color="#00f5ff"
            transparent
            opacity={0.7}
            wireframe
          />
        </mesh>
      </Float>

      {/* Contact Text */}
      <Float speed={1.2} rotationIntensity={0.1} floatIntensity={0.3}>
        <Text
          position={[0, -0.5, 0]}
          fontSize={0.3}
          color="#ffffff"
          anchorX="center"
          anchorY="middle"
        >
          Let's Connect
        </Text>
      </Float>
    </group>
  );
}

export default function ContactForm3D() {
  return (
    <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[5, 5, 5]} intensity={1} color="#00f5ff" />
      <pointLight position={[-5, -5, 5]} intensity={0.5} color="#8b5cf6" />
      <ContactVisualization />
    </Canvas>
  );
}
