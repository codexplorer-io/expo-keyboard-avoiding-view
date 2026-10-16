---
name: expo-keyboard-avoiding-view
description: Instructions for using @codexporer.io/expo-keyboard-avoiding-view for form input keyboard handling across screens, scroll views, sticky footer buttons, and modals.
---

# `@codexporer.io/expo-keyboard-avoiding-view` Skill

## Overview
`@codexporer.io/expo-keyboard-avoiding-view` wraps `react-native-keyboard-controller` and `react-native-safe-area-context` to automatically manage soft keyboard avoidance, scroll views, sticky footers, and modal form behavior.

---

## Peer Dependencies

All 4 peer dependencies are required and must be installed in consuming projects (none are optional):
- `react`: `*`
- `react-native`: `*`
- `react-native-keyboard-controller`: `*`
- `react-native-safe-area-context`: `*`

---

## When to Use
- Wrapping form screens with text inputs to prevent the virtual keyboard from obscuring fields.
- Pinning sticky buttons or footers directly above the soft keyboard.
- Handling keyboard avoidance inside native modal dialogs.

---

## Prerequisites in Component Tree
Consuming applications must mount both providers at the root of their component tree (e.g. in `_layout.tsx` or `App.tsx`):
- `<SafeAreaProvider>` from `react-native-safe-area-context`
- `<KeyboardProvider>` from `react-native-keyboard-controller`

---

## API Reference

### `<KeyboardAvoidingView />` Component Selection

The component dynamically renders one of three underlying views:
1. `isInModal={true}`: Renders React Native's `<KeyboardAvoidingView>` (`RNKeyboardAvoidingView`) with `behavior={Platform.OS === 'ios' ? 'padding' : 'height'}`.
2. `isSticky={true}`: Renders `<KeyboardStickyView>` from `react-native-keyboard-controller`. Applies `extraKeyboardSpace={-insets.bottom}`.
3. `hasScroll={true}`: Renders `<KeyboardAwareScrollView>` from `react-native-keyboard-controller`. Applies `extraKeyboardSpace={-insets.bottom}`.
4. Default: Renders `<KeyboardAvoidingView>` from `react-native-keyboard-controller` with `behavior={Platform.OS === 'ios' ? 'padding' : 'height'}` and `extraKeyboardSpace={-insets.bottom}`.

### Props

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `hasScroll` | `boolean` | `false` | Set to `true` to render a keyboard-aware scroll container (`KeyboardAwareScrollView`). |
| `isSticky` | `boolean` | `false` | Set to `true` for sticky footer view elements (`KeyboardStickyView`). |
| `isInModal` | `boolean` | `false` | Set to `true` inside modal dialogs to use native React Native `KeyboardAvoidingView`. |
| `children` | `React.ReactNode` | — | Component children. |
| `...props` | `any` | — | Additional props forwarded directly to the underlying container component. |

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
import { View, TextInput, Button } from 'react-native';
import { KeyboardAvoidingView } from '@codexporer.io/expo-keyboard-avoiding-view';

export function CheckoutScreen() {
  return (
    <View style={{ flex: 1 }}>
      <TextInput placeholder="Promo code" />
      <KeyboardAvoidingView isSticky>
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

## Critical Rules & Guidelines
1. **Forms with Scroll View**: Always pass `hasScroll={true}` when wrapping long forms or screens containing multiline text inputs.
2. **Sticky Footers**: Pass `isSticky={true}` when action buttons should stick directly above the soft keyboard.
3. **Modal Screens**: Always pass `isInModal={true}` when wrapping content inside a React Native `<Modal>`.
4. **Avoid Manual Offset Calculations**: Do NOT manually calculate keyboard offsets or safe area bottom padding; safe area bottom insets are automatically subtracted (`extraKeyboardSpace={-insets.bottom}`).
5. **All 4 Peer Dependencies Required**: Consuming applications must install all 4 peer dependencies without marking any as optional.

