---
name: expo-keyboard-avoiding-view
description: Instructions for using @codexporer.io/expo-keyboard-avoiding-view for form input keyboard handling across screens, scroll views, sticky footer buttons, and modals.
---

# `@codexporer.io/expo-keyboard-avoiding-view` Skill

## Overview
`@codexporer.io/expo-keyboard-avoiding-view` wraps `react-native-keyboard-controller` and `react-native-safe-area-context` to automatically manage soft keyboard avoidance, scroll views, sticky footers, and modal form behavior.

---

## Prerequisites
Ensure `<KeyboardProvider>` from `react-native-keyboard-controller` is mounted at the app root (e.g. in `_layout.tsx` or `App.tsx`).

---

## Core Component Export

```tsx
import { KeyboardAvoidingView } from '@codexporer.io/expo-keyboard-avoiding-view';
```

---

## Props Interface

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `hasScroll` | `boolean` | `false` | Set to `true` to render a keyboard-aware scroll container (`KeyboardAwareScrollView`). |
| `isSticky` | `boolean` | `false` | Set to `true` for sticky footer view elements (`KeyboardStickyView`). |
| `isInModal` | `boolean` | `false` | Set to `true` inside modal dialogs to use native React Native `KeyboardAvoidingView`. |
| `offset` | `number` | `0` | Additional vertical offset to apply above the keyboard. |
| `children` | `ReactNode` | — | Component children. |
| `style` | `StyleProp<ViewStyle>` | — | Container style. |

---

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
```

### 2. Sticky Footer Button (`isSticky`)

```tsx
import React from 'react';
import { View, TextInput } from 'react-native';
import { KeyboardAvoidingView } from '@codexporer.io/expo-keyboard-avoiding-view';
import { Button } from '@codexporer.io/expo-button';

export function CheckoutScreen() {
  return (
    <View style={{ flex: 1 }}>
      <TextInput placeholder="Promo code" />
      <KeyboardAvoidingView isSticky offset={16}>
        <Button title="Submit" onPress={() => console.log('Submit')} />
      </KeyboardAvoidingView>
    </View>
  );
}
```

### 3. Modal Input Form (`isInModal`)

```tsx
import React from 'react';
import { Modal, View, TextInput } from 'react-native';
import { KeyboardAvoidingView } from '@codexporer.io/expo-keyboard-avoiding-view';

export function EditModal({ visible, onClose }: { visible: boolean; onClose: () => void }) {
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

---

## Implementation Rules
1. **Forms with Scroll View**: Always pass `hasScroll={true}` when wrapping long forms or screens containing multiline text inputs.
2. **Sticky Footers**: Pass `isSticky={true}` when action buttons should stick directly above the soft keyboard.
3. **Modal Screens**: Always pass `isInModal={true}` when wrapping content inside a React Native `<Modal>`.
4. **Avoid Manual Offset Calculations**: Do NOT manually calculate keyboard offsets or padding; safe area bottom insets are automatically handled.
