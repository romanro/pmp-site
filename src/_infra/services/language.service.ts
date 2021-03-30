import { Language } from '../../context/language.models';

export class LanguageService {
    private LS_KEY = 'language';

    public setLanguage = (lang: Language) => {
        localStorage.setItem(this.LS_KEY, lang);
    };

    public getCurrentLanguage = (): Language => {
        return (localStorage.getItem('language') as Language) || Language.English;
    };
}
