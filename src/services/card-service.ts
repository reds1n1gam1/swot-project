import type { Card } from "../types/card"
import { addCardToStorage, getCardsFromStorage, resetCardsFromLocalStorage, removeFromStorage } from "./card-storage-service"

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

    function removeCard(id: number) {
        removeFromStorage(id)
    }

    return {
        getAll,
        addCard,
        resetCards,
        removeCard,
    }
}