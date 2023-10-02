import { expect } from '@storybook/jest';
import {Meta, StoryObj} from "@storybook/react";
import {PokeCard} from "./PokeCard.tsx";
import {userEvent, within} from "@storybook/testing-library";

const meta: Meta<typeof PokeCard> = {
    title: 'PokeList/PokeCard',
    component: PokeCard,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    args: {
        name: {fr: 'Dracaufeu', jp: 'Doracofuro'},
        types: [
            {name: 'Feu', image: 'https://raw.githubusercontent.com/Yarkis01/PokeAPI/images/types/feu.png'},
            {name: 'Dragon', image: 'https://raw.githubusercontent.com/Yarkis01/PokeAPI/images/types/dragon.png'}
        ],
        pokemon: "https://raw.githubusercontent.com/Yarkis01/PokeAPI/images/sprites/6/mega_x-",
    }
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
    play: async ({args, canvasElement, step}) => {
        const canvas = within(canvasElement)

        await step('Correctly display', async () => {
            await expect(canvas.getByText(args.name.fr)).toBeInTheDocument()
            await expect(canvas.getByText(args.name.jp)).toBeInTheDocument()
            await expect(canvas.getByText(args.types[0].name)).toBeInTheDocument()
            await expect(canvas.getByText(args.types[1].name)).toBeInTheDocument()
            await expect(canvas.getByAltText('pokemon').getAttribute('src')).toContain(args.pokemon)
        })

        await step('Hover Shiny', async () => {
            let imgSrc = canvas.getByAltText('pokemon').getAttribute('src')
            await expect(imgSrc).toContain("regular")
            await userEvent.hover(canvas.getByAltText('pokemon'))
            imgSrc = canvas.getByAltText('pokemon').getAttribute('src')
            await expect(imgSrc).toContain("shiny")
        })

    }
}
