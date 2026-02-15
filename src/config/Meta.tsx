import { about } from './About';
import { heroConfig } from './Hero';

export interface PageMeta {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  twitterCard?: 'summary' | 'summary_large_image';
}

// Base site configuration
export const siteConfig = {
  name: heroConfig.name,
  title: 'Shivam Kaushal — Full-Stack Developer & AI Engineer from Ambala',
  description:
    'Shivam Kaushal is a Full-Stack Developer & AI Engineer from Ambala, Haryana. Expert in React, Next.js, Node.js, LLM fine-tuning, RAG pipelines, n8n automation, and building scalable web applications.',
  url: process.env.NEXT_PUBLIC_URL || 'https://kaushalshivam.site',
  ogImage: '/meta/opengraph-image.png',
  author: {
    name: about.name,
    github: 'ShIvAmKaUsHaL69',
    linkedin: 'shivam-kaushal-9b825a269',
    email: 'shivamkasuhal181@gmail.com',
  },
  keywords: [
    'shivam kaushal',
    'shivam kaushal developer',
    'shivam kaushal ambala',
    'kaushal shivam',
    'full stack developer ambala',
    'web developer ambala',
    'ai developer ambala',
    'shivam kaushal portfolio',
    'shivam kaushal full stack developer',
    'react developer ambala',
    'node.js developer ambala',
    'next.js developer india',
    'llm developer india',
    'ai engineer ambala haryana',
    'freelance developer ambala',
    'e-karigar developer',
    'full-stack developer haryana',
    'portfolio',
    'react',
    'nextjs',
    'typescript',
    'web development',
    'ai developer',
    'genai',
    'n8n automation',
    'llm fine-tuning',
  ],
};

