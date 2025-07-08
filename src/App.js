import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import { Home } from './pages/Home.jsx';
import { HomeES } from './pages/HomeES.jsx';
import { HomeKR } from './pages/HomeKR.jsx';
import { Projects } from './pages/Projects.jsx';
import { About } from './pages/About.jsx';
import { AboutES } from './pages/AboutES.jsx';
import { AboutKR } from './pages/AboutKR.jsx';
import { LanguageContextProvider } from './context/Language-context.jsx';
import { ProjectsES } from './pages/ProjectsES.jsx';
import { ProjectsKR } from './pages/ProjectsKR.jsx';
function App() {
    return (
        <div className='App dot'>
        <BrowserRouter>
            <LanguageContextProvider>
                <Navbar />
                <Routes>
                    <Route index element={<Home />} />
                    <Route path='/*' element={<Home />} />
                    <Route path='/home' element={<Home />} />
                    <Route path='/home_es' element={<HomeES />} />
                    <Route path='/home_kr' element={<HomeKR />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/about_es' element={<AboutES />} />
                    <Route path='/about_kr' element={<AboutKR />} />
                    <Route path='/projects' element={<Projects />} />
                    <Route path='/projects_es' element={<ProjectsES />} />
                    <Route path='/projects_kr' element={<ProjectsKR />} />
                </Routes>
                <Footer />
            </LanguageContextProvider>
        </BrowserRouter>
        </div>
    );
}

export default App;
