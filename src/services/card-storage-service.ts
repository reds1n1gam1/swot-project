import type { Card } from "../types/card"

const CARD_LOCAL_STORAGE_KEY = 'SWOT_CARDS'
const LAST_CARD_ID_LOCAL_STORAGE_KEY = 'SWOT_CARD_ID'


function getLastIdFromStorage(): number {
    let lastId: number = 0;

    const localStorageData = localStorage.getItem(LAST_CARD_ID_LOCAL_STORAGE_KEY)

    if (localStorageData) {
        lastId = parseInt(JSON.parse(localStorageData))
    }

    return lastId
}

function incrementId() {
    let lastId: number = 0;

    const localStorageData = localStorage.getItem(LAST_CARD_ID_LOCAL_STORAGE_KEY)

    if (localStorageData) {
        lastId = parseInt(JSON.parse(localStorageData))
    }

    const newId = lastId + 1;

    localStorage.setItem(LAST_CARD_ID_LOCAL_STORAGE_KEY, JSON.stringify(newId))
}


export function getCardsFromStorage() {
    let cardData: Card[] = [];

    const localStorageData = localStorage.getItem(CARD_LOCAL_STORAGE_KEY)

    if (localStorageData) {
        cardData = JSON.parse(localStorageData)
    }

    return cardData
}

export function addCardToStorage(card: Card) {
    const cards = getCardsFromStorage();

    const cardWithId = { ...card, id: getLastIdFromStorage() }

    const newData = [cardWithId, ...cards]

    localStorage.setItem(CARD_LOCAL_STORAGE_KEY, JSON.stringify(newData))

    incrementId()
}

export function resetCardsFromLocalStorage() {
    localStorage.removeItem(CARD_LOCAL_STORAGE_KEY)
}

export function removeFromStorage(id: number) {
    const cards = getCardsFromStorage();

    const modifiedCards = cards.filter(card => card.id !== id)

    localStorage.setItem(CARD_LOCAL_STORAGE_KEY, JSON.stringify(modifiedCards))
}