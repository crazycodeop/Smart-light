import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Controls from './components/Controls';
import Devices from './components/Devices';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/configuration" element={<Controls />} />
        <Route path="/devices" element={<Devices />} />
      </Routes>
    </Router>
  );
}

export default App
