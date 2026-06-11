import { useState } from 'react';
import TutorialLayout from '../layout/TutorialLayout';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="text-center bg-purple-50 p-6 rounded-lg border-2 border-purple-200">
      <p className="text-3xl font-bold text-purple-600 mb-4">{count}</p>
      <div className="flex gap-2 justify-center">
        <button
          onClick={() => setCount(count - 1)}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
        >
          Decrease
        </button>
        <button
          onClick={() => setCount(count + 1)}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
        >
          Increase
        </button>
        <button
          onClick={() => setCount(0)}
          className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition"
        >
          Reset
        </button>
      </div>
    </div>
  );
}

function UserForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  return (
    <div className="bg-blue-50 p-6 rounded-lg border-2 border-blue-200">
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full p-2 border rounded mb-3"
      />
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full p-2 border rounded mb-3"
      />
      {name && <p className="text-gray-700"><strong>Hello, {name}!</strong></p>}
      {email && <p className="text-gray-700"><strong>Email:</strong> {email}</p>}
    </div>
  );
}

export default function StateTutorial() {
  return (
    <TutorialLayout title="State (useState)" icon="🔄">
      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">What is State?</h2>
          <p className="text-gray-600 mb-4">
            State is data that changes over time in your component. Unlike props which come from the parent,
            state is managed within the component itself and can be updated by user interactions or other events.
          </p>
          <p className="text-gray-600">
            The useState Hook is the modern way to add state to function components. It was introduced in React 16.8.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Using useState Hook</h2>
          <p className="text-gray-600 mb-4">
            useState returns an array with two elements: the current state value and a function to update it.
          </p>
          <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm overflow-x-auto">
            <p>import {'{'}useState{'}'} from 'react';</p>
            <p className="mt-2">function Counter() {'{'}
              <p className="ml-4">const [count, setCount] = useState(0);</p>
              <p className="mt-2 ml-4">return (</p>
              <p className="ml-8">&lt;div&gt;</p>
              <p className="ml-12">&lt;p&gt;Count: {'{count}'}&lt;/p&gt;</p>
              <p className="ml-12">
                &lt;button onClick=&#123;() =&gt; setCount(count + 1)&#125;&gt;+&lt;/button&gt;
              </p>
              <p className="ml-8">&lt;/div&gt;</p>
              <p className="ml-4">);</p>
              {'}'}
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">🎮 Counter Example</h2>
          <Counter />
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">State with Objects and Arrays</h2>
          <p className="text-gray-600 mb-4">
            You can use state for any data type - objects, arrays, strings, numbers, etc.
          </p>
          <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm overflow-x-auto">
            <p className="text-yellow-400 mb-2">// Object state</p>
            <p>const [user, setUser] = useState({'{'}name: '', email: ''{'}'});</p>
            <p className="mt-3 text-yellow-400">// Array state</p>
            <p>const [items, setItems] = useState([]);</p>
            <p className="mt-3 text-yellow-400">// Always create new objects/arrays</p>
            <p>setUser({'{'}...user, name: 'Alice'{'}'});</p>
            <p>setItems([...items, newItem]);</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Form with Multiple Inputs</h2>
          <UserForm />
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">State Rules</h2>
          <ul className="space-y-3">
            <li className="bg-gray-50 p-4 rounded">
              <strong className="text-indigo-600">Never modify state directly:</strong>
              <p className="text-gray-600 text-sm mt-1">Always use the setter function (e.g., setCount())</p>
              <div className="bg-red-50 p-2 rounded mt-2 font-mono text-xs text-red-700">
                ❌ count = count + 1; // Wrong!
              </div>
              <div className="bg-green-50 p-2 rounded font-mono text-xs text-green-700">
                ✓ setCount(count + 1); // Correct!
              </div>
            </li>
            <li className="bg-gray-50 p-4 rounded">
              <strong className="text-indigo-600">State updates are asynchronous:</strong>
              <p className="text-gray-600 text-sm mt-1">React may batch multiple state updates together</p>
            </li>
            <li className="bg-gray-50 p-4 rounded">
              <strong className="text-indigo-600">Create new objects/arrays:</strong>
              <p className="text-gray-600 text-sm mt-1">Don't mutate existing state; create new ones instead</p>
            </li>
            <li className="bg-gray-50 p-4 rounded">
              <strong className="text-indigo-600">State is isolated:</strong>
              <p className="text-gray-600 text-sm mt-1">Each component instance has its own state</p>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">State vs Props</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
              <h3 className="font-bold text-blue-900 mb-2">State</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>✓ Managed within component</li>
                <li>✓ Can be updated</li>
                <li>✓ Causes re-renders</li>
                <li>✓ Private to component</li>
              </ul>
            </div>
            <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
              <h3 className="font-bold text-green-900 mb-2">Props</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>✓ Passed from parent</li>
                <li>✗ Read-only</li>
                <li>✓ Causes re-renders</li>
                <li>✓ Shared with parent</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
          <h3 className="font-bold text-gray-800 mb-2">💡 Key Takeaway</h3>
          <p className="text-gray-700">
            State is how React components remember information and respond to user interactions. Use the useState Hook to add state to your components.
          </p>
        </section>
      </div>
    </TutorialLayout>
  );
}
