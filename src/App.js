import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import { Home } from './pages/Home';
import { HomeES } from './pages/HomeES';
import { Projects } from './pages/Projects';
import { About } from './pages/About';

function App() {
    return (
        <div className="App">
        <div className='dot'></div>
        <Router>
            <Navbar />
            <Routes>
                <Route index element={<Navigate to="/home" />} />
                <Route path='/*' element={<Home />} />
                <Route path='/home' element={<Home />} />
                <Route path='/home_es' element={<HomeES />} />
                <Route path='/about' elements={<About />} />
                <Route path='/projects' elements={<Projects />} />
            </Routes>
            <Footer />
        </Router>
        </div>
    );
}

export default App;
