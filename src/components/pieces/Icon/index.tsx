import { icons } from '@/Icons';
import type { IconName, IconCategory, IconComponentType } from '@/Icons';
import type { Size } from '@/types';

import styles from './index.module.css';

type IconProps = {
  name: IconName;
  size?: Size | number;
  className?: string;
  ariaLabel?: string;
};

const findIconCategory = (name: IconName): IconCategory => {
  for (const category in icons) {
    if (name in icons[category as IconCategory]) {
      return category as IconCategory;
    }
  }
  throw new Error(`Icon "${String(name)}" not found in any category.`);
};

export const Icon = ({
  name,
  size = 'md',
  className = '',
  ariaLabel = '',
}: IconProps) => {
  const category = findIconCategory(name);

  const IconComponent = icons[category][
    name as keyof (typeof icons)[IconCategory]
  ] as IconComponentType;

  const iconClasses = `${styles.icon} ${styles[size]} ${className}`;

  return <IconComponent className={iconClasses} aria-label={ariaLabel} />;
};
