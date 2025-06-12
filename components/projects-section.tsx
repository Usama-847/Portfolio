"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  ExternalLink,
  Github,
  Database,
  Smartphone,
  Globe,
  Brain,
  Gamepad2,
  Video,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    id: 1,
    name: "AI Document Analysis",
    description:
      "A MERN stack web application that allows users to upload documents for AI-based analysis with interactive chat functionality.",
    longDescription:
      "Users can view and download analysis results, chat with AI for follow-up questions, and upload assignments to get AI-analyzed solutions. All data including documents, chats, and user information is securely stored in a database.",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "AI Integration",
      "RESTful APIs",
    ],
    github: "https://github.com/usama-mehmood/ai-document-analysis",
    demo: "https://ai-document-analysis.vercel.app",
    color: "#00f5ff",
    icon: Brain,
    category: "AI & Machine Learning",
  },
  {
    id: 2,
    name: "SharePlay",
    description:
      "A TikTok-style MERN stack platform for video sharing with social features and cloud storage integration.",
    longDescription:
      "Users can upload videos and interact via likes, comments, and follows. Features profile management including profile pictures and user details. Video content is stored on Microsoft Azure for high scalability.",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Azure Blob Storage",
      "Video Processing",
    ],
    github: "https://github.com/usama-mehmood/shareplay",
    demo: "https://shareplay.vercel.app",
    color: "#8b5cf6",
    icon: Video,
    category: "Social Media",
  },
  {
    id: 3,
    name: "ReadMyCup",
    description:
      "A React Native mobile app and Next.js web app that analyzes coffee cup images using AI to reveal symbolic meanings.",
    longDescription:
      "Delivers personalized summaries including present, past, future insights, and advice. Results are saved to Firebase, which also stores user details for a seamless cross-platform experience.",
    technologies: [
      "React Native",
      "Next.js",
      "Firebase",
      "AI Image Analysis",
      "Cross-platform",
    ],
    github: "https://github.com/usama-mehmood/readmycup",
    demo: "https://readmycup.vercel.app",
    color: "#f59e0b",
    icon: Smartphone,
    category: "Mobile & AI",
  },
  {
    id: 4,
    name: "Fitly AI",
    description:
      "A comprehensive health and fitness assistant built on the MERN stack with AI-powered personalized recommendations.",
    longDescription:
      "Features AI-powered workout and meal plans based on user inputs (weight, height, goals, etc.). Includes dashboard for progress tracking, BMR calculator, nutrition checker, and integrated ChatBot.",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "AI Integration",
      "Health APIs",
    ],
    github: "https://github.com/usama-mehmood/fitly-ai",
    demo: "https://fitly-ai.vercel.app",
    color: "#10b981",
    icon: Database,
    category: "Health & Fitness",
  },
  {
    id: 5,
    name: "CodePlay",
    description:
      "A Wordle-inspired coding game built using the MERN stack with multiple difficulty levels and competitive features.",
    longDescription:
      "Features four difficulty levels, timer-based gameplay, user dashboard to view game history, and leaderboard showcasing top 25 players for competitive programming practice.",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Game Logic",
      "Real-time Updates",
    ],
    github: "https://github.com/usama-mehmood/codeplay",
    demo: "https://codeplay.vercel.app",
    color: "#ef4444",
    icon: Gamepad2,
    category: "Gaming & Education",
  },
  {
    id: 6,
    name: "DeltaPrime.io",
    description:
      "A professional Next.js web application developed during my full-stack developer role at Kakushin.",
    longDescription:
      "A large-scale commercial project showcasing modern web development practices with optimized performance and user experience. Built with Next.js for superior SEO and performance.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "RESTful APIs",
      "Performance Optimization",
    ],
    github: "https://github.com/usama-mehmood/deltaprime",
    demo: "https://deltaprime.io",
    color: "#6366f1",
    icon: Globe,
    category: "Commercial Projects",
  },
];

interface ProjectCardProps {
  project: (typeof projects)[0];
  index: number;
  inView: boolean;
}

function ProjectCard({ project, index, inView }: ProjectCardProps) {
  const IconComponent = project.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
      className="h-full"
    >
      <Card className="h-full glass neon-blue hover:neon-purple transition-all duration-500 hover:scale-[1.02] group overflow-hidden">
        <CardContent className="p-0 h-full flex flex-col">
          {/* Header with Icon and Category */}
          <div className="relative p-6 pb-4">
            <div className="flex items-center justify-between mb-4">
              <div
                className="p-3 rounded-xl shadow-lg"
                style={{
                  backgroundColor: `${project.color}20`,
                  border: `1px solid ${project.color}40`,
                }}
              >
                <IconComponent
                  className="w-6 h-6"
                  style={{ color: project.color }}
                />
              </div>
              <Badge
                variant="secondary"
                className="glass hover:neon-blue transition-all duration-300 text-xs px-2 py-1"
              >
                {project.category}
              </Badge>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-foreground group-hover:text-accent transition-colors duration-300 mb-3">
              {project.name}
            </h3>

            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-3">
              {project.description}
            </p>

            <p className="text-muted-foreground/80 text-xs sm:text-sm leading-relaxed">
              {project.longDescription}
            </p>
          </div>

          {/* Technologies */}
          <div className="px-6 pb-4 flex-1">
            <h4 className="text-xs sm:text-sm font-semibold text-foreground uppercase tracking-wide mb-3">
              Tech Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, techIndex) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{
                    delay: 0.5 + index * 0.1 + techIndex * 0.05,
                    duration: 0.4,
                  }}
                >
                  <Badge
                    variant="outline"
                    className="glass hover:neon-blue transition-all duration-300 hover:scale-110 text-xs px-2 py-1"
                  >
                    {tech}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="p-6 pt-0 mt-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                variant="outline"
                size="sm"
                className="flex-1 glass glass-dark hover:neon-blue transition-all duration-300"
                asChild
              >
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2"
                >
                  <Github className="w-4 h-4" />
                  <span className="text-xs sm:text-sm py-3">View Code</span>
                </a>
              </Button>

              <Button
                size="sm"
                className="flex-1 bg-gradient-to-r from-accent to-primary hover:from-accent/90 hover:to-primary/90 text-primary-foreground font-semibold shadow-lg transition-all duration-300"
                asChild
              >
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span className="text-xs sm:text-sm py-3">Live Demo</span>
                </a>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default function ProjectsSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="projects"
      ref={ref}
      className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-secondary/20 min-h-screen"
    >
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 sm:mb-6"
            >
              Featured{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">
                Projects
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-4xl mx-auto px-4"
            >
              A comprehensive showcase of my full-stack development expertise,
              featuring AI-powered applications, social platforms, mobile apps,
              and commercial projects built with modern technologies.
            </motion.p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                inView={inView}
              />
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1, duration: 0.8 }}
            className="text-center mt-12 sm:mt-16 lg:mt-20"
          >
            <p className="text-muted-foreground mb-6 text-sm sm:text-base">
              Want to see more of my work or discuss a project?
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-accent to-primary hover:from-accent/90 hover:to-primary/90 text-primary-foreground font-semibold px-8 py-3 shadow-lg transition-all duration-300"
              asChild
            >
              <a href="#contact">Get In Touch</a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
