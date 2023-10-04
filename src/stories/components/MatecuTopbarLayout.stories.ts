import type { Meta, StoryObj } from "@storybook/react";

import MatecuTopbarLayout from "../../../lib/components/MatecuTopbarLayout";

const meta = {
  title: "Library/MatecuTopbarLayout",
  component: MatecuTopbarLayout,
} satisfies Meta<typeof MatecuTopbarLayout>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Basic: Story = {};
