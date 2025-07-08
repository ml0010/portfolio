import React, { createContext, useState } from 'react'

export const LanguageContext = createContext(null);

export const LanguageContextProvider = (props) => {

    const [ isEnglish, setIsEnglish ] = useState(true);
    const [ isSpanish, setIsSpanish ] = useState(false);
    const [ isKorean, setIsKorean ] = useState(false);

    const setEnglish = () => {
        setIsEnglish(true);
        setIsSpanish(false);
        setIsKorean(false);
    };

    const setSpaish = () => {
        setIsSpanish(true);
        setIsEnglish(false);
        setIsKorean(false);
    };

    const setKorean = () => {
        setIsKorean(true);
        setIsSpanish(false);
        setIsEnglish(false);
    };

    const contextValue = { isEnglish, isSpanish, isKorean, setEnglish, setSpaish, setKorean };
    return (
        <LanguageContext.Provider value={contextValue}>{props.children}</LanguageContext.Provider>
    )
}
