import { FaJava, FaPython, FaJs, FaDatabase } from 'react-icons/fa';
import { Tutorial } from '../types/tutorial';

export const featuredTutorials: Tutorial[] = [
  {
    id: 'java',
    title: 'Java Tutorial',
    description:
      'Learn Java programming with our comprehensive guide covering basics to advanced concepts.',
    icon: FaJava,
    path: '/java',
  },
  {
    id: 'python',
    title: 'Python Tutorial',
    description:
      'Master Python programming with hands-on examples and practical applications.',
    icon: FaPython,
    path: '/python',
  },
  {
    id: 'javascript',
    title: 'JavaScript Tutorial',
    description:
      'Explore modern JavaScript from fundamentals to advanced topics and frameworks.',
    icon: FaJs,
    path: '/javascript',
  },
  {
    id: 'sql',
    title: 'SQL Tutorial',
    description:
      'Learn database management and SQL queries with practical examples.',
    icon: FaDatabase,
    path: '/sql',
  },
];
