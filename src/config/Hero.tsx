import Github from '@/components/svgs/Github';
import LinkedIn from '@/components/svgs/LinkedIn';
import Mail from '@/components/svgs/Mail';
import AWS from '@/components/technologies/AWS';
import ExpressJs from '@/components/technologies/ExpressJs';
import JavaScript from '@/components/technologies/JavaScript';
import MongoDB from '@/components/technologies/MongoDB';
import NextJs from '@/components/technologies/NextJs';
import NodeJs from '@/components/technologies/NodeJs';
import PostgreSQL from '@/components/technologies/PostgreSQL';
import ReactIcon from '@/components/technologies/ReactIcon';
import TypeScript from '@/components/technologies/TypeScript';

// Component mapping for skills
export const skillComponents = {
  TypeScript: TypeScript,
  ReactIcon: ReactIcon,
  NextJs: NextJs,
  NodeJs: NodeJs,
  PostgreSQL: PostgreSQL,
  MongoDB: MongoDB,
  JavaScript: JavaScript,
  ExpressJs: ExpressJs,
  AWS: AWS,
};

export const heroConfig = {
  // Personal Information
  name: 'Shivam Kaushal',
  title: 'Full-Stack Developer & AI Engineer.',
  avatar: '/assets/logo.png',

  // Skills Configuration
  skills: [
    {
      name: 'React',
      href: 'https://react.dev/',
      component: 'ReactIcon',
    },
    {
      name: 'Next.js',
      href: 'https://nextjs.org/',
      component: 'NextJs',
    },
    {
      name: 'Node.js',
      href: 'https://nodejs.org/',
      component: 'NodeJs',
    },
    {
      name: 'TypeScript',
      href: 'https://www.typescriptlang.org/',
      component: 'TypeScript',
    },
    {
      name: 'PostgreSQL',
      href: 'https://www.postgresql.org/',
      component: 'PostgreSQL',
    },
  ],

  // Description Configuration
  description: {
    template:
      'I build scalable web apps and AI-powered systems using {skills:0}, {skills:1}, {skills:2}, {skills:3} and {skills:4}. Expert in <b>LLM fine-tuning</b>, <b>RAG pipelines</b>, <b>AI agents</b>, and <b>workflow automation</b> with n8n.',
  },

  // Buttons Configuration
  buttons: [
    {
      variant: 'outline',
      text: 'Resume / CV',
      href: '/resume',
      icon: 'CV',
    },
    {
      variant: 'default',
      text: 'Get in touch',
      href: '/contact',
      icon: 'Chat',
    },
  ],
};

// Social Links Configuration
export const socialLinks = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/shivam-kaushal-9b825a269/',
    icon: <LinkedIn />,
  },
  {
    name: 'Github',
    href: 'https://github.com/ShIvAmKaUsHaL69',
    icon: <Github />,
  },
  {
    name: 'Email',
    href: 'mailto:shivamkasuhal181@gmail.com',
    icon: <Mail />,
  },
];
