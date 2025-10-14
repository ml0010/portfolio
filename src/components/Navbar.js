import React, { useContext, useEffect } from 'react'
import '../styles/Navbar.css';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { LanguageContext } from '../context/Language-context';


function Navbar() {

    const { isEnglish, isSpanish, isKorean, setEnglish, setSpaish, setKorean } = useContext(LanguageContext);

    const path = useLocation().pathname.split('_')[0];
    const language = useLocation().pathname.split('_')[1] || 'en';

    useEffect(() => {
        if (language === 'en') {
            setEnglish();
        } else if (language === 'es') {
            setSpaish();
        } else {
            setKorean();
        }
    }, [language]);

    return (
        <div className='navbar'>
            <div className='leftSide'>
                {isEnglish? <>
                    <NavLink to='/home'>Home</NavLink>
                    <NavLink to='/about'>About</NavLink>
                    <NavLink to='/projects'>Projects</NavLink>
                </> : <></>}
                {isSpanish? <>
                    <NavLink to='/home_es'>Home</NavLink>
                    <NavLink to='/about_es'>About</NavLink>
                    <NavLink to='/projects_es'>Proyectos</NavLink>
                </> : <></>}
                {isKorean? <>
                    <NavLink to='/home_kr'>Home</NavLink>
                    <NavLink to='/about_kr'>About</NavLink>
                    <NavLink to='/projects_kr'>프로젝트</NavLink>
                </> : <></>}
            </div>
            <div className='rightSide'>
                <Link to={`${path}`} className={`language ${isEnglish ? 'active' : ''}`} onClick={setEnglish}>EN</Link>
                <Link to={`${path}_es`} className={`language ${isSpanish ? 'active' : ''}`} onClick={setSpaish}>ES</Link>
                <Link to={`${path}_kr`} className={`language ${isKorean ? 'active' : ''}`} onClick={setKorean}>KR</Link>
            </div>
        </div>
    )
}

export default Navbar

/*

  const [openLanguage, setOpenLanguage] = useState(false);
  const toggleLanguageMenu = () => {
    setOpenLanguage(!openLanguage);
  };
  const isLanguageButtonOpen = () => {
    return openLanguage? <ArrowDropUpSharpIcon /> : <ArrowDropDownSharpIcon />;
  }

        <div className="rightSide" id={openLanguage ? "open" : "close"} 
            onMouseEnter={() => setOpenLanguage(true)}
            onMouseLeave={() => setOpenLanguage(false)}>
            <button className="languageButton" onClick={toggleLanguageMenu}>
            <LanguageOutlinedIcon /><b>LANGUAGE{isLanguageButtonOpen()}</b>
            </button>
            <div className="hiddenLinks">
            <Link to="/home" onClick={openLanguage ? "open" : "close"}> ENGLISH </Link>
            <br></br>
            <Link to="/homeES" onClick={openLanguage ? "open" : "close"}> CASTELLANO </Link>
            </div>
        </div>
        */