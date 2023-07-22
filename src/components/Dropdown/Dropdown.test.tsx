import React from 'react';
import { render } from 'test-utils';
import Dropdown from './Dropdown';

describe('Dropdown component', () => {
  it('renders correctly', () => {
    const { getByText } = render(
      <Dropdown isOpen onClose={() => ({})} id="usermenu-desc">
        s
      </Dropdown>
    );
    const alertElement = getByText('s');
    expect(alertElement).toBeInTheDocument();
  });

  it('isOpen work as expected', () => {
    const { getByTestId } = render(
      <Dropdown isOpen onClose={() => ({})} id="usermenu-desc">
        s
      </Dropdown>
    );
    const dropdownElement = getByTestId('dropdown-component-test-id');
    expect(dropdownElement).toHaveClass('flex');
  });
});
