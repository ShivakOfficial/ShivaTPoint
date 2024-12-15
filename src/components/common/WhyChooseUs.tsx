interface Feature {
  id: string;
  text: string;
}

const features: Feature[] = [
  { id: '1', text: 'Comprehensive tutorials with easy-to-understand examples' },
  { id: '2', text: 'Free learning resources for programming and technology' },
  { id: '3', text: 'Regular updates with latest technology trends' },
  { id: '4', text: 'Practice exercises and quizzes for better learning' },
];

export default function WhyChooseUs() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Why Choose ShivaTpoint?</h2>
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        {features.map((feature) => (
          <li key={feature.id}>{feature.text}</li>
        ))}
      </ul>
    </div>
  );
}