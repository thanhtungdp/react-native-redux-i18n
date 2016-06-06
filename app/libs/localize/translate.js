// translate.js

import React from 'react';
import Text from './translate_text';
import View from './translate_view';

export function translateText(keyValue, params = {}) {
    return <Text value={keyValue} params={params}/>
}

export function wrapTranslate(keyProps, Component, props) {
    return <View values={keyProps} {...props}>{Component}</View>
}