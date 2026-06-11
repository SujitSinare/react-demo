import { useState, memo, useMemo, useCallback } from 'react';
import TutorialLayout from './TutorialLayout';

const OptimizedChild = memo(function OptimizedChild({ count, onIncrement }) {
  console.log('OptimizedChild rendered');
  return (
    <div className="bg-green-50 p-4 rounded border border-green-200">
      <p className="text-gray-800">Count: {count}</p>
      <button
        onClick={onIncrement}
        className="mt-2 bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
      >
        Increment
      </button>
    </div>
  );
});

function PerformanceDemo() {
  const [count, setCount] = useState(0);
  const [other, setOther] = useState(0);

  const expensiveValue = useMemo(() => {
    console.log('Computing expensive value...');
    let result = 0;
    for (let i = 0; i < 1000000; i++) {
      result += i;
    }
    return result + count;
  }, [count]);

  const handleIncrement = useCallback(() => {
    setCount(c => c + 1);
  }, []);

  return (
    <div className="bg-blue-50 p-6 rounded-lg border-2 border-blue-200 space-y-4">
      <div>
        <p className="text-gray-800 mb-2">Count: {count}</p>
        <button
          onClick={handleIncrement}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Increment Count
        </button>
      </div>
      <div>
        <p className="text-gray-800 mb-2">Other: {other}</p>
        <button
          onClick={() => setOther(other + 1)}
          className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600"
        >
          Increment Other
        </button>
      </div>
      <div className="bg-white p-3 rounded border">
        <p className="text-sm text-gray-600">Expensive Value: {expensiveValue}</p>
        <p className="text-xs text-gray-500 mt-2">Check console to see which functions are called</p>
      </div>
      <OptimizedChild count={count} onIncrement={handleIncrement} />
    </div>
  );
}

