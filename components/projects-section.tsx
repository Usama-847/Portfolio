'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Project3D from '@/components/project-3d';

const projects = [
  {
    id: 1,
    name: 'Task Management App',
    description: 'A comprehensive web application for task sharing and progress tracking, built with modern technologies for optimal performance and user experience.',
    longDescription: 'This application features real-time collaboration, advanced filtering and sorting capabilities, deadline tracking, and team management tools.',
    technologies: ['Next.js', 'TypeScript', 'Supabase', 'Tailwind CSS', 'Framer Motion'],
    github: 'https://github.com/usama-mehmood/task-app',
    demo: 'https://task-app.vercel.app',
    color: '#00f5ff',
  },
  {
    id: 2,
    name: 'E-Commerce Platform',
    description: 'A full-stack e-commerce platform with payment processing, inventory management, and admin dashboard for complete business operations.',
    longDescription: 'Features include secure payment integration with Stripe, real-time inventory tracking, order management, and comprehensive analytics.',
    technologies: ['Next.js', 'Node.js', 'Stripe', 'Supabase', 'AWS'],
    github: 'https://github.com/usama-mehmood/ecommerce',
    demo: 'https://ecommerce.vercel.app',
    color: '#8b5cf6',
  },
];

interface ProjectCardProps {
  project: typeof projects[0];
  index: number;
  inView: boolean;
}

function ProjectCard({ project, index, inView }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 0.6 + index * 0.2, duration: 0.8 }}
    >
      <Card className="glass neon-blue hover:neon-purple transition-all duration-500 hover:scale-[1.02] group overflow-hidden">
        <CardContent className="p-0">
          {/* 3D Preview */}
          <div className="h-64 relative overflow-hidden">
            <Project3D color={project.color} />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
          </div>

          {/* Content */}
          <div className="p-8 space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground group-hover:text-accent transition-colors duration-300">
                {project.name}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {project.description}
              </p>
              <p className="text-sm text-muted-foreground/80">
                {project.longDescription}
              </p>
            </div>

            {/* Technologies */}
            <div className="space-y-3">
              <h4 className="text-sm font-semibold text-foreground uppercase tracking-wide">
                Technologies Used
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <motion.div
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 1 + index * 0.2 + techIndex * 0.05, duration: 0.4 }}
                  >
                    <Badge
                      variant="secondary"
                      className="glass hover:neon-blue transition-all duration-300 hover:scale-110"
                    >
                      {tech}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex space-x-4 pt-4">
              <Button
                variant="outline"
                className="glass neon-blue hover:bg-accent hover:text-background transition-all duration-300"
                asChild
              >
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2"
                >
                  <Github className="w-4 h-4" />
                  <span>Code</span>
                </a>
              </Button>
              
              <Button
                className="bg-gradient-to-r from-accent to-primary hover:from-primary hover:to-accent text-background font-semibold transition-all duration-300"
                asChild
              >
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Live Demo</span>
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
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="projects" className="py-20 lg:py-32 px-4 sm:px-6 lg:px-8">
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
              Featured{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">
                Projects
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl text-muted-foreground max-w-3xl mx-auto"
            >
              A showcase of my recent work, demonstrating expertise in modern web
              development and innovative problem-solving approaches.
            </motion.p>
          </div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                inView={inView}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}