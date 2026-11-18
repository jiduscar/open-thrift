module.exports = {
  presets: ['module:@react-native/babel-preset'],
  // Must be listed last (required by react-native-reanimated 4).
  plugins: ['react-native-worklets/plugin'],
};