export const pageMetadata: Record<string, PageMeta> = {
  // Home page
  '/': {
    title:
      'Shivam Kaushal — Full-Stack Developer & AI Engineer | Ambala, Haryana',
    description:
      'Shivam Kaushal is a Full-Stack Developer & AI Engineer from Ambala, India. Specializing in React, Next.js, Node.js, LLM fine-tuning, RAG pipelines, and n8n workflow automation. Explore projects, experience, and blog.',
    keywords: [
      'shivam kaushal',
      'shivam kaushal developer',
      'shivam kaushal ambala',
      'full stack developer ambala',
      'ai engineer ambala',
      'web developer haryana',
      'react developer india',
      'portfolio',
      'llm developer',
      'n8n automation expert',
    ],
    ogImage: '/meta/hero.png',
    twitterCard: 'summary_large_image',
  },

  // Contact page
  '/contact': {
    title: 'Contact Shivam Kaushal — Hire a Full-Stack Developer from Ambala',
    description:
      'Get in touch with Shivam Kaushal for web development, AI integration, automation projects, or freelance opportunities. Based in Ambala, Haryana, India.',
    keywords: [
      'hire shivam kaushal',
      'contact developer ambala',
      'hire full stack developer',
      'freelance web developer ambala',
      'hire ai developer india',
    ],
    ogImage: '/assets/logo.png',
    twitterCard: 'summary',
  },

  // Work Experience page
  '/work-experience': {
    title:
      'Work Experience — Shivam Kaushal | Full Stack Developer at E-Karigar',
    description:
      'Shivam Kaushal\'s professional journey as a Full Stack Developer at E-Karigar Technologies, Ambala. Building web apps, AI chatbots, automation tools, and more.',
    keywords: [
      'shivam kaushal experience',
      'e-karigar developer',
      'full stack developer experience',
      'software developer ambala',
      'web developer career',
    ],
    ogImage: '/meta/work.png',
    twitterCard: 'summary_large_image',
  },

  // Projects page
  '/projects': {
    title:
      'Projects by Shivam Kaushal — Lead Scraper, Arduino LLM, WhatsApp Bot & More',
    description:
      'Explore projects by Shivam Kaushal: Lead Scraper, Arduino x LLM IoT, SEO Audit Automation, WhatsApp Business Bot, LLM Fine-tuning, and more.',
    keywords: [
      'shivam kaushal projects',
      'lead scraper',
      'arduino llm',
      'whatsapp bot',
      'seo audit automation',
      'ai projects india',
      'web development projects',
    ],
    ogImage: '/meta/projects.png',
    twitterCard: 'summary_large_image',
  },

  // Blog page
  '/blog': {
    title:
      'Blog by Shivam Kaushal — LLM Fine-Tuning, n8n Automation, Web Dev Tutorials',
    description:
      'Read technical blogs by Shivam Kaushal on LLM fine-tuning, n8n workflow automation, Arduino IoT, web scraping, and full-stack web development.',
    keywords: [
      'shivam kaushal blog',
      'llm fine-tuning tutorial',
      'n8n automation guide',
      'web development blog',
      'ai tutorials',
      'arduino llm tutorial',
    ],
    ogImage: '/meta/blogs.png',
    twitterCard: 'summary_large_image',
  },

  // Resume page
  '/resume': {
    title: 'Resume — Shivam Kaushal | Full-Stack Developer & AI Engineer',
    description: `View and download Shivam Kaushal's professional resume. Full-Stack Developer & AI Engineer with expertise in React, Node.js, LLM integration, and automation.`,
    keywords: [
      'shivam kaushal resume',
      'shivam kaushal cv',
      'developer resume ambala',
      'full stack developer resume',
    ],
    ogImage: '/meta/resume.png',
    twitterCard: 'summary',
  },

  // Gears page
  '/gears': {
    title: 'Gears & Tools — Shivam Kaushal\'s Development Setup',
    description:
      'Discover the tools, devices, and software Shivam Kaushal uses: Cursor, VS Code, Postman, Docker, n8n, and more.',
    keywords: [
      'developer setup',
      'tools',
      'devices',
      'software',
      'productivity',
      'development environment',
    ],
    ogImage: '/meta/gears.png',
    twitterCard: 'summary_large_image',
  },

  // Setup page
  '/setup': {
    title: 'VS Code Setup Guide — Shivam Kaushal',
    description:
      'Complete guide to setting up VS Code with extensions, fonts, and configuration for optimal full-stack development.',
    keywords: [
      'vscode setup',
      'developer setup guide',
      'vs code extensions',
      'development environment',
    ],
    ogImage: '/meta/setup.png',
    twitterCard: 'summary_large_image',
  },
};

// Helper function to get metadata for a specific page
export function getPageMetadata(pathname: string): PageMeta {
  return pageMetadata[pathname] || pageMetadata['/'];
}

// Helper function to generate complete metadata object for Next.js
export function generateMetadata(pathname: string) {
  const pageMeta = getPageMetadata(pathname);

  return {
    metadataBase: new URL(siteConfig.url),
    title: pageMeta.title,
    description: pageMeta.description,
    keywords: [...(pageMeta.keywords || []), ...siteConfig.keywords].join(', '),
    authors: [{ name: siteConfig.author.name }],
    creator: siteConfig.author.name,
    publisher: siteConfig.author.name,
    openGraph: {
      type: 'website',
      locale: 'en_IN',
      url: `${siteConfig.url}${pathname}`,
      title: pageMeta.title,
      description: pageMeta.description,
      siteName: siteConfig.title,
      images: [
        {
          url: pageMeta.ogImage || siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: pageMeta.title,
        },
      ],
    },
    twitter: {
      card: pageMeta.twitterCard || 'summary_large_image',
      title: pageMeta.title,
      description: pageMeta.description,
      images: [pageMeta.ogImage || siteConfig.ogImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    alternates: {
      canonical: `${siteConfig.url}${pathname}`,
    },
    verification: {
      // Add your Google Search Console verification code here
      // google: 'your-google-verification-code',
    },
  };
}
