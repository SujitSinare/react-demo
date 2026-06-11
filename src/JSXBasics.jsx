import { useState } from 'react';
import TutorialLayout from './TutorialLayout';

export default function JSXBasics() {
  const [count, setCount] = useState(0);

  return (
    <TutorialLayout title="JSX Basics" icon="📝">
      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">What is JSX?</h2>
          <p className="text-gray-600 mb-4">
            JSX is a syntax extension to JavaScript. It lets you write HTML-like code inside JavaScript files. 
            JSX produces React "elements" and looks similar to HTML/XML.
          </p>
          <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
            <p className="text-gray-700 font-mono text-sm">
              const element = &lt;h1&gt;Hello, React!&lt;/h1&gt;;
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">JSX Rules</h2>
          <ul className="space-y-3">
            <li className="bg-gray-50 p-4 rounded">
              <strong className="text-indigo-600">Single Root Element:</strong>
              <p className="text-gray-600 text-sm mt-1">Must return only one root element</p>
              <p className="text-gray-600 font-mono text-sm bg-white p-2 rounded mt-2 border">
                &lt;&gt;...&lt;/&gt; or &lt;div&gt;...&lt;/div&gt;
              </p>
            </li>
            <li className="bg-gray-50 p-4 rounded">
              <strong className="text-indigo-600">Class Names:</strong>
              <p className="text-gray-600 text-sm mt-1">Use className instead of class</p>
              <p className="text-gray-600 font-mono text-sm bg-white p-2 rounded mt-2 border">
                &lt;div className="container"&gt;...&lt;/div&gt;
              </p>
            </li>
            <li className="bg-gray-50 p-4 rounded">
              <strong className="text-indigo-600">Self-closing Tags:</strong>
              <p className="text-gray-600 text-sm mt-1">Must close all tags, even single elements</p>
              <p className="text-gray-600 font-mono text-sm bg-white p-2 rounded mt-2 border">
                &lt;img src="..." /&gt; or &lt;br /&gt;
              </p>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">JavaScript Expressions in JSX</h2>
          <p className="text-gray-600 mb-4">
            You can embed any JavaScript expression inside JSX using curly braces {'{}'}.
          </p>
          <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500 font-mono text-sm space-y-2">
            <p>const name = "Alice";</p>
            <p>const element = &lt;h1&gt;Hello, {'{name}'}&lt;/h1&gt;;</p>
            <p>const count = 5;</p>
            <p>const message = &lt;p&gt;You have {'{count}'} items&lt;/p&gt;;</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">🎮 Interactive Demo</h2>
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-8 rounded-lg border-2 border-purple-200">
            <div className="text-center">
              <p className="text-lg mb-4">Count: {count}</p>
              <button
                onClick={() => setCount(count + 1)}
                className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition"
              >
                Increment
              </button>
              <p className="text-gray-600 text-sm mt-4">
                This button is created using JSX: &lt;button&gt; ... &lt;/button&gt;
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Code Examples</h2>
          <div className="space-y-4">
            <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm overflow-x-auto">
              <p>// Basic JSX</p>
              <p className="mt-2">const title = &lt;h1&gt;Welcome to React&lt;/h1&gt;;</p>
              <p className="mt-2">// JSX with attributes</p>
              <p>const link = &lt;a href="https://react.dev"&gt;React Docs&lt;/a&gt;;</p>
              <p className="mt-2">// JSX with variables</p>
              <p>const name = "Bob";</p>
              <p>const greeting = &lt;h1&gt;Hello, {'{name}'}&lt;/h1&gt;;</p>
            </div>
          </div>
        </section>

        <section className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
          <h3 className="font-bold text-gray-800 mb-2">💡 Pro Tips</h3>
          <ul className="text-gray-700 space-y-2">
            <li>• JSX gets compiled to React.createElement() calls</li>
            <li>• JSX is not valid JavaScript - it needs a transpiler like Babel</li>
            <li>• Use parentheses for multi-line JSX</li>
            <li>• Attributes can be any JavaScript expression in curly braces</li>
          </ul>
        </section>
      </div>
    </TutorialLayout>
  );
}
