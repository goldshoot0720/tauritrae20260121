import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Subscriptions from './pages/Subscriptions';
import Food from './pages/Food';
import Videos from './pages/Videos';
import Music from './pages/Music';
import Banking from './pages/Banking';
import About from './pages/About';
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="subscriptions" element={<Subscriptions />} />
          <Route path="food" element={<Food />} />
          <Route path="videos" element={<Videos />} />
          <Route path="music" element={<Music />} />
          <Route path="banking" element={<Banking />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
