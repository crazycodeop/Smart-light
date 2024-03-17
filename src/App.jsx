import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Controls from "./components/Controls";
import Devices from "./components/Devices";
import Index from "./components/Index";
import Policy from "./components/Policy";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/home" element={<Home />} />
        <Route path="/configuration" element={<Controls />} />
        <Route path="/devices" element={<Devices />} />
        <Route path="/policy" element={<Policy />} />
      </Routes>
    </Router>
  );
}

export default App;
