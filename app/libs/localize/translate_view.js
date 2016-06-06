// translate_view.js

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View} from 'react-native';
import I18n from 'react-native-i18n';

export class TranslateView extends Component {
    render() {
        I18n.fallbacks = true;
        I18n.locale = this.props.i18n.locale;
        I18n.translations = this.props.i18n.translations;

        let {values} = this.props;
        let props = {};

        Object.keys(values).map((key) => {
            if (typeof values[key] != 'object') {
                props[key] = I18n.t(values[key]);
            }
            else {
                props[key] = I18n.t(values[key].value, values[key].params);
            }
        })

        return (
            <View style={this.props.style}>
                {React.cloneElement(this.props.children, props)}
            </View>
        )
    }
}

TranslateView.defaultProps = {
    keys: '',
    values: ''
}

const mapStateToProps = (state, ownProps) => {
    return {
        i18n: state.i18n,
        ...ownProps
    }
}

export default connect(mapStateToProps)(TranslateView);

