import type { Card } from "../types/card"
import { addCardToStorage, getCardsFromStorage, resetCardsFromLocalStorage } from "./card-storage-service"

export function useCardService() {
    function getAll(): Card[] {
        return getCardsFromStorage()
    }

    function addCard(card: Card) {
        return addCardToStorage(card)
    }

    function resetCards() {
        return resetCardsFromLocalStorage()
    }

    return {
        getAll,
        addCard,
        resetCards
    }
}