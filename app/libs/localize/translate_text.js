// translate_text.js

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Text} from 'react-native';
import I18n from 'react-native-i18n';

export class TranslateText extends Component{
    render(){
        I18n.locale = this.props.i18n.locale;
        I18n.fallbacks = true;
        I18n.translations = this.props.i18n.translations;

        return (
            <Text style={this.props.style}>
                {I18n.t(this.props.value, this.props.params)}
            </Text>
        )
    }
}

TranslateText.defaultProps = {
    params: {}
}

const mapStateToProps = (state, ownProps) => {
    return {
        i18n: state.i18n,
        ...ownProps
    }
}

export default connect(mapStateToProps)(TranslateText);

