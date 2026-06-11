import TutorialLayout from './TutorialLayout';

function WelcomeComponent() {
  return <div className="p-4 bg-green-100 rounded-lg text-green-800 font-semibold">Welcome to React Components!</div>;
}

function GreetingComponent({ name = 'Guest' }) {
  return <p className="text-lg text-gray-700">Hello, <strong>{name}</strong>! Welcome to our React tutorial.</p>;
}

export default function ComponentsTutorial() {
  return (
    <TutorialLayout title="Components" icon="🧩">
      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">What are Components?</h2>
          <p className="text-gray-600 mb-4">
            Components are the building blocks of React applications. They are reusable, independent pieces of UI 
            that manage their own content, presentation, and behavior.
          </p>
          <p className="text-gray-600">
            There are two types of components: <strong>Function Components</strong> and <strong>Class Components</strong>. 
            Modern React emphasizes Function Components as they're simpler and work with Hooks.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Function Components</h2>
          <p className="text-gray-600 mb-4">
            A function component is simply a JavaScript function that returns JSX.
          </p>
          <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm overflow-x-auto mb-4">
            <p>function Welcome() {'{'}
              <p className="ml-4">return &lt;h1&gt;Hello!&lt;/h1&gt;;</p>
            {'}'}
            </p>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
            <p className="text-gray-700">Example Output:</p>
            <WelcomeComponent />
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Component Features</h2>
          <ul className="space-y-3">
            <li className="bg-gray-50 p-4 rounded">
              <strong className="text-indigo-600">Reusable:</strong>
              <p className="text-gray-600 text-sm mt-1">Use the same component multiple times in different places</p>
            </li>
            <li className="bg-gray-50 p-4 rounded">
              <strong className="text-indigo-600">Composable:</strong>
              <p className="text-gray-600 text-sm mt-1">Combine components to create complex UIs</p>
            </li>
            <li className="bg-gray-50 p-4 rounded">
              <strong className="text-indigo-600">Maintainable:</strong>
              <p className="text-gray-600 text-sm mt-1">Easy to update and debug individual components</p>
            </li>
            <li className="bg-gray-50 p-4 rounded">
              <strong className="text-indigo-600">Testable:</strong>
              <p className="text-gray-600 text-sm mt-1">Components can be tested in isolation</p>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Component Hierarchy</h2>
          <div className="bg-gray-50 p-6 rounded-lg border-2 border-gray-200">
            <p className="text-gray-700 mb-4">Components can be nested and composed together:</p>
            <div className="space-y-3">
              <div className="bg-blue-100 p-3 rounded text-center font-bold">
                &lt;App /&gt;
              </div>
              <div className="flex justify-center">↓</div>
              <div className="grid grid-cols-3 gap-3">
                <div className="bg-green-100 p-3 rounded text-center font-bold">
                  &lt;Header /&gt;
                </div>
                <div className="bg-green-100 p-3 rounded text-center font-bold">
                  &lt;Main /&gt;
                </div>
                <div className="bg-green-100 p-3 rounded text-center font-bold">
                  &lt;Footer /&gt;
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">🎮 Interactive Example</h2>
          <div className="bg-gradient-to-r from-pink-50 to-purple-50 p-6 rounded-lg border-2 border-pink-200">
            <GreetingComponent name="React Developer" />
            <GreetingComponent />
          </div>
          <p className="text-gray-600 text-sm mt-4">
            The GreetingComponent is reused twice above! Components can accept different inputs each time.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Code Examples</h2>
          <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm overflow-x-auto space-y-4">
            <div>
              <p className="text-yellow-400 mb-2">// Simple Function Component</p>
              <p>function Button() {'{'}
                <p className="ml-4">return &lt;button&gt;Click me&lt;/button&gt;;</p>
              {'}'}
              </p>
            </div>
            <div>
              <p className="text-yellow-400 mb-2">// Using the component</p>
              <p>function App() {'{'}
                <p className="ml-4">return (</p>
                <p className="ml-8">&lt;div&gt;</p>
                <p className="ml-12">&lt;Button /&gt;</p>
                <p className="ml-12">&lt;Button /&gt;</p>
                <p className="ml-8">&lt;/div&gt;</p>
                <p className="ml-4">);</p>
              {'}'}
              </p>
            </div>
          </div>
        </section>

        <section className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
          <h3 className="font-bold text-gray-800 mb-2">💡 Best Practices</h3>
          <ul className="text-gray-700 space-y-2">
            <li>• Component names should start with a capital letter</li>
            <li>• Keep components focused and single-purpose</li>
            <li>• Extract common logic into separate components</li>
            <li>• Use descriptive names that clearly indicate the component's purpose</li>
          </ul>
        </section>
      </div>
    </TutorialLayout>
  );
}
