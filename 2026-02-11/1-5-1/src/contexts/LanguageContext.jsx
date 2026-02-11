import { createContext, useState, useContext } from "react";

const LanguageContext = createContext();

const translations = {
    ko : { greeting: "안녕하세요", toggle: "언어 변경"},
    en : { greeting: "Hello", toggle: "Change Language"}
}

function LanguageProvider({ children }) {
    const [lang, setLang] = useState("ko");

    function toggleLang() {
        setLang(lang === "ko" ? "en" : "ko");
    }

    function t(key) {
        return translations[lang][key];
    }

    return (
        <LanguageContext.Provider value={{ lang, toggleLang, t}}>
            {children}
        </LanguageContext.Provider>
    );
}

function useLanguage() {
    return useContext(LanguageContext);
}

export {LanguageProvider, useLanguage};