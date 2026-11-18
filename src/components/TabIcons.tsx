import React from 'react';
import Svg, { Circle, Path } from 'react-native-svg';

type IconProps = { color: string; size?: number; filled?: boolean };

export function ExploreIcon({ color, size = 24, filled }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24">
      <Circle
        cx={12}
        cy={12}
        r={10}
        fill={filled ? color : 'none'}
        stroke={color}
        strokeWidth={1.8}
      />
      <Path d="M15.5 8.5l-2 5-5 2 2-5z" fill={filled ? '#fff' : color} />
    </Svg>
  );
}

export function HeartIcon({ color, size = 24, filled }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24">
      <Path
        d="M12 20.5s-7.5-4.6-9.2-9.3C1.6 7.8 3.9 4.5 7.3 4.5c2 0 3.4 1.1 4.7 2.7 1.3-1.6 2.7-2.7 4.7-2.7 3.4 0 5.7 3.3 4.5 6.7-1.7 4.7-9.2 9.3-9.2 9.3z"
        fill={filled ? color : 'none'}
        stroke={color}
        strokeWidth={1.8}
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export function PlusIcon({ color, size = 30 }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24">
      <Path
        d="M12 4v16M4 12h16"
        stroke={color}
        strokeWidth={2.2}
        strokeLinecap="round"
      />
    </Svg>
  );
}

export function ReceiptIcon({ color, size = 24 }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24">
      <Path
        d="M6 3h12v18l-2.5-1.5L13 21l-2.5-1.5L8 21l-2-1.5zM9 8h6M9 12h6M9 16h3"
        fill="none"
        stroke={color}
        strokeWidth={1.8}
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </Svg>
  );
}

export function PersonIcon({ color, size = 24, filled }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24">
      <Circle
        cx={12}
        cy={8}
        r={4}
        fill={filled ? color : 'none'}
        stroke={color}
        strokeWidth={1.8}
      />
      <Path
        d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7"
        fill="none"
        stroke={color}
        strokeWidth={1.8}
        strokeLinecap="round"
      />
    </Svg>
  );
}
