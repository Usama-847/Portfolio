"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Stars, Float } from "@react-three/drei";
import { motion } from "framer-motion";

function ParticleField() {
  return (
    <group>
      <Stars
        radius={300}
        depth={60}
        count={1000}
        factor={7}
        saturation={0}
        fade={true}
        speed={0.5}
      />
    </group>
  );
}

function FloatingCube({ position }: { position: [number, number, number] }) {
  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh position={position}>
        <boxGeometry args={[0.5, 0.5, 0.5]} />
        <meshStandardMaterial
          color="#00f5ff"
          transparent
          opacity={0.3}
          wireframe
        />
      </mesh>
    </Float>
  );
}

export default function Background3D() {
  return (
    <div className="fixed inset-0 -z-10">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="w-full h-full"
      >
        <Canvas
          camera={{ position: [0, 0, 10], fov: 60 }}
          style={{ background: "transparent" }}
        >
          <Suspense fallback={null}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1} color="#00f5ff" />
            <pointLight
              position={[-10, -10, 10]}
              intensity={0.5}
              color="#8b5cf6"
            />

            <ParticleField />

            <FloatingCube position={[-5, 3, -5]} />
            <FloatingCube position={[5, -3, -3]} />
            <FloatingCube position={[3, 5, -7]} />
            <FloatingCube position={[-3, -5, -4]} />
          </Suspense>
        </Canvas>
      </motion.div>
    </div>
  );
}
