import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './layout/Home';
import JSXBasics from './components/JSXBasics';
import ComponentsTutorial from './components/ComponentsTutorial';
import PropsTutorial from './components/PropsTutorial';
import StateTutorial from './components/StateTutorial';
import EffectsTutorial from './components/EffectsTutorial';
import ConditionalTutorial from './components/ConditionalTutorial';
import ListsTutorial from './components/ListsTutorial';
import FormsTutorial from './components/FormsTutorial';
import HooksTutorial from './components/HooksTutorial';
import ContextTutorial from './components/ContextTutorial';
import CustomHooksTutorial from './components/CustomHooksTutorial';
import OptimizationTutorial from './components/OptimizationTutorial';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        {/* Navigation Header */}
        <nav className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white shadow-lg">
          <div className="max-w-6xl mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <Link to="/" className="text-2xl font-bold flex items-center gap-2">
                ⚛️ React Tutorial
              </Link>
              <div className="text-sm opacity-90">
                Complete React Concepts Guide
              </div>
            </div>
          </div>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/jsx" element={<JSXBasics />} />
          <Route path="/components" element={<ComponentsTutorial />} />
          <Route path="/props" element={<PropsTutorial />} />
          <Route path="/state" element={<StateTutorial />} />
          <Route path="/effects" element={<EffectsTutorial />} />
          <Route path="/conditional" element={<ConditionalTutorial />} />
          <Route path="/lists" element={<ListsTutorial />} />
          <Route path="/forms" element={<FormsTutorial />} />
          <Route path="/hooks" element={<HooksTutorial />} />
          <Route path="/context" element={<ContextTutorial />} />
          <Route path="/custom-hooks" element={<CustomHooksTutorial />} />
          <Route path="/optimization" element={<OptimizationTutorial />} />
        </Routes>

        {/* Footer */}
        <footer className="bg-gray-800 text-gray-300 py-8 mt-12">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <p>React Concepts Tutorial - Learn React fundamentals interactively</p>
            <p className="text-sm mt-2">Build something amazing with React! 🚀</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;

