import Arduino from '@/components/technologies/Arduino';
import AWS from '@/components/technologies/AWS';
import ExpressJs from '@/components/technologies/ExpressJs';
import GoogleColab from '@/components/technologies/GoogleColab';
import JavaScript from '@/components/technologies/JavaScript';
import MongoDB from '@/components/technologies/MongoDB';
import NextJs from '@/components/technologies/NextJs';
import NodeJs from '@/components/technologies/NodeJs';
import PostgreSQL from '@/components/technologies/PostgreSQL';
import Python from '@/components/technologies/Python';
import ReactIcon from '@/components/technologies/ReactIcon';
import TailwindCss from '@/components/technologies/TailwindCss';
import TensorFlow from '@/components/technologies/TensorFlow';
import TypeScript from '@/components/technologies/TypeScript';

export interface Technology {
  name: string;
  href: string;
  icon: React.ReactNode;
}

export interface Experience {
  company: string;
  position: string;
  location: string;
  image: string;
  description: string[];
  startDate: string;
  endDate: string;
  website: string;
  x?: string;
  linkedin?: string;
  github?: string;
  technologies: Technology[];
  isCurrent: boolean;
  isBlur?: boolean;
}

export const experiences: Experience[] = [
  {
    isCurrent: true,
    company: 'E-Karigar Technologies',
    position: 'Full Stack Developer – R&D Team',
    location: 'Ambala, Haryana, India (On-site)',
    image: '/company/ekarigar.png',
    description: [
      'Built and maintained multiple full-stack applications using Next.js, Node.js, Express.js, Angular, GraphQL, PostgreSQL, Redis, MongoDB, and MySQL.',
      'Developed internal automation tools including an EFIR Downloading System (OCR-based captcha handling + data extraction) and a MySQL-powered AI Chatbot (LLM integration for natural language to SQL query generation).',
      'Built AI agents and end-to-end automation workflows using n8n, significantly boosting internal productivity.',
      'Specialized in LLM fine-tuning (Tiny-LLaMA, Google Colab), RAG pipeline development, and integrating AI into IoT hardware (Arduino x LLM voice control).',
      'Created self-hosted WhatsApp business integrations using WAHA with n8n automation — zero third-party costs.',
      'Built an automated SEO Audit system using n8n + GPT with dual AI agents for technical and content analysis.',
      'Managed deployment pipelines using Docker, CI/CD, Nginx, and Linux server optimization.',
    ],
    startDate: 'June 2024',
    endDate: 'Present',
    technologies: [
      {
        name: 'Next.js',
        href: 'https://nextjs.org/',
        icon: <NextJs />,
      },
      {
        name: 'React',
        href: 'https://react.dev/',
        icon: <ReactIcon />,
      },
      {
        name: 'Node.js',
        href: 'https://nodejs.org/',
        icon: <NodeJs />,
      },
      {
        name: 'Express.js',
        href: 'https://expressjs.com/',
        icon: <ExpressJs />,
      },
      {
        name: 'TypeScript',
        href: 'https://www.typescriptlang.org/',
        icon: <TypeScript />,
      },
      {
        name: 'JavaScript',
        href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
        icon: <JavaScript />,
      },
      {
        name: 'PostgreSQL',
        href: 'https://www.postgresql.org/',
        icon: <PostgreSQL />,
      },
      {
        name: 'MongoDB',
        href: 'https://www.mongodb.com/',
        icon: <MongoDB />,
      },
      {
        name: 'Tailwind CSS',
        href: 'https://tailwindcss.com/',
        icon: <TailwindCss />,
      },
      {
        name: 'AWS',
        href: 'https://aws.amazon.com/',
        icon: <AWS />,
      },
      {
        name: 'Python',
        href: 'https://www.python.org/',
        icon: <Python />,
      },
      {
        name: 'TensorFlow',
        href: 'https://www.tensorflow.org/',
        icon: <TensorFlow />,
      },
      {
        name: 'Google Colab',
        href: 'https://colab.research.google.com/',
        icon: <GoogleColab />,
      },
      {
        name: 'Arduino',
        href: 'https://www.arduino.cc/',
        icon: <Arduino />,
      },
    ],
    website: 'https://e-karigar.com',
    linkedin: 'https://www.linkedin.com/company/e-karigar',
  },
];
