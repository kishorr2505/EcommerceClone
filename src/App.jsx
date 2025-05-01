// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home'
// Import other components/pages as needed

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
       <Route path='/' element ={<Home></Home>}/>
      </Routes>
    </Router>
  );
}

export default App;
