import React, { useReducer, createContext, FC } from 'react';

import en from '../assets/dictionaries/en.json';
import he from '../assets/dictionaries/he.json';

import typy from 'typy';
import {
    ContextProps,
    LangActionType,
    LangStateProps,
    LangStateState,
    Language,
    SetLanguageAction,
} from './language.models';
import { LanguageService } from '../_infra/services/language.service';

const langService = new LanguageService();

const langReducer = (state: LangStateState, action: SetLanguageAction): LangStateState => {
    switch (action.type) {
        case LangActionType.SET_LANGUAGE:
            return {
                language: action.payload,
            };
        default:
            return state;
    }
};

const initialState = {
    language: langService.getCurrentLanguage(),
};

export const LangContext = createContext({} as ContextProps);

const LangState: FC<LangStateProps> = ({ children }) => {
    const [state, dispatch] = useReducer(langReducer, initialState);

    const setLanguage = (lang: Language) => {
        langService.setLanguage(lang);
        dispatch({
            type: LangActionType.SET_LANGUAGE,
            payload: lang,
        });
    };

    const translate = (key: string): string => {
        const { language } = state;
        let langData: { [key: string]: string | any } = {};

        switch (language) {
            case Language.English:
                langData = en;
                break;
            case Language.Hebrew:
                langData = he;
                break;
            default:
                langData = en;
        }

        return typy(langData, key).safeString;
    };

    return (
        <LangContext.Provider value={{ state, dispatch: { setLanguage, translate } }}>{children}</LangContext.Provider>
    );
};

export default LangState;
