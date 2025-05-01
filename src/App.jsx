// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
// Import other components/pages as needed

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Define your routes here */}
      </Routes>
    </Router>
  );
}

export default App;
