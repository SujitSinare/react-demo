import { useState } from 'react';
import TutorialLayout from '../layout/TutorialLayout';

function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React Basics', completed: true },
    { id: 2, text: 'Master Hooks', completed: false },
    { id: 3, text: 'Build a Project', completed: false },
  ]);

  const addTodo = () => {
    const id = Math.max(...todos.map(t => t.id), 0) + 1;
    setTodos([...todos, { id, text: `New Task ${id}`, completed: false }]);
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(t =>
      t.id === id ? { ...t, completed: !t.completed } : t
    ));
  };

  const removeTodo = (id) => {
    setTodos(todos.filter(t => t.id !== id));
  };

  return (
    <div className="bg-blue-50 p-6 rounded-lg border-2 border-blue-200">
      <ul className="space-y-2 mb-4">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="bg-white p-3 rounded flex items-center justify-between border"
          >
            <label className="flex items-center gap-3">
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
              />
              <span className={todo.completed ? 'line-through text-gray-500' : 'text-gray-800'}>
                {todo.text}
              </span>
            </label>
            <button
              onClick={() => removeTodo(todo.id)}
              className="text-red-500 hover:text-red-700 font-bold"
            >
              ✕
            </button>
          </li>
        ))}
      </ul>
      <button
        onClick={addTodo}
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
      >
        Add Todo
      </button>
    </div>
  );
}

function UserList() {
  const users = [
    { id: 1, name: 'Alice Johnson', email: 'alice@example.com', role: 'Admin' },
    { id: 2, name: 'Bob Smith', email: 'bob@example.com', role: 'User' },
    { id: 3, name: 'Carol Williams', email: 'carol@example.com', role: 'User' },
  ];

  return (
    <div className="bg-purple-50 p-6 rounded-lg border-2 border-purple-200">
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b-2 border-purple-200">
              <th className="text-left p-2">Name</th>
              <th className="text-left p-2">Email</th>
              <th className="text-left p-2">Role</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="border-b border-gray-200 hover:bg-white">
                <td className="p-2">{user.name}</td>
                <td className="p-2">{user.email}</td>
                <td className="p-2">
                  <span className={`px-2 py-1 rounded text-xs font-semibold ${user.role === 'Admin' ? 'bg-red-100 text-red-800' : 'bg-blue-100 text-blue-800'
                    }`}>
                    {user.role}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default function ListsTutorial() {
  return (
    <TutorialLayout title="Lists & Keys" icon="📋">
      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Rendering Lists</h2>
          <p className="text-gray-600 mb-4">
            To render lists in React, use the array map() method to transform each item into a React element.
          </p>
          <p className="text-gray-600">
            Each list item should have a unique "key" prop. Keys help React identify which items have changed,
            been added, or been removed.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Why Keys Matter?</h2>
          <ul className="space-y-3">
            <li className="bg-gray-50 p-4 rounded">
              <strong className="text-indigo-600">Performance:</strong>
              <p className="text-gray-600 text-sm mt-1">Keys help React match old elements with new elements efficiently</p>
            </li>
            <li className="bg-gray-50 p-4 rounded">
              <strong className="text-indigo-600">Consistency:</strong>
              <p className="text-gray-600 text-sm mt-1">Preserves component state when lists are reordered, filtered, or added to</p>
            </li>
            <li className="bg-gray-50 p-4 rounded">
              <strong className="text-indigo-600">Correctness:</strong>
              <p className="text-gray-600 text-sm mt-1">Prevents bugs related to lost state and form inputs</p>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Rendering with map()</h2>
          <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm overflow-x-auto">
            <p>const items = [</p>
            <p className="ml-4">{'{'}id: 1, name: 'Item 1'{'}'},</p>
            <p className="ml-4">{'{'}id: 2, name: 'Item 2'{'}'},</p>
            <p>];</p>
            <p className="mt-2">function ItemList() {'{'}
              <p className="ml-4">return (</p>
              <p className="ml-8">&lt;ul&gt;</p>
              <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
                {`{items.map((item) => (
  <li key={item.id}>{item.name}</li>
))}`}
              </pre>
              <p className="ml-12">)){'}'}</p>
              <p className="ml-8">&lt;/ul&gt;</p>
              <p className="ml-4">);</p>
              {'}'}
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Key Selection Guidelines</h2>
          <ul className="space-y-3">
            <li className="bg-green-50 p-4 rounded border-l-4 border-green-500">
              <strong className="text-green-700">✓ Use Unique IDs (Best):</strong>
              <p className="text-gray-600 text-sm mt-1">key={'{item.id}'} when items have unique identifiers</p>
            </li>
            <li className="bg-yellow-50 p-4 rounded border-l-4 border-yellow-500">
              <strong className="text-yellow-700">⚠ Use Index (Last Resort):</strong>
              <p className="text-gray-600 text-sm mt-1">key={'{index}'} - only if list is static (never filtered/sorted/added to)</p>
            </li>
            <li className="bg-red-50 p-4 rounded border-l-4 border-red-500">
              <strong className="text-red-700">✗ Don't Use Array Index (Usually):</strong>
              <p className="text-gray-600 text-sm mt-1">Index changes when items are reordered, causing state problems</p>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">🎮 Interactive Examples</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-gray-800 mb-3">Todo List with Add/Delete</h3>
              <TodoList />
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-3">User Table (Static List)</h3>
              <UserList />
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Common Mistakes</h2>
          <ul className="space-y-3">
            <li className="bg-red-50 p-4 rounded">
              <strong className="text-red-700">❌ Forgetting the key prop:</strong>
              <p className="text-gray-600 text-sm mt-1">Always include a key when rendering lists</p>
            </li>
            <li className="bg-red-50 p-4 rounded">
              <strong className="text-red-700">❌ Using array index as key when list changes:</strong>
              <p className="text-gray-600 text-sm mt-1">Causes state and form data to get mixed up</p>
            </li>
            <li className="bg-red-50 p-4 rounded">
              <strong className="text-red-700">❌ Using non-unique keys:</strong>
              <p className="text-gray-600 text-sm mt-1">All keys must be unique within the list</p>
            </li>
          </ul>
        </section>

        <section className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
          <h3 className="font-bold text-gray-800 mb-2">💡 Key Takeaway</h3>
          <p className="text-gray-700">
            Always use a unique, stable identifier as the key when rendering lists in React.
            This ensures correct behavior and optimal performance.
          </p>
        </section>
      </div>
    </TutorialLayout>
  );
}
