'use client';

import { motion } from 'framer-motion';
import { Code2 } from 'lucide-react';

export default function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-background"
    >
      <div className="flex flex-col items-center space-y-4">
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.2, 1],
          }}
          transition={{
            rotate: { duration: 2, repeat: Infinity, ease: "linear" },
            scale: { duration: 1, repeat: Infinity, ease: "easeInOut" },
          }}
          className="p-4 rounded-full glass neon-blue"
        >
          <Code2 className="w-8 h-8 text-accent" />
        </motion.div>
        <motion.p
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="text-lg font-medium text-foreground"
        >
          Loading Portfolio...
        </motion.p>
      </div>
    </motion.div>
  );
}