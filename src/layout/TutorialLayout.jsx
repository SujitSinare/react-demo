import { Link } from 'react-router-dom';

export default function TutorialLayout({ title, icon, children }) {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-5xl">{icon}</span>
            <h1 className="text-4xl font-bold text-gray-800">{title}</h1>
          </div>
          <p className="text-gray-600">Master this React concept with examples and best practices</p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          {children}
        </div>

        {/* Code Examples */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">📝 Key Takeaways</h2>
          <ul className="space-y-2 text-gray-600">
            <li>✓ Understand the concept thoroughly</li>
            <li>✓ Practice with the examples provided</li>
            <li>✓ Try modifying the code to experiment</li>
            <li>✓ Apply the pattern in your own projects</li>
          </ul>
        </div>

        {/* Navigation */}
        <div className="flex gap-4">
          <Link
            to="/"
            className="flex-1 bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition text-center"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
