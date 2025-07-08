import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import { LanguageContextProvider } from './context/Language-context.jsx';
import { useEffect, useState } from 'react';
import { AnimatePresence } from "framer-motion";
import RoutesWithAnimation from './components/Routes.js';

function App() {
    const [ loadingEffect, setLoadingEffect ] = useState(false);

    useEffect(() => {
        setLoadingEffect(true);
    },[]);

    return (
        <div className={`App dot`}>
            <div className={`contents ${loadingEffect ? 'active' : ''}`}>
            <BrowserRouter>
            <AnimatePresence>
                <LanguageContextProvider>
                    <Navbar />
                    <RoutesWithAnimation />
                    <Footer />
                </LanguageContextProvider>
            </AnimatePresence>
            </BrowserRouter>
            </div>
        </div>
    );
}

export default App;
