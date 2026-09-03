---
name: expo-keyboard-avoiding-view
description: Instructions for using @codexporer.io/expo-keyboard-avoiding-view for form input keyboard handling across screens, scroll views, sticky footer buttons, and modals.
---

# `@codexporer.io/expo-keyboard-avoiding-view` Skill

## Overview
`@codexporer.io/expo-keyboard-avoiding-view` wraps `react-native-keyboard-controller` and safe area insets to automatically manage soft keyboard avoidance, scroll views, sticky footers, and modal form behavior.

## Core Component Export

```tsx
import { KeyboardAvoidingView } from '@codexporer.io/expo-keyboard-avoiding-view';
```

## Props Interface

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `hasScroll` | `boolean` | `false` | Set to `true` to render a keyboard-aware scroll container (`KeyboardAwareScrollView`). |
| `isSticky` | `boolean` | `false` | Set to `true` for sticky footer view elements (`KeyboardStickyView`). |
| `isInModal` | `boolean` | `false` | Set to `true` inside modal dialogs to use native React Native `KeyboardAvoidingView`. |
| `children` | `ReactNode` | — | Component children. |

## Usage Examples

### 1. Standard Form with Scrollable Content (`hasScroll`)

```tsx
import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
import { KeyboardAvoidingView } from '@codexporer.io/expo-keyboard-avoiding-view';

export function FormScreen() {
  return (
    <KeyboardAvoidingView hasScroll style={styles.container}>
      <TextInput placeholder="First Name" />
      <TextInput placeholder="Last Name" />
      <TextInput placeholder="Notes" multiline />
    </KeyboardAvoidingView>
  );
}
```

### 2. Modal Input Form (`isInModal`)

```tsx
import React from 'react';
import { Modal, View, TextInput } from 'react-native';
import { KeyboardAvoidingView } from '@codexporer.io/expo-keyboard-avoiding-view';

export function EditModal({ visible, onClose }) {
  return (
    <Modal visible={visible} animationType="slide">
      <KeyboardAvoidingView isInModal style={{ flex: 1 }}>
        <View style={{ flex: 1, padding: 20 }}>
          <TextInput placeholder="Enter text..." />
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
}
```

## Implementation Rules
1. **Forms with Scroll View**: Always pass `hasScroll={true}` when wrapping long forms or screens containing multiline text inputs.
2. **Modal Screens**: Always pass `isInModal={true}` when wrapping content inside a React Native `<Modal>`.
3. **Avoid Manual Offset Calculations**: Do NOT manually calculate keyboard offsets or padding; safe area bottom insets are automatically handled.
