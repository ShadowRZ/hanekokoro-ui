import { Avatar as StyledAvatar } from '@hanekokoro-ui/solid/avatar';
import type { ElementType } from '@hanekokoro-ui/styled-system/types';
import { type JSX, onMount, splitProps } from 'solid-js';
import UserCircleFill from '~icons/ph/user-circle-fill';

export type AvatarProps<T extends ElementType = 'span'> = StyledAvatar.RootProps<T> & {
  name?: string;
  src?: string;
  icon?: JSX.Element;
};

export const Avatar = <T extends ElementType = 'span'>(props: AvatarProps<T>) => {
  const [localProps, rootProps] = splitProps(props, ['name', 'src', 'icon']);

  onMount(() => {
    console.log(rootProps);
  });

  return (
    <StyledAvatar.Root {...(rootProps as StyledAvatar.RootProps<T>)}>
      <StyledAvatar.Fallback>
        {getInitials(localProps.name) || localProps.icon || <UserCircleFill />}
      </StyledAvatar.Fallback>
      <StyledAvatar.Image src={localProps.src} alt={localProps.name} />
    </StyledAvatar.Root>
  );
};

const getInitials = (name = '') =>
  name
    .split(' ')
    .map((part) => part[0])
    .splice(0, 2)
    .join('')
    .toUpperCase();
