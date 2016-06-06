import React, {Component} from 'react';
import {View} from 'react-native'
import {Provider} from 'react-redux';
import I18n from 'react-native-i18n';
import configureStore from './store/configureStore';
import Languages from '../languages/index';
import {loadTranslations, setLocale} from '../libs/localize/index';

const store = configureStore();

store.dispatch(setLocale('vi'));
store.dispatch(loadTranslations(Languages));

export default class Root extends Component {
    render() {
        return (
            <Provider store={store}>
                {this.props.children}
            </Provider>
        )
    }
}