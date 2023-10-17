import {Meta, StoryObj} from "@storybook/react";
import {Header} from "./Header.tsx";
import {reactRouterParameters, withRouter} from "storybook-addon-react-router-v6";

const meta = {
    title: "Global/Header,",
    component: Header,
    decorators: [withRouter],
    parameters:{
        reactRouter:reactRouterParameters({
            routing: [{path:'/*'}]
        })
    }
} satisfies Meta<typeof Header>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Story: Story = {
    name: "Default",
    args: {}
};
