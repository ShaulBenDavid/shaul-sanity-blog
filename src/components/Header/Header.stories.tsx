import React from 'react';
import ReactFocusLock from 'react-focus-lock';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Header from './Header';

export default {
  title: 'Layout/Header',
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = () => (
  <ReactFocusLock>
    <Header />
  </ReactFocusLock>
);
export const Playground = Template.bind({});
Playground.args = {};
