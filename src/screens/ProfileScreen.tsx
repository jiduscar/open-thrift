import React from 'react';
import { Pressable, ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AppText } from '../components/AppText';
import { colors, radius, spacing } from '../theme';
import type { RootStackParamList } from '../navigation/types';

type Nav = NativeStackNavigationProp<RootStackParamList>;

const LINKS: { label: string; route: keyof RootStackParamList }[] = [
  { label: 'My Items', route: 'MyItems' },
  { label: 'Buy Tokens', route: 'BuyTokens' },
  { label: 'Notifications', route: 'Notifications' },
  { label: 'Help & Support', route: 'HelpSupport' },
];

export function ProfileScreen() {
  const navigation = useNavigation<Nav>();
  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <ScrollView contentContainerStyle={styles.content}>
        <AppText variant="title">Profile</AppText>
        <View style={styles.balanceCard}>
          <AppText variant="caption" color={colors.white}>
            Token balance
          </AppText>
          {/* Live balance from users/{uid} arrives with auth in phase 2. */}
          <AppText variant="title" color={colors.white}>
            0 tokens
          </AppText>
        </View>
        {LINKS.map(link => (
          <Pressable
            key={link.route}
            accessibilityRole="button"
            onPress={() => navigation.navigate(link.route as never)}
            style={({ pressed }) => [styles.row, pressed && styles.pressed]}
          >
            <AppText>{link.label}</AppText>
            <AppText color={colors.textMuted}>{'›'}</AppText>
          </Pressable>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.background },
  content: { padding: spacing.md, gap: spacing.sm },
  balanceCard: {
    backgroundColor: colors.primary,
    borderRadius: radius.md,
    padding: spacing.lg,
    marginVertical: spacing.md,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: colors.surface,
    borderRadius: radius.md,
    padding: spacing.md,
  },
  pressed: { opacity: 0.7 },
});
