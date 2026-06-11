import { useState } from 'react';
import TutorialLayout from './TutorialLayout';

function SimpleForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-blue-50 p-6 rounded-lg border-2 border-blue-200 space-y-4">
      <div>
        <label className="block text-gray-700 font-semibold mb-2">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your name"
        />
      </div>
      <div>
        <label className="block text-gray-700 font-semibold mb-2">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your email"
        />
      </div>
      <div>
        <label className="block text-gray-700 font-semibold mb-2">Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your message"
          rows="4"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white font-semibold py-2 rounded hover:bg-blue-600 transition"
      >
        Submit Form
      </button>
      {formData.name && (
        <div className="bg-green-100 p-4 rounded text-green-800">
          <p><strong>Name:</strong> {formData.name}</p>
          <p><strong>Email:</strong> {formData.email}</p>
        </div>
      )}
    </form>
  );
}

function CheckboxForm() {
  const [interests, setInterests] = useState({
    javascript: false,
    python: false,
    rust: false,
    golang: false,
  });

  const handleCheck = (e) => {
    const { name, checked } = e.target;
    setInterests(prev => ({
      ...prev,
      [name]: checked,
    }));
  };

  const selected = Object.entries(interests)
    .filter(([_, checked]) => checked)
    .map(([lang]) => lang);

  return (
    <div className="bg-purple-50 p-6 rounded-lg border-2 border-purple-200">
      <p className="font-semibold text-gray-800 mb-4">Choose your interests:</p>
      <div className="space-y-2 mb-4">
        {Object.keys(interests).map(lang => (
          <label key={lang} className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              name={lang}
              checked={interests[lang]}
              onChange={handleCheck}
            />
            <span className="text-gray-700 capitalize">{lang}</span>
          </label>
        ))}
      </div>
      {selected.length > 0 && (
        <div className="bg-white p-3 rounded border">
          <p className="font-semibold text-gray-800">Selected: {selected.join(', ')}</p>
        </div>
      )}
    </div>
  );
}

export default function FormsTutorial() {
  return (
    <TutorialLayout title="Forms & Input" icon="📝">
      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Forms in React</h2>
          <p className="text-gray-600 mb-4">
            React forms are similar to HTML forms, but the form data is handled by React components 
            through state. This makes it easier to manipulate and validate form data.
          </p>
          <p className="text-gray-600">
            React forms use a technique called "controlled components" where form values are 
            stored in state and updated through event handlers.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Controlled Components</h2>
          <p className="text-gray-600 mb-4">
            In controlled components, the form data is controlled by React state:
          </p>
          <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm overflow-x-auto">
            <p>function LoginForm() {'{'}
              <p className="ml-4">const [email, setEmail] = useState('');</p>
              <p className="ml-4 mt-2">return (</p>
              <p className="ml-8">&lt;input</p>
              <p className="ml-12">type="email"</p>
              <p className="ml-12">value={'{email}'}</p>
              <p className="ml-12">onChange={(e) => setEmail(e.target.value)}</p>
              <p className="ml-8">/&gt;</p>
              <p className="ml-4">);</p>
            {'}'}
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Form Events</h2>
          <ul className="space-y-3">
            <li className="bg-gray-50 p-4 rounded">
              <strong className="text-indigo-600">onChange:</strong>
              <p className="text-gray-600 text-sm mt-1">Triggered when input value changes</p>
            </li>
            <li className="bg-gray-50 p-4 rounded">
              <strong className="text-indigo-600">onSubmit:</strong>
              <p className="text-gray-600 text-sm mt-1">Triggered when form is submitted</p>
            </li>
            <li className="bg-gray-50 p-4 rounded">
              <strong className="text-indigo-600">onFocus/onBlur:</strong>
              <p className="text-gray-600 text-sm mt-1">Triggered when input gains or loses focus</p>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">🎮 Form Examples</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-gray-800 mb-3">Contact Form with Multiple Inputs</h3>
              <SimpleForm />
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-3">Checkboxes Example</h3>
              <CheckboxForm />
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Handling Form Submission</h2>
          <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm overflow-x-auto">
            <p>const handleSubmit = (e) => {'{'}
              <p className="ml-4">e.preventDefault(); // Prevent page reload</p>
              <p className="ml-4">console.log(formData);</p>
              <p className="ml-4">// Send data to server</p>
            {'}'}
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Multiple Input Handling</h2>
          <p className="text-gray-600 mb-4">
            For forms with multiple inputs, use the name attribute to update the correct field:
          </p>
          <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm overflow-x-auto">
            <p>const handleChange = (e) => {'{'}
              <p className="ml-4">const {'{'}name, value{'}'} = e.target;</p>
              <p className="ml-4">setFormData(prev => ({'{'}
                <p className="ml-8">...prev,</p>
                <p className="ml-8">[name]: value</p>
              {'}'}));</p>
            {'}'}
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Common Form Patterns</h2>
          <ul className="space-y-3">
            <li className="bg-gray-50 p-4 rounded">
              <strong className="text-indigo-600">Text Input:</strong>
              <p className="text-gray-600 text-sm mt-1">value={'{email}'} onChange={'{handleChange}'}</p>
            </li>
            <li className="bg-gray-50 p-4 rounded">
              <strong className="text-indigo-600">Textarea:</strong>
              <p className="text-gray-600 text-sm mt-1">Same as text input but for multi-line content</p>
            </li>
            <li className="bg-gray-50 p-4 rounded">
              <strong className="text-indigo-600">Select/Dropdown:</strong>
              <p className="text-gray-600 text-sm mt-1">value={'{selected}'} onChange={'{handleChange}'}</p>
            </li>
            <li className="bg-gray-50 p-4 rounded">
              <strong className="text-indigo-600">Checkbox:</strong>
              <p className="text-gray-600 text-sm mt-1">checked={'{isChecked}'} onChange={'{handleChange}'}</p>
            </li>
            <li className="bg-gray-50 p-4 rounded">
              <strong className="text-indigo-600">Radio Buttons:</strong>
              <p className="text-gray-600 text-sm mt-1">checked={'{value === selected}'} onChange={'{handleChange}'}</p>
            </li>
          </ul>
        </section>

        <section className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
          <h3 className="font-bold text-gray-800 mb-2">💡 Best Practices</h3>
          <ul className="text-gray-700 space-y-2">
            <li>• Always prevent default form submission with e.preventDefault()</li>
            <li>• Use controlled components for better control</li>
            <li>• Validate form data before submission</li>
            <li>• Clear form after successful submission</li>
            <li>• Show validation errors to users</li>
          </ul>
        </section>
      </div>
    </TutorialLayout>
  );
}
