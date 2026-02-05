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