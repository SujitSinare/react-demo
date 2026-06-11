import { Link } from 'react-router-dom';

const concepts = [
  { path: '/jsx', title: '📝 JSX Basics', description: 'Learn JSX syntax and how React converts JSX to JavaScript' },
  { path: '/components', title: '🧩 Components', description: 'Understand function and class components' },
  { path: '/props', title: '📦 Props', description: 'Pass data between components using props' },
  { path: '/state', title: '🔄 State (useState)', description: 'Manage component state with React hooks' },
  { path: '/effects', title: '⚙️ Effects (useEffect)', description: 'Handle side effects in your components' },
  { path: '/conditional', title: '🔀 Conditional Rendering', description: 'Display different content based on conditions' },
  { path: '/lists', title: '📋 Lists & Keys', description: 'Render lists efficiently with proper keys' },
  { path: '/forms', title: '📝 Forms & Input', description: 'Handle form inputs and submissions' },
  { path: '/hooks', title: '🪝 React Hooks', description: 'Master all React hooks and their use cases' },
  { path: '/context', title: '🌐 Context API', description: 'Share state across components without prop drilling' },
  { path: '/custom-hooks', title: '✨ Custom Hooks', description: 'Create reusable hook logic' },
  { path: '/optimization', title: '⚡ Performance Optimization', description: 'Optimize React app performance' },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            ⚛️ React Concepts Tutorial
          </h1>
          <p className="text-xl text-gray-600 mb-2">
            Master React fundamentals with interactive examples
          </p>
          <p className="text-gray-500">
            Complete guide covering all essential React concepts
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {concepts.map((concept) => (
            <Link
              key={concept.path}
              to={concept.path}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all hover:scale-105 hover:bg-indigo-50 cursor-pointer border-l-4 border-indigo-500"
            >
              <h2 className="text-lg font-semibold text-gray-800 mb-2">
                {concept.title}
              </h2>
              <p className="text-gray-600 text-sm mb-3">
                {concept.description}
              </p>
              <p className="text-indigo-600 text-sm font-medium">Learn more →</p>
            </Link>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            📚 About This Tutorial
          </h2>
          <p className="text-gray-600 mb-4">
            This interactive tutorial covers all fundamental React concepts. Each section includes:
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <li className="flex gap-3">
              <span className="text-2xl">📖</span>
              <div>
                <strong className="text-gray-800">Explanation:</strong>
                <p className="text-gray-600 text-sm">Clear understanding of the concept</p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="text-2xl">💻</span>
              <div>
                <strong className="text-gray-800">Code Examples:</strong>
                <p className="text-gray-600 text-sm">Practical working code snippets</p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="text-2xl">✅</span>
              <div>
                <strong className="text-gray-800">Best Practices:</strong>
                <p className="text-gray-600 text-sm">How to use patterns effectively</p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="text-2xl">🎮</span>
              <div>
                <strong className="text-gray-800">Live Demo:</strong>
                <p className="text-gray-600 text-sm">Interactive examples to explore</p>
              </div>
            </li>
          </ul>
          <p className="text-gray-600 bg-blue-50 p-4 rounded border-l-4 border-blue-500">
            💡 <strong>Tip:</strong> It's recommended to follow the concepts from top to bottom if you're new to React. Each concept builds on previous knowledge.
          </p>
        </div>

        <div className="bg-indigo-50 rounded-lg p-8 border-2 border-indigo-200">
          <h3 className="text-xl font-bold text-indigo-900 mb-3">🚀 Getting Started</h3>
          <ol className="text-indigo-800 space-y-2 list-decimal list-inside">
            <li>Start with JSX Basics to understand React's syntax</li>
            <li>Learn Components to build reusable UI pieces</li>
            <li>Master Props and State for data management</li>
            <li>Explore Hooks for modern React patterns</li>
            <li>Optimize your application for better performance</li>
          </ol>
        </div>
      </div>
    </div>
  );
}
