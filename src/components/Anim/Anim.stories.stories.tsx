import {Meta, StoryObj} from "@storybook/react";
import {Anim} from "./Anim.tsx";

const meta = {
    title: "Animation",
    component: Anim
} satisfies Meta<typeof Anim>;

export default meta;

type Story = StoryObj<typeof meta>;

export const AnimStory: Story = {
    name: "Default",
    args: {}
};
