import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { AppText } from '../components/AppText';
import { colors, radius, spacing } from '../theme';
import { DEFAULT_BUNDLES, formatNaira } from '../lib/tokenPricing';

function validityLabel(days: number) {
  return days === 7
    ? 'Valid for 1 week'
    : `Valid for ${Math.round(days / 30)} month`;
}

/** Bundles shown from defaults; Paystack checkout is wired in phase 5. */
export function BuyTokensScreen() {
  return (
    <ScrollView contentContainerStyle={styles.content}>
      <AppText variant="title" style={styles.center}>
        Get Tokens
      </AppText>
      <AppText variant="caption" style={styles.center}>
        Unlock seller contacts. 1 token unlocks items up to{' '}
        {formatNaira(50_000)}; higher value items cost more tokens.
      </AppText>
      {DEFAULT_BUNDLES.map(b => (
        <View key={b.id} style={styles.card}>
          <AppText variant="heading" color={colors.token}>
            {b.tokens}
          </AppText>
          <View style={styles.flex}>
            <AppText variant="heading">{formatNaira(b.priceNaira)}</AppText>
            <AppText variant="caption">{validityLabel(b.validityDays)}</AppText>
          </View>
          <View style={styles.soon}>
            <AppText variant="caption" color={colors.white}>
              Soon
            </AppText>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  content: { padding: spacing.md, gap: spacing.md },
  center: { textAlign: 'center' },
  flex: { flex: 1 },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
    backgroundColor: colors.surface,
    borderRadius: radius.md,
    padding: spacing.md,
  },
  soon: {
    backgroundColor: colors.primary,
    opacity: 0.5,
    borderRadius: radius.pill,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
  },
});
