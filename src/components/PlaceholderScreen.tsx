import React from 'react';
import { StyleSheet, View } from 'react-native';
import { colors, spacing } from '../theme';
import { AppText } from './AppText';

type Props = { title: string; description: string; children?: React.ReactNode };

/** Temporary body for screens that are built in later phases. */
export function PlaceholderScreen({ title, description, children }: Props) {
  return (
    <View style={styles.container}>
      <AppText variant="heading" style={styles.title}>
        {title}
      </AppText>
      <AppText variant="caption" style={styles.description}>
        {description}
      </AppText>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: spacing.lg,
    backgroundColor: colors.background,
  },
  title: { marginBottom: spacing.sm },
  description: { textAlign: 'center' },
});
