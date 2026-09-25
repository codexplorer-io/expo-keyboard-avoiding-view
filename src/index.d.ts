import React from 'react';
import type { ViewProps } from 'react-native';

export interface KeyboardAvoidingViewProps extends ViewProps {
    hasScroll?: boolean;
    isSticky?: boolean;
    isInModal?: boolean;
    offset?: number;
    children?: React.ReactNode;
    [key: string]: any;
}

export declare const KeyboardAvoidingView: React.FC<KeyboardAvoidingViewProps>;
export default KeyboardAvoidingView;
