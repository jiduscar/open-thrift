import React from 'react';
import { StyleSheet, Text, TextProps } from 'react-native';
import { colors, fonts } from '../theme';

type Variant = 'title' | 'heading' | 'body' | 'caption' | 'button';
type Weight = keyof typeof fonts;

type Props = TextProps & { variant?: Variant; weight?: Weight; color?: string };

/** All text in the app goes through this so Work Sans is used everywhere. */
export function AppText({
  variant = 'body',
  weight,
  color,
  style,
  ...rest
}: Props) {
  const v = variantStyles[variant];
  return (
    <Text
      {...rest}
      style={[
        v,
        weight && { fontFamily: fonts[weight] },
        color ? { color } : null,
        style,
      ]}
    />
  );
}

const variantStyles = StyleSheet.create({
  title: { fontFamily: fonts.bold, fontSize: 28, color: colors.text },
  heading: { fontFamily: fonts.semiBold, fontSize: 20, color: colors.text },
  body: { fontFamily: fonts.regular, fontSize: 16, color: colors.text },
  caption: { fontFamily: fonts.regular, fontSize: 13, color: colors.textMuted },
  button: { fontFamily: fonts.semiBold, fontSize: 16, color: colors.white },
});
