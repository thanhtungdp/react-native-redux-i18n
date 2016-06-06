import React,{Component} from 'react';
import Root from './redux/Root';
import {translateText, wrapTranslate} from './libs/localize/index';
import ChangeLocaleTest from './redux/containers/ChangeLocaleTest';

export default class AppRedux extends Component {
    render() {
        return (
            <Root>
                <ChangeLocaleTest/>
            </Root>
        )
    }
}

