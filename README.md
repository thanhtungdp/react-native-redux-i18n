
# React Native Redux I18n - Multiple languages
This project is a simple app multiple language usage with redux (or normal code).

## Demo image
Demo:
![demo gif][demo]
[demo]: http://www.upsieutoc.com/images/2016/06/06/ScreenShot2016-06-06at11.05.06PM.png

## Other app usage it
* Android: http://hoahoc.tungtung.vn/android
* IOS: http://hoahoc.tungtung.vn/ios
* Web: http://hoahoc.tungtung.vn

## Installation
``` code
git clone https://github.com/thanhtungdp/react-native-redux-i18n
cd react-native-redux-i18n o
npm install
react-native run-ios
react-native run-android
```

## Directory structure
```
Root
├── app
│   ├── languages
|	|	├── en.js
|	|	├── vi.js
|	|	├── index.js (export languages to single object)
│   ├── libs (have a localize lib for translations)
|	├── redux
|	|	├── actions
|	|	├── reducers
|	|	├── actions
|	|	├── containers
|	|	├── Root.js
│   ├── AppNormal.js (Change language via props)
│   ├── AppRedux.js (Change languge via redux | smart, dumb component)
├── index.ios.js
└── index.android.js
```

## Ussage translate in component
Example only use for Text:
``` javascript
import {translateText} from 'libs/localize/index.js';
class App extends Component {
    render(){
        return (
            <Text>{translateText('language_key')}</Text>
        )
    }
}
```

## Example with placeholder, or other props for component
``` javascript
import {wrapTranslate} from 'libs/localize/index.js';
class App extends Component {
    render(){
        return (
            <View>
                {wrapTranslate(
                    {placeholder: {value: 'hello_name', params: {name: 'Tung'}}},
                    <TextInput style={styles.button}/>
                )}
            </View>
        )
    }
}
```

## Example pass props change locale to component via connect Redux
```javascript
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

```

## Documents
* [Awesome Redux](https://github.com/xgrommx/awesome-redux)
* [Redux offical docs](http://redux.js.org/)
* [Redux example es6](https://github.com/yildizberkay/redux-example)