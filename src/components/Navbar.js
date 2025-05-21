import React, { useState } from 'react'
import '../styles/Navbar.css';
import { Link } from 'react-router-dom';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import ArrowDropUpSharpIcon from '@mui/icons-material/ArrowDropUpSharp';
import ArrowDropDownSharpIcon from '@mui/icons-material/ArrowDropDownSharp';


function Navbar() {

  const [openLanguage, setOpenLanguage] = useState(false);
  const toggleLanguageMenu = () => {
    setOpenLanguage(!openLanguage);
  };
  const isLanguageButtonOpen = () => {
    return openLanguage? <ArrowDropUpSharpIcon /> : <ArrowDropDownSharpIcon />;
  }

  return (
    <div className="navbar">
      <div className="leftSide">Logo will go here</div>
      <div className="rightSide" id={openLanguage ? "open" : "close"} 
        onMouseEnter={() => setOpenLanguage(true)}
        onMouseLeave={() => setOpenLanguage(false)}>
        <button className="languageButton" onClick={toggleLanguageMenu}>
          <LanguageOutlinedIcon /><b>LANGUAGE{isLanguageButtonOpen()}</b>
        </button>
        <div className="hiddenLinks">
          <Link to="./home" onClick={openLanguage ? "open" : "close"}> ENGLISH </Link>
          <br></br>
          <Link to="./homeES" onClick={openLanguage ? "open" : "close"}> CASTELLANO </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar