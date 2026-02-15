import Arduino from '@/components/technologies/Arduino';
import ExpressJs from '@/components/technologies/ExpressJs';
import GoogleColab from '@/components/technologies/GoogleColab';
import JavaScript from '@/components/technologies/JavaScript';
import MongoDB from '@/components/technologies/MongoDB';
import NextJs from '@/components/technologies/NextJs';
import NodeJs from '@/components/technologies/NodeJs';
import Python from '@/components/technologies/Python';
import ReactIcon from '@/components/technologies/ReactIcon';
import TensorFlow from '@/components/technologies/TensorFlow';
import { Project } from '@/types/project';

export const projects: Project[] = [
  {
    title: 'Lead Scraper',
    description:
      'AI-powered tool that fetches verified business leads from Google Maps, cleans data, detects emails, and delivers structured datasets straight to your inbox.',
    image: '/project/leadscraper.png',
    link: 'https://leads.kaushalshivam.site',
    technologies: [
      { name: 'Next.js', icon: <NextJs key="nextjs" /> },
      { name: 'Node.js', icon: <NodeJs key="nodejs" /> },
      { name: 'Express.js', icon: <ExpressJs key="expressjs" /> },
      { name: 'MongoDB', icon: <MongoDB key="mongodb" /> },
    ],
    github: 'https://github.com/ShIvAmKaUsHaL69/leadscraper',
    live: 'https://leads.kaushalshivam.site',
    details: true,
    projectDetailsPageSlug: '/projects/leadscraper',
    isWorking: true,
  },
  {
    title: 'Arduino x LLM — Voice-Controlled IoT',
    description:
      'Bridging hardware and AI — speak to your Arduino and it intelligently responds. Voice commands are transcribed by an Audio LLM, processed by a Thinking LLM, and actions are executed on hardware in real-time.',
    image: '/project/arduino-llm.png',
    link: '#',
    technologies: [
      { name: 'Arduino', icon: <Arduino key="arduino" /> },
      { name: 'Python', icon: <Python key="python" /> },
      { name: 'Node.js', icon: <NodeJs key="nodejs" /> },
      { name: 'JavaScript', icon: <JavaScript key="javascript" /> },
    ],
    github: 'https://github.com/ShIvAmKaUsHaL69',
    live: '#',
    details: true,
    projectDetailsPageSlug: '/projects/arduino-llm',
    isWorking: true,
  },
  {
    title: 'SEO Audit Automation (n8n)',
    description:
      'End-to-end automated SEO audit system. Submit a URL, two AI agents (Technical & Content) analyze it via GPT, and a detailed formatted report is emailed to you — fully automated, zero manual effort.',
    image: '/project/seo-audit.png',
    link: '#',
    technologies: [
      { name: 'Node.js', icon: <NodeJs key="nodejs" /> },
      { name: 'JavaScript', icon: <JavaScript key="javascript" /> },
    ],
    github: 'https://github.com/ShIvAmKaUsHaL69',
    live: '#',
    details: true,
    projectDetailsPageSlug: '/projects/seo-audit',
    isWorking: true,
  },
  {
    title: 'WhatsApp Business Automation (WAHA)',
    description:
      'Self-hosted WhatsApp integration using WAHA — connect WhatsApp to your business for free with n8n automation, custom triggers, and full data control. No third-party costs.',
    image: '/project/whatsapp-bot.png',
    link: '#',
    technologies: [
      { name: 'Node.js', icon: <NodeJs key="nodejs" /> },
      { name: 'Express.js', icon: <ExpressJs key="expressjs" /> },
      { name: 'JavaScript', icon: <JavaScript key="javascript" /> },
    ],
    github: 'https://github.com/ShIvAmKaUsHaL69',
    live: '#',
    details: true,
    projectDetailsPageSlug: '/projects/whatsapp-bot',
    isWorking: true,
  },
  {
    title: 'Restaurant Customer Retention AI',
    description:
      'AI-powered system for restaurants and food shops that sends personalized WhatsApp image messages with order details and friendly reminders. Fully self-hosted with zero extra costs.',
    image: '/project/restaurant-ai.png',
    link: '#',
    technologies: [
      { name: 'Node.js', icon: <NodeJs key="nodejs" /> },
      { name: 'Express.js', icon: <ExpressJs key="expressjs" /> },
      { name: 'JavaScript', icon: <JavaScript key="javascript" /> },
    ],
    github: 'https://github.com/ShIvAmKaUsHaL69',
    live: '#',
    details: true,
    projectDetailsPageSlug: '/projects/restaurant-ai',
    isWorking: true,
  },
  {
    title: 'Fine-tuning LLM with Google Colab',
    description:
      'Step-by-step walkthrough of fine-tuning Tiny-LLaMA inside Google Colab — covering tokenization, training setup, model export, and local deployment. Making AI model customization accessible.',
    image: '/project/llm-finetune.png',
    link: '#',
    technologies: [
      { name: 'Python', icon: <Python key="python" /> },
      { name: 'TensorFlow', icon: <TensorFlow key="tensorflow" /> },
      { name: 'Google Colab', icon: <GoogleColab key="googlecolab" /> },
    ],
    github: 'https://github.com/ShIvAmKaUsHaL69',
    live: '#',
    details: true,
    projectDetailsPageSlug: '/projects/llm-finetuning',
    isWorking: true,
  },
  {
    title: 'Speech Analysis Tool',
    description:
      'Real-time video analysis tool that detects smile percentage, filler words, and weak words, then generates an improved spoken paragraph for better speech clarity.',
    image: '/project/speech-tool.png',
    link: '#',
    technologies: [
      { name: 'React', icon: <ReactIcon key="react" /> },
      { name: 'Node.js', icon: <NodeJs key="nodejs" /> },
      { name: 'Express.js', icon: <ExpressJs key="expressjs" /> },
    ],
    github: 'https://github.com/ShIvAmKaUsHaL69',
    live: '#',
    details: true,
    projectDetailsPageSlug: '/projects/speech-analysis',
    isWorking: true,
  },
  {
    title: 'Rental App',
    description:
      'Cross-platform mobile app with Google authentication (Appwrite) for renting apartments and properties seamlessly.',
    image: '/project/rental-app.png',
    link: 'https://github.com/ShIvAmKaUsHaL69/react-native-99acres',
    technologies: [
      { name: 'React', icon: <ReactIcon key="react" /> },
      { name: 'Node.js', icon: <NodeJs key="nodejs" /> },
      { name: 'MongoDB', icon: <MongoDB key="mongodb" /> },
    ],
    github: 'https://github.com/ShIvAmKaUsHaL69/react-native-99acres',
    live: 'https://github.com/ShIvAmKaUsHaL69/react-native-99acres',
    details: true,
    projectDetailsPageSlug: '/projects/rental-app',
    isWorking: true,
  },
  {
    title: 'LinkedIn Comment Generator',
    description:
      'Intelligent Chrome extension that generates AI-powered comments for LinkedIn posts, helping you engage meaningfully with your professional network.',
    image: '/project/linkedin-ext.png',
    link: '#',
    technologies: [
      { name: 'JavaScript', icon: <JavaScript key="javascript" /> },
      { name: 'Node.js', icon: <NodeJs key="nodejs" /> },
    ],
    github: 'https://github.com/ShIvAmKaUsHaL69',
    live: '#',
    details: true,
    projectDetailsPageSlug: '/projects/linkedin-comment-generator',
    isWorking: true,
  },
];
