import { useState, useEffect } from 'react';
import TutorialLayout from './TutorialLayout';

function WindowSize() {
  const [size, setSize] = useState({ width: window.innerWidth, height: window.innerHeight });

  useEffect(() => {
    const handleResize = () => {
      setSize({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="bg-blue-50 p-6 rounded-lg border-2 border-blue-200">
      <p className="text-gray-800">
        <strong>Window Size:</strong> {size.width} x {size.height}px
      </p>
      <p className="text-sm text-gray-600 mt-2">Try resizing your window to see the effect in action!</p>
    </div>
  );
}

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(s => s + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-purple-50 p-6 rounded-lg border-2 border-purple-200">
      <p className="text-3xl font-bold text-purple-600 mb-2">{seconds}s</p>
      <p className="text-sm text-gray-600">This timer started when the component mounted using useEffect</p>
    </div>
  );
}

export default function EffectsTutorial() {
  return (
    <TutorialLayout title="Effects (useEffect)" icon="⚙️">
      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">What is useEffect?</h2>
          <p className="text-gray-600 mb-4">
            useEffect lets you perform side effects in function components. Side effects are things like 
            fetching data, setting up subscriptions, or manually changing the DOM.
          </p>
          <p className="text-gray-600">
            useEffect runs after the component renders and also when dependencies change. It's similar to 
            componentDidMount, componentDidUpdate, and componentWillUnmount combined.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Basic useEffect Syntax</h2>
          <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm overflow-x-auto">
            <p>useEffect(() => {'{'}
              <p className="ml-4">// This code runs after component renders</p>
              <p className="ml-4">console.log('Component mounted or updated!');</p>
            {'}'}, []);</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Dependency Array</h2>
          <ul className="space-y-3">
            <li className="bg-gray-50 p-4 rounded">
              <div className="font-mono text-sm text-gray-700 mb-2">useEffect(() => {'{}'}, [])</div>
              <strong className="text-indigo-600">No dependencies:</strong>
              <p className="text-gray-600 text-sm mt-1">Runs only once when component mounts</p>
            </li>
            <li className="bg-gray-50 p-4 rounded">
              <div className="font-mono text-sm text-gray-700 mb-2">useEffect(() => {'{}'}, [count])</div>
              <strong className="text-indigo-600">Specific dependencies:</strong>
              <p className="text-gray-600 text-sm mt-1">Runs when count changes</p>
            </li>
            <li className="bg-gray-50 p-4 rounded">
              <div className="font-mono text-sm text-gray-700 mb-2">useEffect(() => {'{}'})</div>
              <strong className="text-indigo-600">No array:</strong>
              <p className="text-gray-600 text-sm mt-1">Runs after every render (usually not recommended)</p>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">🎮 Examples</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Window Resize Listener</h3>
              <WindowSize />
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Auto-incrementing Timer</h3>
              <Timer />
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Cleanup Function</h2>
          <p className="text-gray-600 mb-4">
            useEffect can return a cleanup function that runs when the component unmounts or before the effect runs again:
          </p>
          <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm overflow-x-auto">
            <p>useEffect(() => {'{'}
              <p className="ml-4">const subscription = subscribe();</p>
              <p className="ml-4 mt-2">return () => {'{'}
                <p className="ml-8">subscription.unsubscribe();</p>
              {'}'};</p>
            {'}'}, []);</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Common Use Cases</h2>
          <ul className="space-y-3">
            <li className="bg-gray-50 p-4 rounded">
              <strong className="text-indigo-600">📡 Fetch Data:</strong>
              <p className="text-gray-600 text-sm mt-1">Load data from an API when component mounts</p>
            </li>
            <li className="bg-gray-50 p-4 rounded">
              <strong className="text-indigo-600">📅 Set Timers:</strong>
              <p className="text-gray-600 text-sm mt-1">Create intervals or timeouts</p>
            </li>
            <li className="bg-gray-50 p-4 rounded">
              <strong className="text-indigo-600">📝 Update Document Title:</strong>
              <p className="text-gray-600 text-sm mt-1">Change the page title dynamically</p>
            </li>
            <li className="bg-gray-50 p-4 rounded">
              <strong className="text-indigo-600">🎧 Event Listeners:</strong>
              <p className="text-gray-600 text-sm mt-1">Add and remove event listeners like resize or scroll</p>
            </li>
            <li className="bg-gray-50 p-4 rounded">
              <strong className="text-indigo-600">💾 Save to LocalStorage:</strong>
              <p className="text-gray-600 text-sm mt-1">Persist data to browser storage</p>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">useEffect Code Examples</h2>
          <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm overflow-x-auto space-y-4">
            <div>
              <p className="text-yellow-400 mb-2">// Fetch data on mount</p>
              <p>useEffect(() => {'{'}
                <p className="ml-4">fetch('/api/data')</p>
                <p className="ml-6">.then(res => res.json())</p>
                <p className="ml-6">.then(data => setData(data));</p>
              {'}'}, []);</p>
            </div>
            <div>
              <p className="text-yellow-400 mb-2">// Run when dependency changes</p>
              <p>useEffect(() => {'{'}
                <p className="ml-4">console.log('Count changed to:', count);</p>
              {'}'}, [count]);</p>
            </div>
          </div>
        </section>

        <section className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
          <h3 className="font-bold text-gray-800 mb-2">💡 Key Takeaway</h3>
          <p className="text-gray-700">
            useEffect is how you add side effects to function components. Use the dependency array to control when the effect runs, 
            and return a cleanup function if needed.
          </p>
        </section>
      </div>
    </TutorialLayout>
  );
}
