import type { CSSProperties } from "react";
import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { AppProviders } from "@/src/providers";
import { Header } from "./Header";

const styles: CSSProperties = {
  transform: "scale(1)",
  height: "100vh",
  position: "relative",
};

const meta: Meta<typeof Header> = {
  title: "Layout/Header",
  component: Header,
  tags: ["autodocs"],
  decorators: [
    (storyFn) => (
      <AppProviders>
        <div style={styles}>{storyFn()}</div>
      </AppProviders>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Header>;

export const Primary: Story = {
  render: () => <Header />,
};
