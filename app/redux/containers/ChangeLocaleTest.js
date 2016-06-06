import React, {Component} from 'react';
import {View, Text, TextInput} from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {translateText, wrapTranslate, setLocale} from '../../libs/localize/index';

class ChangeLocaleTest extends Component {
    render() {
        return (
            <View style={styles.view_container}>
                <Text style={styles.hello}>Current language: {this.props.currentLocale}</Text>
                <Text style={styles.hello}>{translateText('hello')}</Text>
                <Text style={styles.hello}>{translateText('hello_name', {name: 'Tung'})}</Text>
                {wrapTranslate(
                    {placeholder: {value: 'hello_name', params: {name: 'Tung'}}},
                    <TextInput style={styles.button}/>
                )}
                <Text onPress={() => this.props.setLocale('en')}
                      style={styles.button}>
                    Change to english
                </Text>
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
    button: {
        width: 150, borderWidth: 1,
        borderColor: '#333333', padding: 10,
        height: 60
    }
};

