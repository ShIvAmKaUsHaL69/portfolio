import Headphones from '@/components/svgs/devices/Headphones';
import Keyboard from '@/components/svgs/devices/Keyboard';
import Laptop from '@/components/svgs/devices/Laptop';
import Monitor from '@/components/svgs/devices/Monitor';
import Mouse from '@/components/svgs/devices/Mouse';
import Phone from '@/components/svgs/devices/Phone';

export const devices = [
  {
    name: 'Windows PC (Custom Build)',
    icon: <Laptop className="size-4" />,
  },
  {
    name: 'Monitor Setup',
    icon: <Monitor className="size-4" />,
  },
  {
    name: 'Standard Keyboard',
    icon: <Keyboard className="size-4" />,
  },
  {
    name: 'Mouse',
    icon: <Mouse className="size-4" />,
  },
  {
    name: 'Headphones',
    icon: <Headphones className="size-4" />,
  },
  {
    name: 'Smartphone',
    icon: <Phone className="size-4" />,
  },
];

export const webExtensions = [
  { name: 'uBlock Origin', href: 'https://ublockorigin.com/' },
  {
    name: 'React Developer Tools',
    href: 'https://chromewebstore.google.com/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en',
  },
  { name: 'Wappalyzer', href: 'https://www.wappalyzer.com/' },
  {
    name: 'ColorZilla',
    href: 'https://chromewebstore.google.com/detail/colorzilla/bhlhnicpbhignbdhedgjhgdocnmhomnp?hl=en',
  },
  { name: 'daily.dev', href: 'https://daily.dev/' },
  { name: 'Grammarly', href: 'https://www.grammarly.com/' },
];

export const software = [
  { name: 'Cursor', href: 'https://www.cursor.com/' },
  { name: 'VS Code', href: 'https://code.visualstudio.com/' },
  { name: 'Postman', href: 'https://www.postman.com/' },
  { name: 'Docker Desktop', href: 'https://www.docker.com/products/docker-desktop/' },
  { name: 'Git', href: 'https://git-scm.com/' },
  { name: 'n8n', href: 'https://n8n.io/' },
  { name: 'Canva', href: 'https://www.canva.com/' },
  { name: 'Nginx', href: 'https://nginx.org/' },
  { name: 'PM2', href: 'https://pm2.keymetrics.io/' },
  { name: 'Google Colab', href: 'https://colab.research.google.com/' },
];
