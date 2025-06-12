"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Building2, Calendar, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const experience = {
  title: "Software Engineer",
  company: "Kakushin",
  location: "Onsite",
  period: "2024 June - Present",
  roles: [
    {
      title: "Full Stack Development",
      responsibilities: [
        "Developing and maintaining scalable web applications using modern JavaScript frameworks",
        "Designing system architecture and implementing best practices for code quality",
        "Collaborating with cross-functional teams to deliver innovative solutions for clients",
        "Mentoring junior developers and contributing to technical decision-making",
        "Managed version control, project tracking, and API testing with Git, Jira, and Postman, ensuring scalable and maintainable codebases",
        "Collaborated with teams to optimize application performance and deliver user-friendly interfaces",
        "Integrated cloud solutions like Azure Blob Storage for media handling and scalable data storage",
      ],
    },
    {
      title: "Quality Assurance Analyst",
      responsibilities: [
        "Conducted testing for web and mobile applications using Jira for defect tracking and documentation",
        "Validated front-end (React.js, Next.js, HTML5, CSS3) and back-end (Node.js, MongoDB, Firebase) functionalities to ensure software quality",
        "Ensured alignment with design specifications through test cases and execution results",
      ],
    },
  ],
  technologies: [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Express",
    "Supabase",
    "Firebase",
    "MongoDB",
    "Git",
    "Jira",
    "React Native",
    "Tailwind CSS",
    "Bootstrap",
    "HTML5",
    "CSS3",
    "Postman",
    "Azure Blob Storage",
  ],
};

export default function ExperienceSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="experience"
      className="py-20 lg:py-32 px-4 sm:px-6 lg:px-8 bg-secondary/20"
    >
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
              className="text-3xl md:text-6xl font-bold text-foreground mb-6"
            >
              Professional{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">
                Experience
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-lg text-muted-foreground max-w-3xl mx-auto"
            >
              Building innovative solutions and contributing to meaningful
              projects that drive business growth and user satisfaction.
            </motion.p>
          </div>

          {/* Experience Card */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <Card className="glass neon-blue hover:neon-purple transition-all duration-500 hover:scale-[1.02]">
              <CardContent className="p-8 lg:p-12">
                <div className="space-y-8">
                  {/* Header */}
                  <div className="space-y-4">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                      <div>
                        <h3 className="text-2xl lg:text-3xl font-bold text-foreground">
                          {experience.title}
                        </h3>
                        <div className="flex items-center space-x-2 mt-2">
                          <Building2 className="w-5 h-5 text-accent" />
                          <span className="text-xl text-accent font-semibold">
                            {experience.company}
                          </span>
                        </div>
                      </div>

                      <div className="flex flex-col space-y-2">
                        <div className="flex items-center space-x-2 text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          <span>{experience.period}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-muted-foreground">
                          <MapPin className="w-4 h-4" />
                          <span>{experience.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="space-y-6">
                    {experience.roles.map((role, roleIndex) => (
                      <div key={roleIndex} className="space-y-4">
                        <h4 className="text-lg font-semibold text-accent border-l-4 border-accent pl-4">
                          {role.title}
                        </h4>
                        <ul className="space-y-3">
                          {role.responsibilities.map((item, index) => (
                            <motion.li
                              key={index}
                              initial={{ opacity: 0, x: -20 }}
                              animate={inView ? { opacity: 1, x: 0 } : {}}
                              transition={{
                                delay: 0.8 + roleIndex * 0.2 + index * 0.1,
                                duration: 0.6,
                              }}
                              className="flex items-start space-x-3 text-muted-foreground"
                            >
                              <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                              <span>{item}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-foreground">
                      Technologies & Tools
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech, index) => (
                        <motion.div
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={inView ? { opacity: 1, scale: 1 } : {}}
                          transition={{
                            delay: 1.4 + index * 0.05,
                            duration: 0.4,
                          }}
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
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
