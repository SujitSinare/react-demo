import { createContext, useContext, useState } from 'react';
import TutorialLayout from '../layout/TutorialLayout';

const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

function ThemeSwitcher() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={`p-6 rounded-lg border-2 ${theme === 'light'
      ? 'bg-yellow-50 border-yellow-200'
      : 'bg-slate-800 border-slate-600'
      }`}>
      <p className={`mb-4 font-semibold ${theme === 'light' ? 'text-gray-800' : 'text-white'}`}>
        Current Theme: <span className="capitalize">{theme}</span>
      </p>
      <button
        onClick={toggleTheme}
        className={`px-4 py-2 rounded font-semibold transition ${theme === 'light'
          ? 'bg-blue-500 text-white hover:bg-blue-600'
          : 'bg-yellow-500 text-black hover:bg-yellow-600'
          }`}
      >
        Toggle Theme
      </button>
    </div>
  );
}

function ContextExample() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`p-4 rounded ${theme === 'light'
      ? 'bg-white text-gray-800 border border-gray-200'
      : 'bg-slate-700 text-white border border-slate-600'
      }`}>
      <p>This content responds to theme changes!</p>
    </div>
  );
}

export default function ContextTutorial() {
  return (
    <TutorialLayout title="Context API" icon="🌐">
      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">What is Context API?</h2>
          <p className="text-gray-600 mb-4">
            Context API provides a way to pass data through the component tree without having to pass
            props down manually at every level. This solves the "prop drilling" problem.
          </p>
          <p className="text-gray-600">
            Context is designed to share data that can be considered "global" for a tree of React components,
            such as the current user, theme, or language.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Prop Drilling Problem</h2>
          <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500 mb-4">
            <p className="text-gray-700 font-semibold mb-2">Without Context (Prop Drilling):</p>
            <p className="text-gray-600 text-sm">
              You pass props through many levels of components even if only the deepest component needs them.
            </p>
          </div>
          <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
            <p className="text-gray-700 font-semibold mb-2">With Context:</p>
            <p className="text-gray-600 text-sm">
              Provide data at a high level, and any component can access it directly without intermediate props.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Creating Context</h2>
          <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm overflow-x-auto">
            <p className="text-yellow-400 mb-2">// Create context</p>
            <p>const MyContext = createContext();</p>
            <p className="mt-3 text-yellow-400">// Create provider component</p>
            <p>function MyProvider({'{'}children{'}'}) {'{'}
              <p className="ml-4">const [value, setValue] = useState('default');</p>
              <p className="ml-4 mt-2">return (</p>
              <p className="ml-8">
                &lt;MyContext.Provider value=&#123;&#123; value, setValue &#125;&#125;&gt;
              </p>
              <p className="ml-12">{'{children}'}</p>
              <p className="ml-8">&lt;/MyContext.Provider&gt;</p>
              <p className="ml-4">);</p>
              {'}'}
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Using Context</h2>
          <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm overflow-x-auto">
            <p className="text-yellow-400 mb-2">// Use context in any component</p>
            <p>function MyComponent() {'{'}
              <p className="ml-4">const {'{'}value, setValue{'}'} = useContext(MyContext);</p>
              <p className="ml-4 mt-2">return &lt;p&gt;{'{value}'}&lt;/p&gt;;</p>
              {'}'}
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">🎮 Theme Context Example</h2>
          <ThemeProvider>
            <div className="space-y-4">
              <ThemeSwitcher />
              <ContextExample />
            </div>
          </ThemeProvider>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">When to Use Context</h2>
          <ul className="space-y-3">
            <li className="bg-green-50 p-4 rounded border-l-4 border-green-500">
              <strong className="text-green-700">✓ Theme/Dark Mode:</strong>
              <p className="text-gray-600 text-sm mt-1">Store and provide theme preferences globally</p>
            </li>
            <li className="bg-green-50 p-4 rounded border-l-4 border-green-500">
              <strong className="text-green-700">✓ Authentication:</strong>
              <p className="text-gray-600 text-sm mt-1">Share current user state across app</p>
            </li>
            <li className="bg-green-50 p-4 rounded border-l-4 border-green-500">
              <strong className="text-green-700">✓ Language/Localization:</strong>
              <p className="text-gray-600 text-sm mt-1">Provide language preferences globally</p>
            </li>
            <li className="bg-green-50 p-4 rounded border-l-4 border-green-500">
              <strong className="text-green-700">✓ Modal/Notification State:</strong>
              <p className="text-gray-600 text-sm mt-1">Control global UI state</p>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">When NOT to Use Context</h2>
          <ul className="space-y-3">
            <li className="bg-red-50 p-4 rounded border-l-4 border-red-500">
              <strong className="text-red-700">✗ Frequently Changing Data:</strong>
              <p className="text-gray-600 text-sm mt-1">Can cause unnecessary re-renders; use state management libraries</p>
            </li>
            <li className="bg-red-50 p-4 rounded border-l-4 border-red-500">
              <strong className="text-red-700">✗ Complex State Logic:</strong>
              <p className="text-gray-600 text-sm mt-1">Consider Redux, Zustand, or similar libraries</p>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Context Best Practices</h2>
          <ul className="space-y-3">
            <li className="bg-gray-50 p-4 rounded">
              <strong className="text-indigo-600">Split Contexts:</strong>
              <p className="text-gray-600 text-sm mt-1">Create separate contexts for different concerns</p>
            </li>
            <li className="bg-gray-50 p-4 rounded">
              <strong className="text-indigo-600">Create Custom Hooks:</strong>
              <p className="text-gray-600 text-sm mt-1">Make useContext calls easier with custom hooks</p>
            </li>
            <li className="bg-gray-50 p-4 rounded">
              <strong className="text-indigo-600">Memoize Context:</strong>
              <p className="text-gray-600 text-sm mt-1">Use useMemo for provider values to avoid unnecessary re-renders</p>
            </li>
          </ul>
        </section>

        <section className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
          <h3 className="font-bold text-gray-800 mb-2">💡 Key Takeaway</h3>
          <p className="text-gray-700">
            Context API is great for sharing global state like themes and user data. For complex, frequently-changing state, consider using a state management library.
          </p>
        </section>
      </div>
    </TutorialLayout>
  );
}
