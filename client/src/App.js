import './App.css';
import Header from './Components/Layout/Header/Header';
import Footer from './Components/Pages/Contact/Contact'
import Home from './Components/Pages/Home/Home';
import Contact from './Components/Pages/Contact/Contact';
import WorkExperience from './Components/Pages/WorkExperience/WorkExperience';
import Projects from './Components/Pages/Projects/Projects';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path={'/'}
          element={<Home />}
        />
        <Route
          path={'/contact'}
          element={<Contact />}
        />
        <Route
          path={'/work-experience'}
          element={<WorkExperience />}
        />
        <Route
          path={'/projects'}
          element={<Projects />}
        />
          
      </Routes>
      
    </Router>
  );
}

export default App;
