import {CardAnim} from "./CardAnim.tsx";
import {Meta, StoryObj} from "@storybook/react";
import {userEvent, within} from "@storybook/testing-library";
import { expect } from '@storybook/jest';
import {hexToRgb} from "@mui/material";

const meta:Meta<typeof CardAnim> = {
    title:'Animation/CardAnim',
    component: CardAnim,
    parameters:{
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        status: {control: 'radio', options: ["select", "wrong", "unselect", "correct", "find"]},
    },
    args:{
        title: 'CardAnim',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate enim eveniet, expedita facere fuga illum iste.',
    }
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
    parameters: {
        design: {
            type: "figma",
            url: "https://www.figma.com/file/QUhQ2p6U0OtfL7lySAD20J/Stack-Test?type=design&node-id=2%3A182&mode=design&t=CDUCK3vpG1fxbEMB-1",
        },
    },
    play: async ({args, canvasElement}) => {
        const canvas = within(canvasElement)
        await expect(canvas.getByText(args.title)).toBeInTheDocument()
        await expect(canvas.getByText(args.description)).toBeInTheDocument()
        await expect(canvas.getByText('Start')).toBeInTheDocument()
        await expect(canvas.getByText('Clean')).toBeInTheDocument()
    }
}

export const Wrong: Story = {
    args: {
        status: "wrong",
    },
    parameters: {
        design: {
            type: "figma",
            url: "https://www.figma.com/file/QUhQ2p6U0OtfL7lySAD20J/Stack-Test?type=design&node-id=2%3A182&mode=design&t=CDUCK3vpG1fxbEMB-1",
        },
    },
    play: async ({canvasElement}) => {
        const canvas = within(canvasElement)
        const styleBefore = getComputedStyle(canvas.getByTestId('container'))
        await expect(styleBefore.backgroundColor).toBe(hexToRgb('#FFFFFF'))

        await userEvent.click(canvas.getByText('Start'))
        setTimeout(async () => {
            const styleAfter = getComputedStyle(canvas.getByTestId('container'))
            await expect(styleAfter.backgroundColor).toBe(hexToRgb('#FF0000'))
            await userEvent.click(canvas.getByText('Clean'))
            setTimeout(async () => {
                const styleAfter = getComputedStyle(canvas.getByTestId('container'))
                await expect(styleAfter.backgroundColor).toBe(hexToRgb('#FFFFFF'))
            }, 1000)
        }, 1000)
    }
}

export const Correct: Story = {
    args: {
        status: "correct",
    },
    parameters: {
        design: {
            type: "figma",
            url: "https://www.figma.com/file/QUhQ2p6U0OtfL7lySAD20J/Stack-Test?type=design&node-id=2%3A182&mode=design&t=CDUCK3vpG1fxbEMB-1",
        },
    },
    play: async ({canvasElement}) => {
        const canvas = within(canvasElement)
        const styleBefore = getComputedStyle(canvas.getByTestId('container'))
        await expect(styleBefore.backgroundColor).toBe(hexToRgb('#FFFFFF'))

        await userEvent.click(canvas.getByText('Start'))
        setTimeout(async () => {
            const styleAfter = getComputedStyle(canvas.getByTestId('container'))
            await expect(styleAfter.backgroundColor).toBe(hexToRgb('#14C800'))
            await userEvent.click(canvas.getByText('Clean'))
            setTimeout(async () => {
                const styleAfter = getComputedStyle(canvas.getByTestId('container'))
                await expect(styleAfter.backgroundColor).toBe(hexToRgb('#FFFFFF'))
            }, 1000)
        }, 1000)
    }
}

export const Select: Story = {
    args: {
        status: "select",
    },
    parameters: {
        design: {
            type: "figma",
            url: "https://www.figma.com/file/QUhQ2p6U0OtfL7lySAD20J/Stack-Test?type=design&node-id=2%3A182&mode=design&t=CDUCK3vpG1fxbEMB-1",
        },
    },
    play: async ({canvasElement}) => {
        const canvas = within(canvasElement)
        const styleBefore = getComputedStyle(canvas.getByTestId('container'))
        await expect(styleBefore.backgroundColor).toBe(hexToRgb('#FFFFFF'))

        await userEvent.click(canvas.getByText('Start'))
        setTimeout(async () => {
            const styleAfter = getComputedStyle(canvas.getByTestId('container'))
            await expect(styleAfter.backgroundColor).toBe(hexToRgb('#A0A0A0'))
            await userEvent.click(canvas.getByText('Clean'))
            setTimeout(async () => {
                const styleAfter = getComputedStyle(canvas.getByTestId('container'))
                await expect(styleAfter.backgroundColor).toBe(hexToRgb('#FFFFFF'))
            }, 1000)
        }, 1000)
    }
}

export const Find: Story = {
    args: {
        status: "find",
    },
    parameters: {
        design: {
            type: "figma",
            url: "https://www.figma.com/file/QUhQ2p6U0OtfL7lySAD20J/Stack-Test?type=design&node-id=2%3A182&mode=design&t=CDUCK3vpG1fxbEMB-1",
        },
    },
    play: async ({canvasElement}) => {
        const canvas = within(canvasElement)
        const styleBefore = getComputedStyle(canvas.getByTestId('container'))
        await expect(styleBefore.backgroundColor).toBe(hexToRgb('#FFFFFF'))
        await expect(styleBefore.opacity).toBe("1")

        await userEvent.click(canvas.getByText('Start'))
        setTimeout(async () => {
            const styleAfter = getComputedStyle(canvas.getByTestId('container'))
            await expect(styleAfter.backgroundColor).toBe(hexToRgb('#14C800'))
            await expect(styleBefore.opacity).toBe("0")
            setTimeout(async () => {
                const styleAfter = getComputedStyle(canvas.getByTestId('container'))
                await expect(styleAfter.backgroundColor).toBe(hexToRgb('#FFFFFF'))
                await expect(styleBefore.opacity).toBe("1")
            }, 1000)
        }, 2000)
    }
}

export const Unselect: Story = {
    args: {
        status: "unselect",
    },
    parameters: {
        design: {
            type: "figma",
            url: "https://www.figma.com/file/QUhQ2p6U0OtfL7lySAD20J/Stack-Test?type=design&node-id=2%3A182&mode=design&t=CDUCK3vpG1fxbEMB-1",
        },
    },
    play: async ({canvasElement}) => {
        const canvas = within(canvasElement)
        const styleBefore = getComputedStyle(canvas.getByTestId('container'))
        await expect(styleBefore.backgroundColor).toBe(hexToRgb('#FFFFFF'))


        await userEvent.click(canvas.getByText('Start'))
        setTimeout(async () => {
            const styleAfter = getComputedStyle(canvas.getByTestId('container'))
            await expect(styleAfter.backgroundColor).toBe(hexToRgb('#A0A0A0'))
            setTimeout(async () => {
                const styleAfter = getComputedStyle(canvas.getByTestId('container'))
                await expect(styleAfter.backgroundColor).toBe(hexToRgb('#FFFFFF'))
            }, 1000)
        }, 2000)
    }
}
