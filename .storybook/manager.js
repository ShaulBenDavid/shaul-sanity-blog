import { addons } from "@storybook/manager-api";
import storyBookTheme from "./StoryBookTheme";

addons.setConfig({
  theme: storyBookTheme,
});
