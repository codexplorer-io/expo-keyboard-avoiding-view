# AGENTS.md - `@codexporer.io/expo-keyboard-avoiding-view` Instructions

## Package Overview

`@codexporer.io/expo-keyboard-avoiding-view` wraps `react-native-keyboard-controller` and `react-native-safe-area-context` to automatically manage soft keyboard avoidance, scroll views, sticky footers, and modal form behavior.

---

## Peer Dependencies

All 4 peer dependencies must be installed in consuming projects (none are optional):
- `react`: `*`
- `react-native`: `*`
- `react-native-keyboard-controller`: `*`
- `react-native-safe-area-context`: `*`

---

## Prerequisites in Component Tree

Consuming applications must wrap their root component tree with:
- `<SafeAreaProvider>` from `react-native-safe-area-context`
- `<KeyboardProvider>` from `react-native-keyboard-controller`

---

## Key Exports

- `KeyboardAvoidingView` (named export): Dynamic keyboard avoidance container component.
- `KeyboardAvoidingViewProps`: Component props interface.

---

## Component Selection & Props

- **Modal Mode (`isInModal={true}`)**: Renders React Native's built-in `<KeyboardAvoidingView>` (`RNKeyboardAvoidingView`) with `behavior={Platform.OS === 'ios' ? 'padding' : 'height'}`.
- **Sticky Mode (`isSticky={true}`)**: Renders `<KeyboardStickyView>` from `react-native-keyboard-controller`. Subdivides keyboard offset by `-insets.bottom`.
- **Scrollable Mode (`hasScroll={true}`)**: Renders `<KeyboardAwareScrollView>` from `react-native-keyboard-controller`. Subdivides keyboard offset by `-insets.bottom`.
- **Standard View (Default)**: Renders `<KeyboardAvoidingView>` from `react-native-keyboard-controller` with `behavior={Platform.OS === 'ios' ? 'padding' : 'height'}` and `extraKeyboardSpace={-insets.bottom}`.

---

## Critical Guidelines for AI Agents

- **Forms with Scroll**: Always specify `hasScroll={true}` when forms exceed screen height or contain multiline inputs.
- **Modals**: Always specify `isInModal={true}` inside React Native `<Modal>` components.
- **Sticky Footers**: Use `isSticky={true}` when pinning a bottom action button or footer bar above the virtual keyboard.
- **Safe Area Insets**: Do not manually pad bottom insets for the keyboard; the component automatically applies `extraKeyboardSpace={-insets.bottom}`.

