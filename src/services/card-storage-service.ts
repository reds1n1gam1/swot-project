import type { Card } from "../types/card"

const swotMockData: Card[] = [
    // Strengths
    { type: 0, text: 'Clear value proposition for the target audience' },
    { type: 0, text: 'Fast development cycle with modern tools' },
    { type: 0, text: 'User-friendly and intuitive interface' },

    // Weaknesses
    { type: 1, text: 'Limited initial user base' },
    { type: 1, text: 'Lack of automated testing coverage' },
    { type: 1, text: 'Minimal marketing and outreach' },

    // Opportunities
    { type: 2, text: 'Growing demand for lightweight strategy tools' },
    { type: 2, text: 'Potential integrations with project management platforms' },
    { type: 2, text: 'Use in educational and training environments' },

    // Threats
    { type: 3, text: 'Competition from established business tools' },
    { type: 3, text: 'Changing market trends and user expectations' },
    { type: 3, text: 'Dependence on third-party hosting services' }
]

export function getCardsFromStorage() {
    return swotMockData
}