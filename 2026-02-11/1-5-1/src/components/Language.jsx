import { useLanguage } from "../contexts/LanguageContext";
import { LanguageProvider  } from "../contexts/LanguageContext";

function Language() {
    return (
        <LanguageProvider>
            <LanguageContent />
        </LanguageProvider>
    );
}

function LanguageContent() {
    const { lang, toggleLang, t } = useLanguage();

    return (
        <div className="card">
            <h1>{t("greeting")}</h1>
            <button onClick={toggleLang}>
                {t("toggle")}
            </button>
        </div>
    );
}

export default Language;