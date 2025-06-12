"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Code2, Brain, Rocket, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Code2,
    title: "Full-Stack Development",
    description:
      "Expertise in modern web technologies including Next.js, TypeScript, React Native, React and Node.js",
  },
  {
    icon: Brain,
    title: "AI-Driven Solutions",
    description:
      "Passionate about integrating AI and machine learning into web applications",
  },
  {
    icon: Rocket,
    title: "Scalable Architecture",
    description:
      "Focus on building maintainable and scalable system architectures",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description:
      "Strong communication skills and experience in agile development environments",
  },
];

export default function AboutSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-20 lg:py-32 px-4 sm:px-6 lg:px-8">
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
              About{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">
                Me
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl text-muted-foreground max-w-3xl mx-auto"
            >
              Passionate software engineer with a focus on creating innovative
              web solutions that make a difference in people's lives.
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="space-y-6"
            >
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-foreground">
                  Software Engineer at Kakushin
                </h3>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed text-justify">
                  I specialize in full-stack web development with a particular
                  passion for modern JavaScript frameworks and cutting-edge
                  technologies. My journey in software development has been
                  driven by curiosity and a desire to solve complex problems
                  through elegant code.
                </p>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed text-justify">
                  Currently working at Kakushin, I focus on developing scalable
                  web applications, designing system architectures, and
                  collaborating with cross-functional teams to deliver
                  innovative solutions for our clients.
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-foreground">
                  Key Technologies & Interests
                </h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-accent rounded-full"></span>
                    <span>
                      JavaScript, TypeScript, React, Next.js, React Native
                    </span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    <span>
                      Node.js, Express, Supabase, MongoDB, Firebase, SQL
                    </span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                    <span>Tailwind CSS, BootStrap, Framer Motion</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
                    <span>Azure, Postman, Git, Jira </span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Features Grid */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 50 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 1 + index * 0.1, duration: 0.6 }}
                >
                  <Card className="glass neon-blue hover:neon-purple transition-all duration-300 h-full group hover:scale-105">
                    <CardContent className="p-6 text-center space-y-4">
                      <div className="flex justify-center">
                        <div className="p-3 rounded-full bg-accent/20 group-hover:bg-primary/20 transition-colors duration-300">
                          <feature.icon className="w-8 h-8 text-accent group-hover:text-primary transition-colors duration-300" />
                        </div>
                      </div>
                      <h4 className="text-lg font-semibold text-foreground">
                        {feature.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