export default function OptimizationTutorial() {
  return (
    <TutorialLayout title="Performance Optimization" icon="⚡">
      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">React Performance Optimization</h2>
          <p className="text-gray-600 mb-4">
            Optimizing React applications means reducing unnecessary renders and speeding up rendering. 
            Most of the time, React is fast enough, but understanding optimization techniques helps when you need them.
          </p>
          <p className="text-gray-600">
            The key is to identify bottlenecks and apply optimizations only where needed.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Identifying Performance Issues</h2>
          <ul className="space-y-3">
            <li className="bg-gray-50 p-4 rounded">
              <strong className="text-indigo-600">React DevTools Profiler:</strong>
              <p className="text-gray-600 text-sm mt-1">Use the Profiler tab to measure component render times</p>
            </li>
            <li className="bg-gray-50 p-4 rounded">
              <strong className="text-indigo-600">Console.log:</strong>
              <p className="text-gray-600 text-sm mt-1">Log when components render to identify unnecessary renders</p>
            </li>
            <li className="bg-gray-50 p-4 rounded">
              <strong className="text-indigo-600">Browser DevTools:</strong>
              <p className="text-gray-600 text-sm mt-1">Use Performance tab to measure JavaScript execution time</p>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">1. React.memo - Prevent Unnecessary Renders</h2>
          <p className="text-gray-600 mb-4">
            React.memo memoizes a component and only re-renders if props change:
          </p>
          <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm overflow-x-auto">
            <p>const MyComponent = memo(function MyComponent(props) {'{'}
              <p className="ml-4">return &lt;div&gt;{'{props.value}'}&lt;/div&gt;;</p>
            {'}'});</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">2. useMemo - Memoize Expensive Computations</h2>
          <p className="text-gray-600 mb-4">
            useMemo caches computation results until dependencies change:
          </p>
          <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm overflow-x-auto">
            <p>const result = useMemo(() => {'{'}
              <p className="ml-4">return expensiveCalculation(data);</p>
            {'}'}, [data]);</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">3. useCallback - Memoize Functions</h2>
          <p className="text-gray-600 mb-4">
            useCallback prevents function recreation on every render:
          </p>
          <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm overflow-x-auto">
            <p>const handleClick = useCallback(() => {'{'}
              <p className="ml-4">console.log('Clicked!');</p>
            {'}'}, []);</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">🎮 Optimization Demo</h2>
          <p className="text-gray-600 mb-4">Open the browser console to see optimization in action:</p>
          <PerformanceDemo />
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Code Splitting & Lazy Loading</h2>
          <p className="text-gray-600 mb-4">
            Load components only when needed to reduce initial bundle size:
          </p>
          <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm overflow-x-auto">
            <p>import {'{'}lazy, Suspense{'}'} from 'react';</p>
            <p className="mt-2">const HeavyComponent = lazy(() => import('./HeavyComponent'));</p>
            <p className="mt-2">&lt;Suspense fallback={'{'}>&lt;div&gt;Loading...&lt;/div&gt;{'}'}&gt;</p>
            <p className="ml-4">&lt;HeavyComponent /&gt;</p>
            <p>&lt;/Suspense&gt;</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Other Performance Techniques</h2>
          <ul className="space-y-3">
            <li className="bg-gray-50 p-4 rounded">
              <strong className="text-indigo-600">Virtual Lists:</strong>
              <p className="text-gray-600 text-sm mt-1">Render only visible items in long lists (react-window, react-virtualized)</p>
            </li>
            <li className="bg-gray-50 p-4 rounded">
              <strong className="text-indigo-600">Debouncing:</strong>
              <p className="text-gray-600 text-sm mt-1">Limit how often event handlers run (useful for search, resize)</p>
            </li>
            <li className="bg-gray-50 p-4 rounded">
              <strong className="text-indigo-600">Key Prop:</strong>
              <p className="text-gray-600 text-sm mt-1">Unique keys help React match list items correctly</p>
            </li>
            <li className="bg-gray-50 p-4 rounded">
              <strong className="text-indigo-600">Image Optimization:</strong>
              <p className="text-gray-600 text-sm mt-1">Use modern formats, lazy load images</p>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">When to Optimize</h2>
          <ul className="space-y-3">
            <li className="bg-yellow-50 p-4 rounded border-l-4 border-yellow-500">
              <strong className="text-yellow-700">✓ When measurements show slowness:</strong>
              <p className="text-gray-600 text-sm mt-1">Use DevTools to identify real bottlenecks</p>
            </li>
            <li className="bg-yellow-50 p-4 rounded border-l-4 border-yellow-500">
              <strong className="text-yellow-700">✓ For large lists:</strong>
              <p className="text-gray-600 text-sm mt-1">Virtualization and memoization help significantly</p>
            </li>
            <li className="bg-red-50 p-4 rounded border-l-4 border-red-500">
              <strong className="text-red-700">✗ Premature optimization:</strong>
              <p className="text-gray-600 text-sm mt-1">Don't optimize without profiling first</p>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Optimization Checklist</h2>
          <ul className="space-y-2 text-gray-700">
            <li>☐ Profile the app with React DevTools</li>
            <li>☐ Identify slow components</li>
            <li>☐ Check if props are changing unnecessarily</li>
            <li>☐ Use React.memo for expensive components</li>
            <li>☐ Use useMemo for expensive computations</li>
            <li>☐ Use useCallback for functions passed to memoized components</li>
            <li>☐ Implement code splitting with lazy()</li>
            <li>☐ Re-profile to verify improvements</li>
          </ul>
        </section>

        <section className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
          <h3 className="font-bold text-gray-800 mb-2">💡 Key Takeaway</h3>
          <p className="text-gray-700 mb-3">
            React is fast by default. Always measure before optimizing. Most performance issues come from:
          </p>
          <ul className="text-gray-700 space-y-1">
            <li>• Unnecessary component re-renders</li>
            <li>• Expensive computations in render</li>
            <li>• Large bundles that take time to load</li>
          </ul>
        </section>
      </div>
    </TutorialLayout>
  );
}
