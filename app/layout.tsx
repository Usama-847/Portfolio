import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Muhammad Usama Mehmood - Software Engineer Portfolio',
  description: 'Portfolio of Muhammad Usama Mehmood, Software Engineer at Kakushin. Specializing in full-stack web development with Next.js, TypeScript, and modern technologies.',
  keywords: ['software engineer', 'web developer', 'Next.js', 'TypeScript', 'React', 'portfolio'],
  authors: [{ name: 'Muhammad Usama Mehmood' }],
  openGraph: {
    title: 'Muhammad Usama Mehmood - Software Engineer',
    description: 'Portfolio showcasing innovative web applications and software solutions',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}