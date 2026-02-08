import type { Card } from "../types/card"

const CARD_LOCAL_STORAGE_KEY = 'SWOT_CARDS'

export function getCardsFromStorage() {
    let cardData: Card[] = [];

    const localStorageData = localStorage.getItem(CARD_LOCAL_STORAGE_KEY)

    if (localStorageData) {
        cardData = JSON.parse(localStorageData)
    }

    return cardData
}

export function addCardToStorage(card: Card) {
    const cards = getCardsFromStorage()

    const newData = [card, ...cards]

    localStorage.setItem(CARD_LOCAL_STORAGE_KEY, JSON.stringify(newData))
}

export function resetCardsFromLocalStorage() {
    localStorage.removeItem(CARD_LOCAL_STORAGE_KEY)
}