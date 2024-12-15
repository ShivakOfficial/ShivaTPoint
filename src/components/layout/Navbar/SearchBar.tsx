import { FaSearch } from 'react-icons/fa';

interface SearchBarProps {
  className?: string;
}

export default function SearchBar({ className = '' }: SearchBarProps) {
  return (
    <div className={`relative ${className}`}>
      <input
        type="text"
        placeholder="Search tutorials..."
        className="py-1 px-4 pr-10 rounded-md text-gray-900 w-full"
      />
      <FaSearch className="absolute right-3 top-2 text-gray-500" />
    </div>
  );
}