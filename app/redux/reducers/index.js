import {combineReducers} from 'redux';
import {i18nReducer} from '../../libs/localize/index';

export default combineReducers({
    i18n: i18nReducer,
})

