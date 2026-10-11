# AGENTS.md - `@codexporer.io/expo-keyboard-avoiding-view` Instructions

## Package Overview
Keyboard avoidance component wrapping `react-native-keyboard-controller` and safe area insets for seamless form UX.

## Key Exports
- `KeyboardAvoidingView` (named and default export): Keyboard avoidance container.
- `KeyboardAvoidingViewProps`: Component props interface.

## Props & Modes
- `hasScroll` (boolean): Use for screens requiring scrollable text field content.
- `isSticky` (boolean): Use for sticky action buttons aligned above keyboard.
- `isInModal` (boolean): Use inside modal overlays.
- `offset` (number): Additional vertical offset in pixels.

## Critical Guidelines for AI Agents
- Always specify `hasScroll` when forms exceed screen height or contain multiline inputs.
- Always specify `isInModal` inside `<Modal>` components.
- Use `isSticky` when pinning a bottom action button or footer bar above the virtual keyboard.
