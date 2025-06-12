"use client";

import { motion } from "framer-motion";
import { Code2 } from "lucide-react";

export default function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        transition: { duration: 0.8, ease: "easeInOut" },
      }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900"
    >
      <div className="relative flex flex-col items-center justify-center">
        {/* Floating particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-blue-400/20"
            initial={{
              scale: 0,
              x: Math.random() * 100 - 50,
              y: Math.random() * 100 - 50,
            }}
            animate={{
              scale: [0, 1, 0],
              x: [
                Math.random() * 100 - 50,
                Math.random() * 200 - 100,
                Math.random() * 300 - 150,
              ],
              y: [
                Math.random() * 100 - 50,
                Math.random() * 200 - 100,
                Math.random() * 300 - 150,
              ],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeInOut",
            }}
            style={{
              width: `${Math.random() * 10 + 5}px`,
              height: `${Math.random() * 10 + 5}px`,
            }}
          />
        ))}

        {/* 3D Cube */}
        <motion.div
          className="relative w-32 h-32"
          style={{ transformStyle: "preserve-3d" }}
          animate={{
            rotateX: 360,
            rotateY: 360,
            rotateZ: 15,
          }}
          transition={{
            rotateX: {
              duration: 12,
              repeat: Infinity,
              ease: "linear",
            },
            rotateY: {
              duration: 8,
              repeat: Infinity,
              ease: "linear",
            },
          }}
        >
          {/* Cube faces */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute inset-0 flex items-center justify-center border-2 border-blue-400/30 bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-sm"
              style={{
                transform: `rotateY(${i * 90}deg) translateZ(40px)`,
                width: "100%",
                height: "100%",
                boxShadow:
                  "inset 0 0 20px rgba(100, 200, 255, 0.2), 0 0 30px rgba(0, 100, 255, 0.3)",
              }}
            >
              <Code2 className="w-8 h-8 text-blue-400" />
            </motion.div>
          ))}
        </motion.div>

        {/* Animated text */}
        <motion.div
          className="mt-12"
          initial={{ y: 20, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            textShadow: [
              "0 0 5px rgba(100, 200, 255, 0.5)",
              "0 0 20px rgba(100, 150, 255, 0.8)",
              "0 0 5px rgba(100, 200, 255, 0.5)",
            ],
          }}
          transition={{
            y: { duration: 0.8 },
            opacity: { duration: 0.8 },
            textShadow: {
              duration: 2,
              repeat: Infinity,
            },
          }}
        >
          <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            Loading Portfolio<span className="animate-pulse">...</span>
          </h1>
        </motion.div>

        {/* Progress bar */}
        <motion.div
          className="mt-4 w-64 h-2 bg-gray-700 rounded-full overflow-hidden"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        >
          <motion.div
            className="h-full bg-gradient-to-r from-cyan-400 to-blue-500"
            animate={{
              backgroundPosition: ["0% 0%", "100% 0%"],
            }}
            transition={{
              backgroundPosition: {
                duration: 2,
                repeat: Infinity,
                ease: "linear",
              },
            }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
}
