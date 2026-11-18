export const colors = {
  primary: '#8E2DE2',
  primaryDark: '#4A00E0',
  primaryTint: '#E1C4F0',
  background: '#F4F4F4',
  surface: '#FFFFFF',
  text: '#2B2B2B',
  textMuted: '#6E6E6E',
  border: '#E3E3E3',
  success: '#2E9E44', // "Visible" / online
  warning: '#F08000', // "Offline" / take offline
  warningTint: '#FFF0DC',
  danger: '#E0201B',
  like: '#0A8A0A',
  token: '#F2A93B',
  white: '#FFFFFF',
} as const;

/**
 * Work Sans is bundled in assets/fonts. On Android, custom fonts are
 * selected by file name, so each weight is its own family.
 */
export const fonts = {
  regular: 'WorkSans-Regular',
  medium: 'WorkSans-Medium',
  semiBold: 'WorkSans-SemiBold',
  bold: 'WorkSans-Bold',
} as const;

export const spacing = { xs: 4, sm: 8, md: 16, lg: 24, xl: 32 } as const;
export const radius = { sm: 8, md: 12, lg: 20, pill: 999 } as const;
