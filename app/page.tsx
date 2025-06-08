'use client';

import { useEffect, useState } from 'react';
import Header from '@/components/header';
import HeroSection from '@/components/hero-section';
import AboutSection from '@/components/about-section';
import ExperienceSection from '@/components/experience-section';
import ProjectsSection from '@/components/projects-section';
import SkillsSection from '@/components/skills-section';
import ContactSection from '@/components/contact-section';
import Background3D from '@/components/background-3d';
import LoadingScreen from '@/components/loading-screen';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <main className="relative min-h-screen bg-background overflow-x-hidden">
      <Background3D />
      <Header />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
    </main>
  );
}