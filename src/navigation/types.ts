import type { NavigatorScreenParams } from '@react-navigation/native';

export type TabParamList = {
  Explore: undefined;
  Favorites: undefined;
  Sell: { productId?: string } | undefined; // productId = Edit Mode
  Transactions: undefined;
  Profile: undefined;
};

export type RootStackParamList = {
  Tabs: NavigatorScreenParams<TabParamList> | undefined;
  ProductDetails: { productId: string };
  MyItems: undefined;
  BuyTokens: undefined;
  Notifications: undefined;
  HelpSupport: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
