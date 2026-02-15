import { siteConfig } from '@/config/Meta';

export default function JsonLd() {
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Shivam Kaushal',
    alternateName: ['Shiv Kaushal', 'Kaushal Shivam'],
    url: 'https://kaushalshivam.site',
    image: 'https://kaushalshivam.site/assets/logo.png',
    jobTitle: 'Full-Stack Developer & AI Engineer',
    worksFor: {
      '@type': 'Organization',
      name: 'E-Karigar Technologies',
      url: 'https://e-karigar.com',
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Ambala',
      addressRegion: 'Haryana',
      addressCountry: 'IN',
    },
    email: 'shivamkasuhal181@gmail.com',
    sameAs: [
      'https://www.linkedin.com/in/shivam-kaushal-9b825a269/',
      'https://github.com/ShIvAmKaUsHaL69',
    ],
    knowsAbout: [
      'Full-Stack Web Development',
      'React.js',
      'Next.js',
      'Node.js',
      'TypeScript',
      'JavaScript',
      'Python',
      'PostgreSQL',
      'MongoDB',
      'MySQL',
      'Redis',
      'Angular',
      'Express.js',
      'CodeIgniter',
      'Laravel',
      'LLM Fine-Tuning',
      'RAG Pipelines',
      'AI Agents',
      'n8n Workflow Automation',
      'Docker',
      'CI/CD',
      'Nginx',
      'Linux Server Management',
      'AWS',
      'Arduino',
      'TensorFlow',
      'Google Colab',
      'Web Scraping',
      'WhatsApp Business Automation',
    ],
    alumniOf: {
      '@type': 'CollegeOrUniversity',
      name: 'Kurukshetra University',
      url: 'https://www.kuk.ac.in',
    },
    description:
      'Full-Stack Developer & AI Engineer from Ambala, Haryana with 1.5+ years of experience. Expert in React, Next.js, Node.js, LLM fine-tuning, RAG pipelines, and n8n automation.',
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.title,
    url: 'https://kaushalshivam.site',
    description: siteConfig.description,
    author: {
      '@type': 'Person',
      name: 'Shivam Kaushal',
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://kaushalshivam.site/blog?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}
