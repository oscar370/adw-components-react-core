import type { Meta, StoryObj } from "@storybook/react-vite";
import { ChevronRight, User } from "lucide-react";
import { ListBox } from "../list-box";
import { ActionRow } from "./action-row";

const meta = {
  decorators: [
    (Story) => (
      <ListBox>
        <Story />
      </ListBox>
    ),
  ],
  component: ActionRow,
} satisfies Meta<typeof ActionRow>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ActionRowStory: Story = {
  args: {
    title: "User account",
    subtitle: "Manage your data and synchronization",
    icon: <User />,
    as: "a",
    href: "account",
    children: <ChevronRight size={18} />,
  },
};
