import { useState } from 'react';
import TutorialLayout from './TutorialLayout';

function LoginStatus() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="bg-blue-50 p-6 rounded-lg border-2 border-blue-200">
      {isLoggedIn ? (
        <div>
          <p className="text-green-600 font-semibold mb-3">✓ Welcome back, User!</p>
          <button
            onClick={() => setIsLoggedIn(false)}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Logout
          </button>
        </div>
      ) : (
        <div>
          <p className="text-gray-700 mb-3">Please log in first</p>
          <button
            onClick={() => setIsLoggedIn(true)}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Login
          </button>
        </div>
      )}
    </div>
  );
}

function ItemList() {
  const [items, setItems] = useState([
    { id: 1, name: 'Laptop', inStock: true },
    { id: 2, name: 'Phone', inStock: false },
    { id: 3, name: 'Tablet', inStock: true },
  ]);

  return (
    <div className="bg-purple-50 p-6 rounded-lg border-2 border-purple-200">
      <h3 className="font-semibold text-gray-800 mb-4">Product Inventory</h3>
      {items.length > 0 ? (
        <ul className="space-y-2">
          {items.map(item => (
            <li key={item.id} className="flex justify-between items-center p-3 bg-white rounded border">
              <span className="text-gray-800">{item.name}</span>
              {item.inStock ? (
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded text-sm">In Stock</span>
              ) : (
                <span className="bg-red-100 text-red-800 px-3 py-1 rounded text-sm">Out of Stock</span>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">No items available</p>
      )}
    </div>
  );
}

export default function ConditionalTutorial() {
  return (
    <TutorialLayout title="Conditional Rendering" icon="🔀">
      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">What is Conditional Rendering?</h2>
          <p className="text-gray-600 mb-4">
            Conditional rendering means displaying different content based on certain conditions. 
            You can use JavaScript conditionals to create different JSX elements.
          </p>
          <p className="text-gray-600">
            React uses the same conditions as JavaScript: if/else, ternary operators, and logical operators.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Methods of Conditional Rendering</h2>
          <ul className="space-y-3">
            <li className="bg-gray-50 p-4 rounded">
              <strong className="text-indigo-600">If/Else Statements:</strong>
              <p className="text-gray-600 text-sm mt-1">Traditional approach using if/else</p>
            </li>
            <li className="bg-gray-50 p-4 rounded">
              <strong className="text-indigo-600">Ternary Operator:</strong>
              <p className="text-gray-600 text-sm mt-1">Inline conditional - condition ? true : false</p>
            </li>
            <li className="bg-gray-50 p-4 rounded">
              <strong className="text-indigo-600">Logical AND (&&):</strong>
              <p className="text-gray-600 text-sm mt-1">Show content only if condition is true</p>
            </li>
            <li className="bg-gray-50 p-4 rounded">
              <strong className="text-indigo-600">Switch Statements:</strong>
              <p className="text-gray-600 text-sm mt-1">For multiple possible conditions</p>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Ternary Operator (Most Common)</h2>
          <p className="text-gray-600 mb-4">
            The ternary operator is the most popular way to do inline conditional rendering in JSX:
          </p>
          <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm overflow-x-auto">
            <p>{'{'}isLoggedIn ? &lt;h1&gt;Welcome&lt;/h1&gt; : &lt;h1&gt;Please Login&lt;/h1&gt;{'}'}</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Logical AND Operator (&&)</h2>
          <p className="text-gray-600 mb-4">
            Use && when you want to show something only if a condition is true:
          </p>
          <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm overflow-x-auto">
            <p>{'{'}isLoggedIn && &lt;p&gt;Welcome back!&lt;/p&gt;{'}'}</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">🎮 Interactive Examples</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-gray-800 mb-3">Login/Logout Example</h3>
              <LoginStatus />
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-3">Conditional Styling & Display</h3>
              <ItemList />
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Code Examples</h2>
          <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm overflow-x-auto space-y-4">
            <div>
              <p className="text-yellow-400 mb-2">// Ternary operator</p>
              <p>{'{'}status === 'loading' ? &lt;Spinner /&gt; : &lt;Content /&gt;{'}'}</p>
            </div>
            <div>
              <p className="text-yellow-400 mb-2">// Logical AND</p>
              <p>{'{'}errors.length > 0 && &lt;ErrorAlert errors={'{errors}'} /&gt;{'}'}</p>
            </div>
            <div>
              <p className="text-yellow-400 mb-2">// If/else statement</p>
              <p>if (isLoading) {'{'}
                <p className="ml-4">return &lt;div&gt;Loading...&lt;/div&gt;;</p>
              {'}'}
              <p>return &lt;div&gt;Content&lt;/div&gt;;</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Common Patterns</h2>
          <ul className="space-y-3">
            <li className="bg-gray-50 p-4 rounded">
              <strong className="text-indigo-600">Loading State:</strong>
              <p className="text-gray-600 text-sm mt-1">Show spinner while data loads, then show content</p>
            </li>
            <li className="bg-gray-50 p-4 rounded">
              <strong className="text-indigo-600">Authentication:</strong>
              <p className="text-gray-600 text-sm mt-1">Show login form or user dashboard based on auth state</p>
            </li>
            <li className="bg-gray-50 p-4 rounded">
              <strong className="text-indigo-600">Error Display:</strong>
              <p className="text-gray-600 text-sm mt-1">Show error message only if error exists</p>
            </li>
            <li className="bg-gray-50 p-4 rounded">
              <strong className="text-indigo-600">Empty States:</strong>
              <p className="text-gray-600 text-sm mt-1">Show "no data" message when list is empty</p>
            </li>
          </ul>
        </section>

        <section className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
          <h3 className="font-bold text-gray-800 mb-2">💡 Best Practices</h3>
          <ul className="text-gray-700 space-y-2">
            <li>• Use ternary operator for simple two-way conditionals</li>
            <li>• Use && for showing/hiding single elements</li>
            <li>• Use if/else outside of JSX for complex logic</li>
            <li>• Avoid nested ternaries - they become hard to read</li>
          </ul>
        </section>
      </div>
    </TutorialLayout>
  );
}
