export const Factor  = {
    Strengths: 'STRENGTHS',
    Weaknesses: 'WEAKNESSES',
    Opportunities: 'OPPORTUNITIES',
    Threats: 'THREATS',
} as const

export type FactorType = typeof Factor[keyof typeof Factor];