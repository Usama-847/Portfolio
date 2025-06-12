"use client";

import { motion } from "framer-motion";
import {
  ChevronDown,
  Github,
  Linkedin,
  Mail,
  Download,
  FileText,
  Eye,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import HeroAvatar from "@/components/hero-avatar";

export default function HeroSection() {
  const scrollToAbout = () => {
    const element = document.querySelector("#about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const openCV = () => {
    const cvUrl =
      "https://drive.google.com/file/d/1C5wxH565O7lygDLhgmai_AuxV20lzByx/view?usp=sharing";
    window.open(cvUrl, "_blank");
  };

  const downloadCV = () => {
    const fileId = "1C5wxH565O7lygDLhgmai_AuxV20lzByx";
    const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;
    const link = document.createElement("a");
    link.href = downloadUrl;
    link.target = "_blank";
    link.download = "Muhammad_Usama_Mehmood_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const openGmail = () => {
    window.open(
      "https://mail.google.com/mail/?view=cm&fs=1&to=usama.mehmood0007@gmail.com",
      "_blank"
    );
  };

  return (
    <section
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20"
      style={{ perspective: "1000px" }}
    >
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -100, z: -100 }}
            animate={{ opacity: 1, x: 0, z: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            style={{ transformStyle: "preserve-3d" }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-accent font-medium text-lg md:text-xl"
              >
                Hello, I'm
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="text-2xl md:text-4xl font-bold text-foreground leading-tight"
              >
                Muhammad{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-primary to-purple-500">
                  Usama
                </span>{" "}
                Mehmood
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="text-xl md:text-3xl text-muted-foreground font-medium"
              >
                Software Engineer at{" "}
                <span className="text-accent">Kakushin</span>
              </motion.p>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="text-lg text-muted-foreground max-w-2xl leading-relaxed"
            >
              Passionate about building scalable web applications and innovative
              solutions. Specialized in full-stack development with modern
              technologies and a focus on exceptional user experiences.
            </motion.p>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="flex flex-wrap gap-3 sm:gap-4"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotateY: 15 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Button
                  variant="outline"
                  size="icon"
                  className="glass neon-blue w-12 h-12"
                  asChild
                >
                  <a
                    href="https://github.com/Usama-847"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub Profile"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.1, rotateY: 15 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Button
                  variant="outline"
                  size="icon"
                  className="glass neon-blue w-12 h-12"
                  asChild
                >
                  <a
                    href="https://www.linkedin.com/in/muhammad-usama-mehmood/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn Profile"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.1, rotateY: 15 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Button
                  variant="outline"
                  size="icon"
                  onClick={openGmail}
                  className="glass neon-blue w-12 h-12"
                  aria-label="Email Contact"
                >
                  <Mail className="h-5 w-5" />
                </Button>
              </motion.div>
            </motion.div>

            {/* CV Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3 }}
              className="space-y-4"
            >
              <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                <FileText className="h-5 w-5 text-accent" />
                Resume / CV
              </h3>

              <div className="flex flex-col md:flex-row gap-3">
                <motion.div
                  whileHover={{ scale: 1.05, rotateX: 5, rotateY: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Button
                    onClick={openCV}
                    variant="outline"
                    className="glass neon-blue flex items-center gap-2 px-6 py-3"
                  >
                    <Eye className="h-4 w-4" />
                    <span className="hidden sm:inline">View CV</span>
                    <span className="sm:hidden">View</span>
                  </Button>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05, rotateX: 5, rotateY: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Button
                    onClick={downloadCV}
                    variant="outline"
                    className="glass neon-blue flex items-center gap-2 px-6 py-3"
                  >
                    <Download className="h-4 w-4" />
                    <span className="hidden sm:inline">Download CV</span>
                    <span className="sm:hidden">Download</span>
                  </Button>
                </motion.div>
              </div>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5 }}
            >
              <motion.div
                whileHover={{ scale: 1.05, rotateX: -5, rotateY: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Button
                  onClick={scrollToAbout}
                  className="bg-gradient-to-r from-accent to-primary hover:from-primary hover:to-accent text-background font-semibold px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg rounded-full neon-blue w-full md:w-auto"
                >
                  Explore My Work
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* 3D Avatar */}
          <motion.div
            initial={{ opacity: 0, x: 100, z: -100 }}
            animate={{ opacity: 1, x: 0, z: 50 }}
            transition={{ duration: 1, delay: 0.4 }}
            style={{ transformStyle: "preserve-3d" }}
            className="relative order-first lg:order-last"
          >
            <div className="w-full h-[400px] sm:h-[500px] lg:h-[600px] drop-shadow-2xl">
              <HeroAvatar />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden sm:block"
      >
        <motion.button
          onClick={scrollToAbout}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center space-y-2 text-muted-foreground hover:text-accent transition-colors duration-300"
          aria-label="Scroll to About section"
        >
          <span className="text-sm font-medium">Scroll Down</span>
          <ChevronDown className="h-5 w-5" />
        </motion.button>
      </motion.div>
    </section>
  );
}
