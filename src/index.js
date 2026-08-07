import React from 'react';
import {
    KeyboardAvoidingView as RNKeyboardAvoidingView,
    Platform
} from 'react-native';
import {
    KeyboardAvoidingView as RNCKeyboardAvoidingView,
    KeyboardAwareScrollView as RNCKeyboardAwareScrollView,
    KeyboardStickyView as RNCKeyboardStickyView
} from 'react-native-keyboard-controller';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const KeyboardAvoidingView = ({
    hasScroll = false,
    isSticky = false,
    isInModal = false,
    children,
    ...props
}) => {
    const insets = useSafeAreaInsets();

    if (isInModal) {
        return (
            <RNKeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                {...props}
            >
                {children}
            </RNKeyboardAvoidingView>
        );
    }

    let View = RNCKeyboardAvoidingView;

    if (hasScroll) {
        View = RNCKeyboardAwareScrollView;
    }

    if (isSticky) {
        View = RNCKeyboardStickyView;
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
