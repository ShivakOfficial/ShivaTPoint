import TutorialGrid from '../components/tutorials/TutorialGrid';
import CategoryList from '../components/categories/CategoryList';
import WhyChooseUs from '../components/common/WhyChooseUs';
import { categories } from '../data/categories';
import { featuredTutorials } from '../data/tutorials';

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="md:col-span-1">
          <CategoryList categories={categories} />
        </div>
        
        <div className="md:col-span-3">
          <h1 className="text-3xl font-bold mb-8">Welcome to ShivaTpoint</h1>
          
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">Featured Tutorials</h2>
            <TutorialGrid tutorials={featuredTutorials} />
          </div>

          <WhyChooseUs />
        </div>
      </div>
    </div>
  );
}