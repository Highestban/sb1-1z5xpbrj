import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import Home from './pages/Home';
import Announcements from './pages/Announcements';
import Sessions from './pages/Sessions';
import Info from './pages/Info';
import About from './pages/About';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="announcements" element={<Announcements />} />
          <Route path="sessions" element={<Sessions />} />
          <Route path="info" element={<Info />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;