import type { IconName } from '@/Icons';

export const iconPositions = ['leading', 'trailing', 'dot', 'only'] as const;
export const buttonSizes = ['sm', 'md', 'lg', 'xl'] as const;
export const buttonVariants = [
  'primary',
  'secondary',
  'secondary-gray',
  'tertiary',
  'tertiary-gray',
  'link',
  'link-gray',
  'ghost',
] as const;
export const size = ['xs', 'sm', 'md', 'lg', 'xl'] as const;
export const badgeColors = [
  'brand',
  'gray',
  'destructive',
  'warning',
  'success',
] as const;
export const badgeVariants = ['primary', 'secondary', 'outline'] as const;
export const badgeSizes = ['sm', 'md', 'lg'] as const;

export type IconPosition = (typeof iconPositions)[number];
export type ButtonSize = (typeof buttonSizes)[number];
export type ButtonVariant = (typeof buttonVariants)[number];
export type Size = (typeof size)[number];
export type BadgeColor = (typeof badgeColors)[number];
export type BadgeVariant = (typeof badgeVariants)[number];
export type BadgeSize = (typeof badgeSizes)[number];

// export type StepperAction = {
//   onClick: () => void;
//   label: string;
//   icon?: IconName;
//   iconPosition?: Extract<IconPosition, 'leading' | 'trailing'>;
// };

export interface StepperAction {
  readonly label: string;
  readonly onClick: () => void | Promise<void>;
  readonly icon?: IconName;
  readonly iconPosition?: Extract<IconPosition, 'leading' | 'trailing'>;
  readonly disabled?: boolean;
}

export type Stepper = {
  backAction?: StepperAction;
  nextAction?: StepperAction;
  skipAction?: StepperAction;
};
