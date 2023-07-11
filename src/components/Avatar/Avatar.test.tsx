import React from 'react';
import { render } from '@testing-library/react';
import Avatar from './Avatar';
import { AvatarSizes } from './Avatar.types';

describe('Avatar', () => {
  it('renders correctly', () => {
    const { getByTestId } = render(
      <Avatar size={AvatarSizes.LARGE} name="shaul" />
    );
    const avatarElement = getByTestId('avatar-component-test-id');
    expect(avatarElement).toBeInTheDocument();
  });

  it('renders correctly with the size prop', () => {
    const { getByTestId } = render(
      <Avatar size={AvatarSizes.LARGE} name="shaul" />
    );
    const avatarElement = getByTestId('avatar-component-test-id');
    expect(avatarElement).toHaveClass('h-8');
    expect(avatarElement).toHaveClass('w-8');
  });

  it('renders correctly with the name letters', () => {
    const { getByTestId } = render(
      <Avatar size={AvatarSizes.LARGE} name="shaul" />
    );
    const avatarElement = getByTestId('avatar-component-test-id');
    expect(avatarElement.innerHTML).toEqual('s');
  });
});
