export const Priority  = {
    Low: 'LOW',
    Medium: 'MEDIUM',
    High: 'HIGH',
} as const

export type PriorityType = typeof Priority[keyof typeof Priority];