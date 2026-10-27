import { SkillCategory } from '@/types';

export const skills: SkillCategory[] = [
  {
    name: 'Frontend Development',
    icon: 'CodeXml',
    skills: ['Next.js 16', 'React.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'HTML5', 'CSS3', 'Framer Motion'],
  },
  {
    name: 'System Admin & DevOps',
    icon: 'Terminal',
    skills: [
      'Linux Server (Ubuntu/Debian)',
      'Docker',
      'Docker Compose',
      'Caddy Reverse Proxy',
      'Mosquitto MQTT Broker',
      'PgBouncer',
      'Git & GitHub',
      'CI/CD',
    ],
  },
  {
    name: 'Backend & IoT Engineering',
    icon: 'Server',
    skills: ['FastAPI', 'Node.js', 'Express.js', 'MQTT Protocol', 'WebSocket', 'RESTful APIs', 'Firebase'],
  },
  {
    name: 'Databases & Storage',
    icon: 'Database',
    skills: ['PostgreSQL', 'MySQL', 'SQL', 'Database Design & Optimization', 'SQLAlchemy'],
  },
  {
    name: 'AI & Data Science',
    icon: 'Brain',
    skills: [
      'Python',
      'Pandas',
      'NumPy',
      'Machine Learning',
      'CNN (Deep Learning)',
      'IndoBERT',
      'OpenCV',
      'EasyOCR / CRNN',
      'YOLO',
    ],
  },
  {
    name: 'Data Visualization',
    icon: 'Monitor',
    skills: ['Google Looker Studio', 'Power BI', 'Microsoft Excel', 'Google Sheets', 'Chart.js', 'Recharts'],
  },
];
