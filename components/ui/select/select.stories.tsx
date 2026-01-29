import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { Select } from "./select";

const meta = {
  component: Select,
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof Select>;

export const SelectStory: Story = {
  render: () => {
    const [select, setSelect] = useState("visible");
    return (
      <div className="flex flex-col gap-4">
        <Select
          title="Visibility"
          onChange={setSelect}
          options={[
            { label: "Visible", value: "visible" },
            { label: "Invisible", value: "invisible" },
          ]}
          value={select}
        />

        <Select
          onChange={setSelect}
          options={[
            { label: "Visible", value: "visible" },
            { label: "Invisible", value: "invisible" },
          ]}
          value={select}
        />
      </div>
    );
  },
};
