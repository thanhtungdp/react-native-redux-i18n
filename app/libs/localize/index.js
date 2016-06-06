// index.js

import I18n from 'react-native-i18n';

export {
    SET_LOCALE,
    LOAD_TRANSLATIONS,
    setLocale,
    loadTranslations,
} from './actions';

export {I18n};

export { default as i18nReducer } from './reducer';

// Smart component
export {wrapTranslate, translateText} from './translate';
