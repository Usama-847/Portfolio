'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SkillOrb from '@/components/skill-orb';

const skillCategories = [
  {
    name: 'Frontend',
    skills: [
      { name: 'React', level: 95, color: '#61DAFB' },
      { name: 'Next.js', level: 90, color: '#000000' },
      { name: 'TypeScript', level: 88, color: '#3178C6' },
      { name: 'Tailwind CSS', level: 92, color: '#06B6D4' },
      { name: 'Three.js', level: 80, color: '#049EF4' },
    ],
  },
  {
    name: 'Backend',
    skills: [
      { name: 'Node.js', level: 85, color: '#339933' },
      { name: 'Express', level: 82, color: '#000000' },
      { name: 'Supabase', level: 88, color: '#3ECF8E' },
      { name: 'MongoDB', level: 80, color: '#47A248' },
    ],
  },
  {
    name: 'Tools & Others',
    skills: [
      { name: 'Git', level: 90, color: '#F05032' },
      { name: 'Docker', level: 75, color: '#2496ED' },
      { name: 'AWS', level: 70, color: '#FF9900' },
      { name: 'Vercel', level: 85, color: '#000000' },
    ],
  },
];

export default function SkillsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="skills" className="py-20 lg:py-32 px-4 sm:px-6 lg:px-8 bg-secondary/20">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6"
            >
              Technical{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">
                Skills
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl text-muted-foreground max-w-3xl mx-auto"
            >
              A comprehensive toolkit of modern technologies and frameworks
              that I use to build exceptional digital experiences.
            </motion.p>
          </div>

          {/* 3D Skills Visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.6, duration: 1 }}
            className="h-96 mb-16"
          >
            <SkillOrb skills={skillCategories.flatMap(cat => cat.skills)} />
          </motion.div>

          {/* Skills Categories */}
          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.8 + categoryIndex * 0.2, duration: 0.8 }}
                className="glass rounded-xl p-6 neon-blue hover:neon-purple transition-all duration-500"
              >
                <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
                  {category.name}
                </h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{
                        delay: 1 + categoryIndex * 0.2 + skillIndex * 0.1,
                        duration: 0.6,
                      }}
                      className="space-y-2"
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-foreground font-medium">
                          {skill.name}
                        </span>
                        <span className="text-accent font-semibold">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-secondary rounded-full h-2">
                        <motion.div
                          className="h-2 rounded-full bg-gradient-to-r from-accent to-primary"
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${skill.level}%` } : {}}
                          transition={{
                            delay: 1.2 + categoryIndex * 0.2 + skillIndex * 0.1,
                            duration: 0.8,
                            ease: "easeOut",
                          }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}