export type Card = {
    type: swotType,
    text: string
}

export enum swotType {
    "Strength",
    "Weakness",
    "Opportunites",
    "Threats",
}

export enum CardComponentTypes {
    'Card',
    'Add'
}