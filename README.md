# `@codexporer.io/expo-keyboard-avoiding-view`

Keyboard avoidance container component powered by `react-native-keyboard-controller` and `react-native-safe-area-context`.

## Prerequisites

Ensure `react-native-keyboard-controller` and `react-native-safe-area-context` are installed in your workspace:

```bash
yarn add react-native-keyboard-controller react-native-safe-area-context
```

## Props

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `hasScroll` | `boolean` | `false` | Renders a keyboard-aware scroll container (`KeyboardAwareScrollView`). |
| `isSticky` | `boolean` | `false` | Renders a sticky footer container (`KeyboardStickyView`). |
| `isInModal` | `boolean` | `false` | Uses React Native's native `KeyboardAvoidingView` for modal dialogs. |
| `children` | `ReactNode` | — | Component children. |

## Usage Examples

### Standard Form with Scroll (`hasScroll`)

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
```

### Modal Form (`isInModal`)

```tsx
import React from 'react';
import { Modal, View, TextInput } from 'react-native';
import { KeyboardAvoidingView } from '@codexporer.io/expo-keyboard-avoiding-view';

export function EditModal({ visible, onClose }) {
  return (
    <Modal visible={visible} animationType="slide">
      <KeyboardAvoidingView isInModal style={{ flex: 1 }}>
        <View style={{ flex: 1, padding: 20 }}>
          <TextInput placeholder="Enter value..." />
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
}
```
