import React, {Component} from 'react';
import {View, Text} from 'react-native';
import I18n from 'react-native-i18n';

class ChildComponentTwo extends Component {
    render() {
        return (
            <View>
                <Text>{this.props.I18n.t('hello')}</Text>
            </View>
        )
    }
}

class ChildComponent extends Component {
    render() {
        console.log(this.props.changeLocale);
        return (
            <View style={styles.view_container}>
                <Text style={styles.hello}>{this.props.I18n.t('hello')}</Text>
                <Text onPress={() => this.props.changeLocale('en')}
                      style={styles.button}>
                    Change to english
                </Text>
                <ChildComponentTwo I18n={this.props.I18n} changeLocale={this.props.changeLocale}/>
            </View>
        );
    }
}

export default class AppNormal extends Component {
    constructor() {
        super(...arguments);
        I18n.locale = 'vi';
        I18n.translations = {
            en: {
                hello: 'Hello world'
            },
            vi: {
                hello: 'Xin chào'
            }
        }
        this.state = {
            I18n
        }
    }

    changeLocale(locale = 'vi') {
        console.log('change to lang: ' + locale);
        let i18nClone = this.state.I18n;
        i18nClone.locale = locale;
        this.setState({I18n: i18nClone});
    }

    render() {
        return (
            <View style={styles.view_container}>
                <ChildComponent I18n={this.state.I18n} changeLocale={this.changeLocale.bind(this)}/>
            </View>
        )
    }
}

const styles = {
    view_container: {
        flex: 1, justifyContent: 'center', alignItems: 'center'
    },
    hello: {
        fontSize: 20, marginBottom: 20
    },
    button: {
        width: 150, borderWidth: 1,
        borderColor: '#333333', padding: 10
    }
};