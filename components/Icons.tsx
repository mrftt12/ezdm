
import React from 'react';

interface MaterialIconProps {
  name: string;
  className?: string;
  filled?: boolean;
}

export const MaterialIcon: React.FC<MaterialIconProps> = ({ name, className = '', filled }) => {
  const style = filled ? { fontVariationSettings: "'FILL' 1" } : {};
  return (
    <span className={`material-symbols-outlined ${className}`} style={style}>
      {name}
    </span>
  );
};
