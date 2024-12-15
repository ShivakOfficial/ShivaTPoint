import { FaJava, FaPython, FaJs, FaDatabase } from 'react-icons/fa';
import TutorialCard from '../components/TutorialCard';
import Sidebar from '../components/Sidebar';

const featuredTutorials = [
  {
    title: 'Java Tutorial',
    description: 'Learn Java programming with our comprehensive guide covering basics to advanced concepts.',
    icon: FaJava,
  },
  {
    title: 'Python Tutorial',
    description: 'Master Python programming with hands-on examples and practical applications.',
    icon: FaPython,
  },
  {
    title: 'JavaScript Tutorial',
    description: 'Explore modern JavaScript from fundamentals to advanced topics and frameworks.',
    icon: FaJs,
  },
  {
    title: 'SQL Tutorial',
    description: 'Learn database management and SQL queries with practical examples.',
    icon: FaDatabase,
  },
];

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="md:col-span-1">
          <Sidebar />
        </div>
        
        <div className="md:col-span-3">
          <h1 className="text-3xl font-bold mb-8">Welcome to ShivaTpoint</h1>
          
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">Featured Tutorials</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {featuredTutorials.map((tutorial) => (
                <TutorialCard
                  key={tutorial.title}
                  title={tutorial.title}
                  description={tutorial.description}
                  icon={tutorial.icon}
                />
              ))}
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Why Choose ShivaTpoint?</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Comprehensive tutorials with easy-to-understand examples</li>
              <li>Free learning resources for programming and technology</li>
              <li>Regular updates with latest technology trends</li>
              <li>Practice exercises and quizzes for better learning</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}