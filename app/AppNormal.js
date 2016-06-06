import React, {Component} from 'react';
import {View, Text, TextInput} from 'react-native';
import I18n from 'react-native-i18n';
import languages from './languages/index';

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
        return (
            <View style={styles.view_container}>
                <Text style={styles.hello}>Current language: {this.props.I18n.locale}</Text>
                <Text style={styles.hello}>{this.props.I18n.t('hello')}</Text>
                <Text style={styles.hello}>{this.props.I18n.t('hello_name', {name: 'Tung'})}</Text>
                <TextInput style={styles.input} placeholder={this.props.I18n.t('hello_name', {name: 'Tung'})}/>
                <Text onPress={() => this.props.changeLocale(this.props.I18n.locale == 'en' ? 'vi' : 'en')}
                      style={styles.button}>
                    Change to {' '}{this.props.I18n.locale == 'en' ? 'Vietnamese' : 'English'}
                </Text>
                <ChildComponentTwo I18n={this.props.I18n}/>
            </View>
        );
    }
}

export default class AppNormal extends Component {
    constructor() {
        super(...arguments);
        I18n.locale = 'vi';
        I18n.translations = languages;
        this.state = {
            I18n
        }
    }

    changeLocale(locale = 'vi') {
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
    input:{
        borderWidth: 1,
        borderColor: '#333333',
        fontSize:12,
        height: 40,
        paddingLeft: 10
    },
    button: {
        borderWidth: 0,
        borderColor: '#333333', padding: 10,
        marginTop: 10,
        marginBottom: 10,
        color: '#ffffff',
        backgroundColor: '#fc605c',
    }
};

