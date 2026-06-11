import { useState, useEffect } from 'react';
import TutorialLayout from '../layout/TutorialLayout';

// Custom Hooks
function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(initialValue);

  return { count, increment, decrement, reset };
}

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setData(json);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
}

function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValue];
}

// Example Component Using Custom Hooks
function CounterDemo() {
  const counter = useCounter(0);

  return (
    <div className="bg-blue-50 p-6 rounded-lg border-2 border-blue-200">
      <p className="text-3xl font-bold text-blue-600 mb-4">{counter.count}</p>
      <div className="flex gap-2">
        <button
          onClick={counter.decrement}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          -
        </button>
        <button
          onClick={counter.reset}
          className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
        >
          Reset
        </button>
        <button
          onClick={counter.increment}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          +
        </button>
      </div>
    </div>
  );
}

function LocalStorageDemo() {
  const [name, setName] = useLocalStorage('name', 'Guest');

  return (
    <div className="bg-purple-50 p-6 rounded-lg border-2 border-purple-200">
      <p className="text-gray-800 mb-3">Welcome, <strong>{name}</strong>!</p>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
        className="w-full p-2 border rounded mb-3"
      />
      <p className="text-sm text-gray-600">Data is saved to localStorage automatically</p>
    </div>
  );
}

export default function CustomHooksTutorial() {
  return (
    <TutorialLayout title="Custom Hooks" icon="✨">
      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">What are Custom Hooks?</h2>
          <p className="text-gray-600 mb-4">
            Custom Hooks are JavaScript functions that use one or more React Hooks. They let you extract
            component logic into reusable functions. A custom hook is just a function whose name starts with "use".
          </p>
          <p className="text-gray-600">
            Custom Hooks allow you to share stateful logic between components without changing their architecture.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Building Custom Hooks</h2>
          <p className="text-gray-600 mb-4">
            To create a custom hook, follow these simple steps:
          </p>
          <ol className="list-decimal list-inside text-gray-600 space-y-2 mb-4">
            <li>Create a JavaScript function</li>
            <li>Name it starting with "use" (e.g., useCounter)</li>
            <li>Call React Hooks inside it</li>
            <li>Return the logic you want to share</li>
          </ol>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">useCounter Hook Example</h2>
          <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm overflow-x-auto mb-4">
            <p>function useCounter(initialValue = 0) {'{'}
              <p className="ml-4">const [count, setCount] = useState(initialValue);</p>
              <p className="ml-4 mt-2">
                const increment = () =&gt; setCount(count + 1);
              </p>
              <p className="ml-4">
                const decrement = () =&gt; setCount(count - 1);
              </p>
              <p className="ml-4">
                const reset = () =&gt; setCount(initialValue);
              </p>
              <p className="ml-4 mt-2">return {'{'}count, increment, decrement, reset{'}'};</p>
              {'}'}
            </p>
          </div>
          <CounterDemo />
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">useFetch Hook Example</h2>
          <p className="text-gray-600 mb-4">
            A common custom hook for fetching data:
          </p>
          <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm overflow-x-auto">
            <p>function useFetch(url) {'{'}
              <p className="ml-4">const [data, setData] = useState(null);</p>
              <p className="ml-4">const [loading, setLoading] = useState(true);</p>
              <p className="ml-4">const [error, setError] = useState(null);</p>
              <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
                {`useEffect(() => {
  // Fetch logic here
}, [url]);`}
              </pre>
              <p className="ml-4 mt-2">return {'{'}data, loading, error{'}'};</p>
              {'}'}
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">useLocalStorage Hook Example</h2>
          <p className="text-gray-600 mb-4">
            Persist state to browser localStorage automatically:
          </p>
          <LocalStorageDemo />
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Popular Custom Hooks Patterns</h2>
          <ul className="space-y-3">
            <li className="bg-gray-50 p-4 rounded">
              <strong className="text-indigo-600">useAsync:</strong>
              <p className="text-gray-600 text-sm mt-1">Handle async operations and their states</p>
            </li>
            <li className="bg-gray-50 p-4 rounded">
              <strong className="text-indigo-600">useDebounce:</strong>
              <p className="text-gray-600 text-sm mt-1">Debounce values (useful for search)</p>
            </li>
            <li className="bg-gray-50 p-4 rounded">
              <strong className="text-indigo-600">useToggle:</strong>
              <p className="text-gray-600 text-sm mt-1">Toggle a boolean state on and off</p>
            </li>
            <li className="bg-gray-50 p-4 rounded">
              <strong className="text-indigo-600">useForm:</strong>
              <p className="text-gray-600 text-sm mt-1">Manage form state and submission</p>
            </li>
            <li className="bg-gray-50 p-4 rounded">
              <strong className="text-indigo-600">usePrevious:</strong>
              <p className="text-gray-600 text-sm mt-1">Get the previous value of a prop or state</p>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Custom Hooks Rules</h2>
          <ul className="space-y-3">
            <li className="bg-blue-50 p-4 rounded border-l-4 border-blue-500">
              <strong className="text-blue-700">✓ Name must start with "use":</strong>
              <p className="text-gray-600 text-sm mt-1">React won't treat it as a hook otherwise</p>
            </li>
            <li className="bg-blue-50 p-4 rounded border-l-4 border-blue-500">
              <strong className="text-blue-700">✓ Can call other hooks:</strong>
              <p className="text-gray-600 text-sm mt-1">Custom hooks can use useState, useEffect, etc.</p>
            </li>
            <li className="bg-blue-50 p-4 rounded border-l-4 border-blue-500">
              <strong className="text-blue-700">✓ Share stateful logic:</strong>
              <p className="text-gray-600 text-sm mt-1">Each call gets its own independent state</p>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Creating Reusable Hooks Library</h2>
          <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm overflow-x-auto">
            <p className="text-yellow-400 mb-2">// hooks/useFormInput.js</p>
            <p>export function useFormInput(initialValue) {'{'}
              <p className="ml-4">const [value, setValue] = useState(initialValue);</p>
              <p className="ml-4">return {'{'}value, setValue{'}'};</p>
              {'}'}
            </p>
            <p className="text-yellow-400 mb-2 mt-3">// In your component</p>
            <p>import {'{'}useFormInput{'}'} from './hooks';</p>
            <p>const name = useFormInput('');</p>
          </div>
        </section>

        <section className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
          <h3 className="font-bold text-gray-800 mb-2">💡 Key Takeaway</h3>
          <p className="text-gray-700">
            Custom Hooks are powerful tools for extracting and reusing component logic. They make your code
            more modular and easier to maintain across multiple components.
          </p>
        </section>
      </div>
    </TutorialLayout>
  );
}
