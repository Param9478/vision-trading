// App.jsx
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Charts from './pages/Charts';
// import Bots from './pages/Bots';
// import About from './pages/About';
// import Contact from './pages/Contact';

import Header from './components/Header';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/charts" element={<Charts />} />
        {/* <Route path="/bots" element={<Bots />} /> */}
        {/* <Route path="/about" element={<About />} /> */}
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
      <Footer />
    </div>
  );
}
