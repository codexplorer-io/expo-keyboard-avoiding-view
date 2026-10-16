# `@codexporer.io/expo-keyboard-avoiding-view`

Keyboard avoidance container component powered by `react-native-keyboard-controller` and `react-native-safe-area-context` for seamless, glitch-free keyboard interactions on iOS and Android.

---

## Peer Dependencies

All peer dependencies are required and must be installed in consuming projects (none are optional):
- `react`: `*`
- `react-native`: `*`
- `react-native-keyboard-controller`: `*`
- `react-native-safe-area-context`: `*`

---

## Installation

```bash
yarn add @codexporer.io/expo-keyboard-avoiding-view
```

---

## Prerequisites in Component Tree

Your application root must mount the following providers (e.g. in `_layout.tsx` or `App.tsx`):
- `<KeyboardProvider>` from `react-native-keyboard-controller`
- `<SafeAreaProvider>` from `react-native-safe-area-context`

```tsx
import React from 'react';
import { KeyboardProvider } from 'react-native-keyboard-controller';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <SafeAreaProvider>
      <KeyboardProvider>
        {children}
      </KeyboardProvider>
    </SafeAreaProvider>
  );
}
```

---

## Component Behavior & Selection

`<KeyboardAvoidingView />` dynamically selects the optimal container based on props:

1. **Modal Mode (`isInModal={true}`)**:
   - Renders React Native's `<KeyboardAvoidingView>` (`RNKeyboardAvoidingView`).
   - Automatically sets `behavior={Platform.OS === 'ios' ? 'padding' : 'height'}`.
2. **Sticky Mode (`isSticky={true}`)**:
   - Renders `<KeyboardStickyView>` from `react-native-keyboard-controller`.
   - Automatically offsets safe area bottom inset via `extraKeyboardSpace={-insets.bottom}`.
3. **Scrollable Mode (`hasScroll={true}`)**:
   - Renders `<KeyboardAwareScrollView>` from `react-native-keyboard-controller`.
   - Automatically offsets safe area bottom inset via `extraKeyboardSpace={-insets.bottom}`.
4. **Standard View Mode (Default)**:
   - Renders `<KeyboardAvoidingView>` from `react-native-keyboard-controller`.
   - Automatically sets `behavior={Platform.OS === 'ios' ? 'padding' : 'height'}` and `extraKeyboardSpace={-insets.bottom}`.

---

## Props Reference

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `hasScroll` | `boolean` | `false` | Renders a scrollable container (`KeyboardAwareScrollView` from `react-native-keyboard-controller`). |
| `isSticky` | `boolean` | `false` | Renders a sticky footer container (`KeyboardStickyView` from `react-native-keyboard-controller`). |
| `isInModal` | `boolean` | `false` | Renders React Native's built-in `KeyboardAvoidingView` optimized for modal dialogs. |
| `children` | `React.ReactNode` | — | Component children. |
| `...props` | `any` | — | Additional props forwarded directly to the underlying container component. |

---

## Usage Examples

### Standard Form with Scroll (`hasScroll`)

```tsx
import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
import { KeyboardAvoidingView } from '@codexporer.io/expo-keyboard-avoiding-view';

export function FormScreen() {
  return (
    <KeyboardAvoidingView hasScroll style={styles.container}>
      <TextInput placeholder="Track Title" style={styles.input} />
      <TextInput placeholder="Artist Name" style={styles.input} />
      <TextInput placeholder="Description" multiline style={styles.input} />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  input: {
    height: 48,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 16,
  },
});
```

### Sticky Footer Button (`isSticky`)

```tsx
import React from 'react';
import { View, TextInput, Button } from 'react-native';
import { KeyboardAvoidingView } from '@codexporer.io/expo-keyboard-avoiding-view';

export function CheckoutScreen() {
  return (
    <View style={{ flex: 1 }}>
      <TextInput placeholder="Coupon code" />
      <KeyboardAvoidingView isSticky>
        <Button title="Complete Order" onPress={() => console.log('Submit')} />
      </KeyboardAvoidingView>
    </View>
  );
}
```

### Modal Form (`isInModal`)

```tsx
import React from 'react';
import { Modal, View, TextInput } from 'react-native';
import { KeyboardAvoidingView } from '@codexporer.io/expo-keyboard-avoiding-view';

export function EditModal({ visible, onClose }: { visible: boolean; onClose: () => void }) {
  return (
    <Modal visible={visible} animationType="slide">
      <KeyboardAvoidingView isInModal style={{ flex: 1 }}>
        <View style={{ flex: 1, padding: 20 }}>
          <TextInput placeholder="Enter preset name..." />
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
}
```

---

## License

MIT

