import SearchBar from './SearchBar';
import NavLinks from './NavLinks';

interface MobileMenuProps {
  isOpen: boolean;
}

export default function MobileMenu({ isOpen }: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="md:hidden pb-4">
      <SearchBar className="my-4" />
      <NavLinks className="flex flex-col space-y-2" />
    </div>
  );
}