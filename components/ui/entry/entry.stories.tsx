import type { Meta, StoryObj } from "@storybook/react-vite";
import { Entry } from "./entry";

const meta = {
  component: Entry,
} satisfies Meta<typeof Entry>;

export default meta;
type Story = StoryObj<typeof meta>;

export const EntryStory: Story = {
  args: {
    label: "User",
    placeholder: "Enter your username",
  },
};
