//actions.js

export const LOAD_TRANSLATIONS = 'loadTranslation';
export const loadTranslations = (translations) => {
    return {
        type: LOAD_TRANSLATIONS,
        translations
    }
};

export const SET_LOCALE = 'set locale';
export const setLocale = (locale, saveToStorage = false) => {
    return {
        type: SET_LOCALE,
        locale
    }
};