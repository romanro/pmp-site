import { Direction, Language, LanguageDirection } from '../../context/language.models';

export class LanguageService {
    private LS_KEY = 'language';
    private DEFAULT_LANGUAGE = Language.English;
    private DEFAULT_DIRECTION = Direction.LTR;

    private setBodyClasses = (lang: Language) => {
        document.body.classList.remove(Direction.LTR);
        document.body.classList.remove(Direction.RTL);
        document.documentElement.lang = lang.toLowerCase();
        const dir = LanguageDirection[lang] || this.DEFAULT_DIRECTION;
        document.documentElement.dir = dir;
        document.body.classList.add(dir);
    };

    public setLanguage = (lang: Language) => {
        localStorage.setItem(this.LS_KEY, lang);
        this.setBodyClasses(lang);
    };

    public getCurrentLanguage = (): Language => {
        const lang = (localStorage.getItem('language') as Language) || this.DEFAULT_LANGUAGE;
        this.setBodyClasses(lang);
        return lang;
    };
}
