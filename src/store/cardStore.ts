import { defineStore } from 'pinia'
import { useCardService } from '../services/cardService'
import { ref } from 'vue'

export const useCardStore = defineStore('card', () => {
    const cardService = useCardService()

    // Reactive state
    const cards = ref([])

    // Actions
    async function fetchCards() {
        cards.value = cardService.getAll()
    }

    return {
        cards,
        fetchCards,
    }
})