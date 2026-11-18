import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { colors, fonts } from '../theme';
import type { RootStackParamList } from './types';
import { TabNavigator } from './TabNavigator';
import { ProductDetailsScreen } from '../screens/ProductDetailsScreen';
import { MyItemsScreen } from '../screens/MyItemsScreen';
import { BuyTokensScreen } from '../screens/BuyTokensScreen';
import { NotificationsScreen } from '../screens/NotificationsScreen';
import { HelpSupportScreen } from '../screens/HelpSupportScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

export function RootNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleStyle: { fontFamily: fonts.medium },
        headerTintColor: colors.text,
        headerShadowVisible: false,
        contentStyle: { backgroundColor: colors.background },
      }}
    >
      <Stack.Screen
        name="Tabs"
        component={TabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ProductDetails"
        component={ProductDetailsScreen}
        options={{ presentation: 'modal', title: 'Item details' }}
      />
      <Stack.Screen
        name="MyItems"
        component={MyItemsScreen}
        options={{ title: 'My Items' }}
      />
      <Stack.Screen
        name="BuyTokens"
        component={BuyTokensScreen}
        options={{ title: 'Buy Tokens' }}
      />
      <Stack.Screen name="Notifications" component={NotificationsScreen} />
      <Stack.Screen
        name="HelpSupport"
        component={HelpSupportScreen}
        options={{ title: 'Help & Support' }}
      />
    </Stack.Navigator>
  );
}
