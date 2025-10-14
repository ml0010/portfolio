import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { LanguageContextProvider } from './context/Language-context.jsx';
import { useEffect, useState } from 'react';
import { AnimatePresence } from "framer-motion";
import RoutesList from './components/Routes.js';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


function App() {
    const [ loadingEffect, setLoadingEffect ] = useState(false);

    useEffect(() => {
        setLoadingEffect(true);
    },[]);

    return (
        <div className={`App dot`}>
            <div className={`contents ${loadingEffect ? 'active' : ''}`}>
            <BrowserRouter basename="/portfolio">
            <AnimatePresence>
                <LanguageContextProvider>
                    <Navbar />
                    <RoutesList />
                    <Footer />
                </LanguageContextProvider>
            </AnimatePresence>
            </BrowserRouter>
            </div>
        </div>
    );
}

export default App;
