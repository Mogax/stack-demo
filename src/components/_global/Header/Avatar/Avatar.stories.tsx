import {Meta, StoryObj} from "@storybook/react"
import {Avatar} from "./Avatar.tsx"
import {userEvent, within} from "@storybook/testing-library"
import { expect } from '@storybook/jest'
import {reactRouterParameters, withRouter} from "storybook-addon-react-router-v6"

const meta = {
    title: "Global/Header/Avatar",
    component: Avatar,
    decorators: [withRouter],
    parameters:{
        reactRouter:reactRouterParameters({
            routing: [{path:'/*'}]
        })
    }
} satisfies Meta<typeof Avatar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const AvatarStory: Story = {
    name: "Default",
    args: {},
    play: async ({canvasElement, step}) => {
        const canvas = within(canvasElement)
        const avatar = canvas.getByAltText('Avatar')

        await step('Load components', async () => {
            await expect(avatar).toBeInTheDocument()

            await userEvent.click(avatar)

            await expect(canvas.getByText('Animation')).toBeInTheDocument()
            await expect(canvas.getByText('Pokelist')).toBeInTheDocument()
        })

        await step('Change user login/logout', async () => {
            await expect(avatar.getAttribute('src')).toContain('avatar')

            await userEvent.click(avatar)

            await userEvent.click(canvas.getByText('Log In'))
            await expect(avatar.getAttribute('src')).toContain('login')

            await userEvent.click(avatar)
            await userEvent.click(canvas.getByText('Logout'))
            await expect(avatar.getAttribute('src')).toContain('avatar')
        })




    }
};
