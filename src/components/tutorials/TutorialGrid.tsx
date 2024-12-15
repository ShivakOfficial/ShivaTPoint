import { Tutorial } from '../../types/tutorial';
import TutorialCard from './TutorialCard';

interface TutorialGridProps {
  tutorials: Tutorial[];
}

export default function TutorialGrid({ tutorials }: TutorialGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {tutorials.map((tutorial) => (
        <TutorialCard key={tutorial.id} tutorial={tutorial} />
      ))}
    </div>
  );
}