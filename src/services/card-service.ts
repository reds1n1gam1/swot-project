import type { Card } from "../types/card"
import { getCardsFromStorage } from "./card-storage-service"

export function useCardService() {
    function getAll(): Card[] {
        return getCardsFromStorage()
    }

    return {
        getAll,
    }
}