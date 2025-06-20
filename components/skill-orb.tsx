"use client";

import { Canvas } from "@react-three/fiber";
import { Float, Text, OrbitControls } from "@react-three/drei";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Group } from "three";

interface Skill {
  name: string;
  level: number;
  color: string;
}

interface SkillOrbProps {
  skills: Skill[];
}

function SkillSphere({
  skill,
  position,
}: {
  skill: Skill;
  position: [number, number, number];
}) {
  const meshRef = useRef<Group>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
  });

  const radius = 0.3 + (skill.level / 100) * 0.4;

  return (
    <Float speed={1 + Math.random()} rotationIntensity={0.5} floatIntensity={1}>
      <group ref={meshRef} position={position}>
        <mesh>
          <sphereGeometry args={[radius, 16, 16]} />
          <meshStandardMaterial
            color={skill.color}
            transparent
            opacity={0.8}
            wireframe
          />
        </mesh>
        <Text
          position={[0, 0, radius + 0.2]}
          fontSize={0.15}
          color="#ffffff"
          anchorX="center"
          anchorY="middle"
        >
          {skill.name}
        </Text>
      </group>
    </Float>
  );
}

function SkillsVisualization({ skills }: SkillOrbProps) {
  const positions: [number, number, number][] = [
    [0, 0, 0],
    [3, 2, 1],
    [-3, 1, -1],
    [2, -2, 2],
    [-2, -1, 1],
    [4, 0, -2],
    [-1, 3, 0],
    [1, -3, -1],
    [0, 2, 3],
    [-4, -2, 0],
    [3, -1, -3],
    [-2, 2, 2],
    [5, 1, 1],
  ];

  return (
    <group>
      {skills.slice(0, positions.length).map((skill, index) => (
        <SkillSphere
          key={skill.name}
          skill={skill}
          position={positions[index]}
        />
      ))}
    </group>
  );
}

export default function SkillOrb({ skills }: SkillOrbProps) {
  return (
    <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#00f5ff" />
      <pointLight position={[-10, -10, 10]} intensity={0.5} color="#8b5cf6" />
      <SkillsVisualization skills={skills} />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.5}
      />
    </Canvas>
  );
}
