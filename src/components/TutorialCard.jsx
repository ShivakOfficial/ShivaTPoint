export default function TutorialCard({ title, description, icon: Icon }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className="flex items-center mb-4">
        {Icon && <Icon className="h-8 w-8 text-primary mr-3" />}
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <p className="text-gray-600">{description}</p>
      <button className="mt-4 text-primary hover:text-secondary font-medium">
        Learn More →
      </button>
    </div>
  );
}