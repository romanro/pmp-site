import { ReactNode } from 'react';

export enum Language {
    English = 'EN',
    Hebrew = 'HE',
}

export enum Direction {
    RTL = 'rtl',
    LTR = 'ltr',
}

export enum LangActionType {
    SET_LANGUAGE = 'SET_LANGUAGE',
}

export interface LangStateState {
    language: Language;
}

export interface LangStateProps {
    children: ReactNode;
}

export interface SetLanguageAction {
    type: typeof LangActionType.SET_LANGUAGE;
    payload: Language;
}

export interface ContextProps {
    state: LangStateState;
    dispatch: {
        setLanguage: (lang: Language) => void;
        translate: (key: string) => string;
    };
}

export const LanguageDirection = {
    [Language.English]: Direction.LTR,
    [Language.Hebrew]: Direction.RTL,
};
