import { Link } from 'react-router-dom';

interface NavLinksProps {
  className?: string;
}

export default function NavLinks({ className = '' }: NavLinksProps) {
  return (
    <div className={className}>
      <Link to="/tutorials" className="hover:text-gray-200">Tutorials</Link>
      <Link to="/jobs" className="hover:text-gray-200">Jobs</Link>
      <Link to="/courses" className="hover:text-gray-200">Courses</Link>
    </div>
  );
}