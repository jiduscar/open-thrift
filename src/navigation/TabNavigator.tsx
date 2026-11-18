import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import {
  BottomTabBarButtonProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import { colors, fonts } from '../theme';
import type { TabParamList } from './types';
import { ExploreScreen } from '../screens/ExploreScreen';
import { FavoritesScreen } from '../screens/FavoritesScreen';
import { SellScreen } from '../screens/SellScreen';
import { TransactionsScreen } from '../screens/TransactionsScreen';
import { ProfileScreen } from '../screens/ProfileScreen';
import {
  ExploreIcon,
  HeartIcon,
  PersonIcon,
  PlusIcon,
  ReceiptIcon,
} from '../components/TabIcons';

const Tab = createBottomTabNavigator<TabParamList>();

/** Raised round purple "+" button in the middle of the tab bar. */
function SellButton({ onPress, accessibilityState }: BottomTabBarButtonProps) {
  return (
    <View style={styles.sellWrapper} pointerEvents="box-none">
      <Pressable
        onPress={onPress}
        accessibilityRole="button"
        accessibilityLabel="Sell an item"
        accessibilityState={accessibilityState}
        style={({ pressed }) => [styles.sellButton, pressed && styles.pressed]}
      >
        <PlusIcon color={colors.white} />
      </Pressable>
    </View>
  );
}

type IconArgs = { color: string; focused: boolean };
const exploreIcon = ({ color, focused }: IconArgs) => (
  <ExploreIcon color={color} filled={focused} />
);
const heartIcon = ({ color, focused }: IconArgs) => (
  <HeartIcon color={color} filled={focused} />
);
const receiptIcon = ({ color }: IconArgs) => <ReceiptIcon color={color} />;
const personIcon = ({ color, focused }: IconArgs) => (
  <PersonIcon color={color} filled={focused} />
);
const sellButton = (props: BottomTabBarButtonProps) => (
  <SellButton {...props} />
);

export function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.textMuted,
        tabBarLabelStyle: { fontFamily: fonts.medium, fontSize: 12 },
        tabBarStyle: styles.tabBar,
      }}
    >
      <Tab.Screen
        name="Explore"
        component={ExploreScreen}
        options={{
          tabBarIcon: exploreIcon,
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          title: 'Favourites',
          tabBarIcon: heartIcon,
        }}
      />
      <Tab.Screen
        name="Sell"
        component={SellScreen}
        options={{
          tabBarLabel: () => null,
          tabBarButton: sellButton,
        }}
      />
      <Tab.Screen
        name="Transactions"
        component={TransactionsScreen}
        options={{
          tabBarIcon: receiptIcon,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: personIcon,
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: colors.surface,
  },
  sellWrapper: { flex: 1, alignItems: 'center' },
  sellButton: {
    top: -24,
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 6,
    shadowColor: colors.primary,
    shadowOpacity: 0.35,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
  },
  pressed: { opacity: 0.85 },
});
