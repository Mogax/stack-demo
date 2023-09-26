import {Meta, StoryObj} from "@storybook/react";
import {PokeCard} from "./PokeCard.tsx";

const meta: Meta<typeof PokeCard> = {
    title: 'PokeList/PokeCard',
    component: PokeCard,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    args: {
        name: {fr: 'Dracaufeu', jp: 'Doracofuro'},
        types: [{name: 'Feu', image: 'https://raw.githubusercontent.com/Yarkis01/PokeAPI/images/types/feu.png'}],
        pokemon: "https://raw.githubusercontent.com/Yarkis01/PokeAPI/images/sprites/6/mega_x-",
    }
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
