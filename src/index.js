import React from 'react';
import {
    KeyboardAvoidingView as RNKeyboardAvoidingView,
    Platform
} from 'react-native';

export const KeyboardAvoidingView = props => (
    <RNKeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        {...props}
    />
);
