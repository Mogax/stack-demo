import {Meta, StoryObj} from "@storybook/react"
import {Autocomplete} from "./Autocomplete.tsx"
import {testAtom, testOptions} from "./AutocompleteMui.constant.ts"

const meta = {
    title: "Input/Autocomplete",
    component: Autocomplete
} satisfies Meta<typeof Autocomplete>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        atom: testAtom,
        listOptions:testOptions
    }
}
