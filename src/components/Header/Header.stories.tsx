import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Header from './Header';

export default {
  title: 'Layout/Header',
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = () => <Header />;

export const Playground = Template.bind({});
Playground.args = {};
