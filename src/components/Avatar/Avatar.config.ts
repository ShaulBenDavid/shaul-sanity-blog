import { AvatarSizes } from './Avatar.types';

export const avatarSizesConfig: Record<AvatarSizes, string> = {
  [AvatarSizes.SMALL]: 'h-5 w-5 text-sm',
  [AvatarSizes.MEDIUM]: 'h-6 w-6 text-base',
  [AvatarSizes.LARGE]: 'h-8 w-8 text-lg',
};
