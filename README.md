# `@codexporer.io/expo-keyboard-avoiding-view`

Keyboard avoidance container component powered by `react-native-keyboard-controller` and `react-native-safe-area-context` for seamless, glitch-free keyboard interactions on iOS and Android.

## Installation & Peer Dependencies

```bash
yarn add @codexporer.io/expo-keyboard-avoiding-view
```

Ensure required peer dependencies are installed:
```bash
yarn add react-native-keyboard-controller react-native-safe-area-context
```

## Props Reference

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `hasScroll` | `boolean` | `false` | Renders a keyboard-aware scroll container (`KeyboardAwareScrollView`) |
| `isSticky` | `boolean` | `false` | Renders a sticky footer container (`KeyboardStickyView`) |
| `isInModal` | `boolean` | `false` | Uses React Native's native `KeyboardAvoidingView` optimized for modal dialogs |
| `offset` | `number` | `0` | Additional vertical offset to apply above the keyboard |
| `children` | `ReactNode` | — | Component children |
| `style` | `StyleProp<ViewStyle>` | — | Container style |

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
      <KeyboardAvoidingView isSticky offset={16}>
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

export function EditModal({ visible, onClose }) {
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

## License

MIT
