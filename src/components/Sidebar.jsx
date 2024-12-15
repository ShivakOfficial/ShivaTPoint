import { Link } from 'react-router-dom';

const categories = [
  { name: 'Java', path: '/java' },
  { name: 'Python', path: '/python' },
  { name: 'JavaScript', path: '/javascript' },
  { name: 'SQL', path: '/sql' },
  { name: 'Data Structures', path: '/data-structures' },
  { name: 'Web Development', path: '/web-development' },
  { name: 'Machine Learning', path: '/machine-learning' },
];

export default function Sidebar() {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Categories</h2>
      <ul className="space-y-2">
        {categories.map((category) => (
          <li key={category.path}>
            <Link
              to={category.path}
              className="block p-2 hover:bg-gray-100 rounded-md transition-colors"
            >
              {category.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}