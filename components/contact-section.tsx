'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import { Mail, Github, Linkedin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import ContactForm3D from '@/components/contact-form-3d';

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormStatus {
  type: 'idle' | 'loading' | 'success' | 'error';
  message: string;
}

const socialLinks = [
  {
    name: 'Email',
    href: 'mailto:usama.mehmood@example.com',
    icon: Mail,
    color: '#00f5ff',
  },
  {
    name: 'GitHub',
    href: 'https://github.com/usama-mehmood',
    icon: Github,
    color: '#8b5cf6',
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/usama-mehmood',
    icon: Linkedin,
    color: '#ec4899',
  },
];

export default function ContactSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState<FormStatus>({
    type: 'idle',
    message: '',
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ type: 'loading', message: 'Sending message...' });

    try {
      // Simulate API call - replace with actual Supabase integration
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setStatus({
        type: 'success',
        message: 'Message sent successfully! I\'ll get back to you soon.',
      });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Failed to send message. Please try again.',
      });
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-32 px-4 sm:px-6 lg:px-8">
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
              Get In{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">
                Touch
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl text-muted-foreground max-w-3xl mx-auto"
            >
              Ready to collaborate on your next project? Let's discuss how we can
              bring your ideas to life with cutting-edge technology.
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <Card className="glass neon-blue hover:neon-purple transition-all duration-500">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                          Full Name
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="glass bg-background/50 border-secondary focus:border-accent transition-colors duration-300"
                          placeholder="Your full name"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                          Email Address
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="glass bg-background/50 border-secondary focus:border-accent transition-colors duration-300"
                          placeholder="your.email@example.com"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                          Message
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          required
                          rows={5}
                          value={formData.message}
                          onChange={handleInputChange}
                          className="glass bg-background/50 border-secondary focus:border-accent transition-colors duration-300"
                          placeholder="Tell me about your project..."
                        />
                      </div>
                    </div>

                    {/* Status Message */}
                    {status.type !== 'idle' && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`flex items-center space-x-2 p-4 rounded-lg ${
                          status.type === 'success'
                            ? 'bg-green-500/20 text-green-400'
                            : status.type === 'error'
                            ? 'bg-red-500/20 text-red-400'
                            : 'bg-blue-500/20 text-blue-400'
                        }`}
                      >
                        {status.type === 'success' && <CheckCircle className="w-5 h-5" />}
                        {status.type === 'error' && <AlertCircle className="w-5 h-5" />}
                        {status.type === 'loading' && (
                          <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin" />
                        )}
                        <span>{status.message}</span>
                      </motion.div>
                    )}

                    <Button
                      type="submit"
                      disabled={status.type === 'loading'}
                      className="w-full bg-gradient-to-r from-accent to-primary hover:from-primary hover:to-accent text-background font-semibold py-6 text-lg rounded-lg neon-blue hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {status.type === 'loading' ? (
                        <div className="flex items-center space-x-2">
                          <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin" />
                          <span>Sending...</span>
                        </div>
                      ) : (
                        <div className="flex items-center space-x-2">
                          <Send className="w-5 h-5" />
                          <span>Send Message</span>
                        </div>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* 3D Contact Visual & Social Links */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="space-y-8"
            >
              {/* 3D Visualization */}
              <div className="h-64 lg:h-80">
                <ContactForm3D />
              </div>

              {/* Social Links */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-foreground text-center">
                  Connect With Me
                </h3>
                <div className="flex justify-center space-x-6">
                  {socialLinks.map((link, index) => (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 1 + index * 0.1, duration: 0.6 }}
                    >
                      <Button
                        variant="outline"
                        size="icon"
                        className="glass neon-blue hover:neon-purple hover:scale-110 transition-all duration-300 w-16 h-16"
                        asChild
                      >
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={link.name}
                        >
                          <link.icon className="w-8 h-8" />
                        </a>
                      </Button>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}