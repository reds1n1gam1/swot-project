export type Card = {
    type: swotType,
    text: string
}

export enum swotType {
    "All",
    "Strength",
    "Weakness",
    "Opportunites",
    "Threats",
}