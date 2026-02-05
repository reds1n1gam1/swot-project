import { getCardsFromStorage } from "./cardLocalStorage"

export function useCardService() {
    function getAll() {
        // Additional business logic or transformations here
        return getCardsFromStorage()
    }

    return {
        getAll,
    }
}