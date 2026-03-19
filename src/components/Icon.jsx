import React from 'react';
import * as LucideIcons from 'lucide-react';

const Icon = ({ name, size = 18, color = "currentColor", strokeWidth = 2, ...props }) => {
  const LucideIcon = LucideIcons[name];
  if (!LucideIcon) return null;
  return <LucideIcon size={size} color={color} strokeWidth={strokeWidth} {...props} />;
};

export default Icon;
