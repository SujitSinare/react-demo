import TutorialLayout from './TutorialLayout';

function UserCard({ name, age, email }) {
  return (
    <div className="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-500 mb-3">
      <p className="text-gray-800"><strong>Name:</strong> {name}</p>
      <p className="text-gray-800"><strong>Age:</strong> {age}</p>
      <p className="text-gray-800"><strong>Email:</strong> {email}</p>
    </div>
  );
}

function Greeting({ greeting = 'Welcome', name = 'Guest' }) {
  return <p className="text-lg text-gray-700">{greeting}, <strong>{name}</strong>!</p>;
}

export default function PropsTutorial() {
  return (
    <TutorialLayout title="Props" icon="📦">
      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">What are Props?</h2>
          <p className="text-gray-600 mb-4">
            Props (properties) are how you pass data from a parent component to a child component. 
            They are read-only and allow components to be flexible and reusable.
          </p>
          <p className="text-gray-600">
            Props are similar to function parameters - they let you customize how components behave and display.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">How Props Work</h2>
          <div className="bg-gray-50 p-4 rounded-lg mb-4">
            <p className="text-gray-700 mb-3">Parent Component passes props:</p>
            <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm">
              &lt;UserCard name="Alice" age="28" email="alice@example.com" /&gt;
            </div>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-gray-700 mb-3">Child Component receives props:</p>
            <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm">
              function UserCard(props) {'{'}
              <p className="ml-4">return &lt;div&gt;{'{props.name}'}&lt;/div&gt;;</p>
              {'}'}
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">🎮 Props in Action</h2>
          <div className="bg-blue-50 p-6 rounded-lg border-2 border-blue-200">
            <p className="text-gray-800 font-semibold mb-4">Example: Passing different props to the same component</p>
            <UserCard name="Alice" age="28" email="alice@example.com" />
            <UserCard name="Bob" age="32" email="bob@example.com" />
            <UserCard name="Carol" age="25" email="carol@example.com" />
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Default Props</h2>
          <p className="text-gray-600 mb-4">
            You can provide default values for props if they're not passed:
          </p>
          <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm overflow-x-auto mb-4">
            <p>function Greeting({'{'}greeting = 'Hello', name = 'Guest'{'}'}) {'{'}
              <p className="ml-4">return &lt;p&gt;{'{greeting}'}, {'{name}'}&lt;/p&gt;;</p>
            {'}'}
            </p>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
            <Greeting greeting="Welcome" name="Developer" />
            <Greeting name="Alice" />
            <Greeting />
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Destructuring Props</h2>
          <p className="text-gray-600 mb-4">
            Instead of accessing props.name, you can destructure them directly in the function parameters:
          </p>
          <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm overflow-x-auto">
            <p className="text-yellow-400 mb-2">// Without destructuring</p>
            <p>function Card(props) {'{'}
              <p className="ml-4">return &lt;p&gt;{'{props.name}'}&lt;/p&gt;;</p>
            {'}'}
            </p>
            <p className="text-yellow-400 mb-2 mt-4">// With destructuring</p>
            <p>function Card({'{'}name{'}'}) {'{'}
              <p className="ml-4">return &lt;p&gt;{'{name}'}&lt;/p&gt;;</p>
            {'}'}
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Props Best Practices</h2>
          <ul className="space-y-3">
            <li className="bg-gray-50 p-4 rounded">
              <strong className="text-indigo-600">Props are Read-only:</strong>
              <p className="text-gray-600 text-sm mt-1">Never modify props directly in child components</p>
            </li>
            <li className="bg-gray-50 p-4 rounded">
              <strong className="text-indigo-600">Use Destructuring:</strong>
              <p className="text-gray-600 text-sm mt-1">Makes code more readable and cleaner</p>
            </li>
            <li className="bg-gray-50 p-4 rounded">
              <strong className="text-indigo-600">Provide Defaults:</strong>
              <p className="text-gray-600 text-sm mt-1">Handle cases where props aren't provided</p>
            </li>
            <li className="bg-gray-50 p-4 rounded">
              <strong className="text-indigo-600">PropTypes Validation:</strong>
              <p className="text-gray-600 text-sm mt-1">Validate prop types for better debugging</p>
            </li>
          </ul>
        </section>

        <section className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
          <h3 className="font-bold text-gray-800 mb-2">💡 Key Takeaway</h3>
          <p className="text-gray-700">
            Props are the way to pass data from parent to child components. They make components reusable by 
            allowing different data to be passed each time the component is used.
          </p>
        </section>
      </div>
    </TutorialLayout>
  );
}
