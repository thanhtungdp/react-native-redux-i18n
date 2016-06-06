import React, {Component} from 'react';
import {View, Text, TextInput} from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {translateText, wrapTranslate, setLocale} from '../../libs/localize/index';

class ChildComponent extends Component {
    render() {
        return (
            <View>
                <Text style={styles.hello}>{translateText('hello')}</Text>
                <ChildComponentTwo />
            </View>
        )
    }
}

class ChildComponentTwo extends Component {
    render() {
        return (
            <Text style={styles.hello}>{translateText('hello')}</Text>
        )
    }
}

class ChangeLocaleTest extends Component {
    render() {
        return (
            <View style={styles.view_container}>
                <Text style={styles.hello}>Current language: {this.props.currentLocale}</Text>
                <Text style={styles.hello}>{translateText('hello')}</Text>
                <Text style={styles.hello}>{translateText('hello_name', {name: 'Tung'})}</Text>
                {wrapTranslate(
                    {placeholder: {value: 'hello_name', params: {name: 'Tung'}}},
                    <TextInput style={styles.input}/>,
                    {flex: 1}
                )}
                <Text onPress={() => this.props.setLocale(this.props.currentLocale == 'en' ? 'vi' : 'en')}
                      style={styles.button}>
                    Change to {' '}{this.props.currentLocale == 'en' ? 'Vietnamese' : 'English'}
                </Text>
                <Text>Child component</Text>
                <ChildComponent />
                <ChildComponentTwo/>
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        currentLocale: state.i18n.locale
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({setLocale}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ChangeLocaleTest);


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
