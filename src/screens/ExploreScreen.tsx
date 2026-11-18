import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AppText } from '../components/AppText';
import { colors, radius, spacing } from '../theme';

/** Header matches the earlier design; the swipe deck lands in phase 4. */
export function ExploreScreen() {
  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <View style={styles.header}>
        <AppText variant="title" color={colors.primary}>
          Open Thrift
        </AppText>
        <Pressable style={styles.locationChip} accessibilityRole="button">
          <AppText variant="caption" weight="medium" color={colors.text}>
            Items by Location
          </AppText>
        </Pressable>
      </View>
      <View style={styles.deckPlaceholder}>
        <AppText variant="heading">Swipe deck</AppText>
        <AppText variant="caption" style={styles.center}>
          Swipe right to favourite, left to pass. Coming in phase 4.
        </AppText>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.background },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.md,
    backgroundColor: colors.surface,
  },
  locationChip: {
    backgroundColor: colors.background,
    borderRadius: radius.pill,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
  },
  deckPlaceholder: {
    flex: 1,
    margin: spacing.md,
    borderRadius: radius.lg,
    backgroundColor: colors.surface,
    alignItems: 'center',
    justifyContent: 'center',
    padding: spacing.lg,
  },
  center: { textAlign: 'center', marginTop: spacing.sm },
});
