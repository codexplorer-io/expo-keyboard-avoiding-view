import React from 'react';
import { Platform } from 'react-native';
import {
    KeyboardAvoidingView as RNKeyboardAvoidingView,
    KeyboardAwareScrollView,
    KeyboardStickyView
} from 'react-native-keyboard-controller';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const KeyboardAvoidingView = ({
    hasScroll,
    isSticky,
    children,
    ...props
}) => {
    const insets = useSafeAreaInsets();
    let View = RNKeyboardAvoidingView;

    if (hasScroll) {
        View = KeyboardAwareScrollView;
    }

    if (isSticky) {
        View = KeyboardStickyView;
    }

    return (
        <View
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            extraKeyboardSpace={-insets.bottom}
            {...props}
        >
            {children}
        </View>
    );
};
