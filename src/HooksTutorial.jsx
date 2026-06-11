import { useState, useRef, useCallback, useMemo } from 'react';
import TutorialLayout from './TutorialLayout';

function RefExample() {
  const inputRef = useRef(null);
  const countRef = useRef(0);

  const handleFocus = () => {
    inputRef.current?.focus();
  };

  const handleClick = () => {
    countRef.current += 1;
    console.log('Ref clicked:', countRef.current);
  };

  return (
    <div className="bg-blue-50 p-6 rounded-lg border-2 border-blue-200 space-y-4">
      <div>
        <p className="text-gray-700 mb-2">Focus the input with ref:</p>
        <input
          ref={inputRef}
          type="text"
          placeholder="I'm focused with a ref"
          className="p-2 border rounded w-full"
        />
        <button
          onClick={handleFocus}
          className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Focus Input
        </button>
      </div>
      <div>
        <p className="text-gray-700 mb-2">Count ref: {'{'}(check console){'}'}</p>
        <button
          onClick={handleClick}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Click Me
        </button>
      </div>
    </div>
  );
}

function MemoExample() {
  const [count, setCount] = useState(0);

  const expensiveValue = useMemo(() => {
    console.log('Computing expensive value...');
    return count * count * count;
  }, [count]);

  return (
    <div className="bg-purple-50 p-6 rounded-lg border-2 border-purple-200">
      <p className="text-gray-700 mb-2">Count: {count}</p>
      <p className="text-gray-700 mb-3">Expensive Calculation (cube): {expensiveValue}</p>
      <button
        onClick={() => setCount(count + 1)}
        className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600"
      >
        Increment
      </button>
    </div>
  );
}

export default function HooksTutorial() {
  return (
    <TutorialLayout title="React Hooks" icon="🪝">
      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">What are React Hooks?</h2>
          <p className="text-gray-600 mb-4">
            Hooks are functions that let you "hook into" React features from function components. 
            They were introduced in React 16.8 and allow you to use state and other features without writing class components.
          </p>
          <p className="text-gray-600">
            Hooks make it possible to share stateful logic between components and organize code based on what it does.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Common Hooks</h2>
          <ul className="space-y-3">
            <li className="bg-gray-50 p-4 rounded">
              <strong className="text-indigo-600">useState:</strong>
              <p className="text-gray-600 text-sm mt-1">Add state to function components</p>
            </li>
            <li className="bg-gray-50 p-4 rounded">
              <strong className="text-indigo-600">useEffect:</strong>
              <p className="text-gray-600 text-sm mt-1">Perform side effects in components</p>
            </li>
            <li className="bg-gray-50 p-4 rounded">
              <strong className="text-indigo-600">useRef:</strong>
              <p className="text-gray-600 text-sm mt-1">Access DOM elements directly or store mutable values</p>
            </li>
            <li className="bg-gray-50 p-4 rounded">
              <strong className="text-indigo-600">useContext:</strong>
              <p className="text-gray-600 text-sm mt-1">Subscribe to context values without wrapping JSX</p>
            </li>
            <li className="bg-gray-50 p-4 rounded">
              <strong className="text-indigo-600">useReducer:</strong>
              <p className="text-gray-600 text-sm mt-1">Manage complex state logic with a reducer function</p>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">useRef Hook</h2>
          <p className="text-gray-600 mb-4">
            useRef creates a reference that persists across renders. It's useful for:
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
            <li>Accessing DOM elements directly</li>
            <li>Storing mutable values that don't cause re-renders</li>
            <li>Keeping timers or IDs</li>
          </ul>
          <RefExample />
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">useCallback Hook</h2>
          <p className="text-gray-600 mb-4">
            useCallback memoizes a function so it doesn't change unless its dependencies change. 
            This is useful for optimizing performance when passing callbacks to child components.
          </p>
          <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm overflow-x-auto">
            <p>const memoizedCallback = useCallback(() => {'{'}
              <p className="ml-4">console.log(count);</p>
            {'}'}, [count]);</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">useMemo Hook</h2>
          <p className="text-gray-600 mb-4">
            useMemo memoizes expensive calculations. It only recalculates when dependencies change.
          </p>
          <MemoExample />
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Rules of Hooks</h2>
          <ul className="space-y-3">
            <li className="bg-blue-50 p-4 rounded border-l-4 border-blue-500">
              <strong className="text-blue-700">Only call hooks at the top level:</strong>
              <p className="text-gray-600 text-sm mt-1">Don't call hooks inside loops, conditions, or nested functions</p>
            </li>
            <li className="bg-blue-50 p-4 rounded border-l-4 border-blue-500">
              <strong className="text-blue-700">Only call hooks from React functions:</strong>
              <p className="text-gray-600 text-sm mt-1">Call hooks from React function components or custom hooks</p>
            </li>
            <li className="bg-blue-50 p-4 rounded border-l-4 border-blue-500">
              <strong className="text-blue-700">Use the ESLint plugin:</strong>
              <p className="text-gray-600 text-sm mt-1">Install eslint-plugin-react-hooks to catch mistakes</p>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Hook Patterns</h2>
          <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm overflow-x-auto space-y-4">
            <div>
              <p className="text-yellow-400 mb-2">// Initialize state from function</p>
              <p>const [state, setState] = useState(() => computeExpensiveValue());</p>
            </div>
            <div>
              <p className="text-yellow-400 mb-2">// Multiple effects</p>
              <p>useEffect(() => {...}, []);</p>
              <p>useEffect(() => {...}, [dep1]);</p>
              <p>useEffect(() => {...}, [dep1, dep2]);</p>
            </div>
          </div>
        </section>

        <section className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
          <h3 className="font-bold text-gray-800 mb-2">💡 Key Takeaway</h3>
          <p className="text-gray-700">
            Hooks allow you to use state and other React features in function components. 
            Always follow the rules of hooks and use the ESLint plugin to catch mistakes.
          </p>
        </section>
      </div>
    </TutorialLayout>
  );
}
