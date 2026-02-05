import { getCardsFromStorage } from "./card-storage.helper.service"

export function useCardService() {
    function getAll() {
        // Additional business logic or transformations here
        return getCardsFromStorage()
    }

    return {
        getAll,
    }
}