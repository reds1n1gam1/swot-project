import { defineStore } from 'pinia'
import { useCardService } from '../services/card-service'
import { ref } from 'vue'
import type { Card, swotType } from '../types/card'

export const useCardStore = defineStore('card', () => {
    const cardService = useCardService()

    const cards = ref<Card[]>([])

    function getCardByType(type: swotType) {
        return cards.value.filter(card => card.type === type)
    }

    function fetchCards() {
        cards.value = cardService.getAll()
    }

    function addCard(card: Card) {
        cards.value.push(card)
        cardService.addCard(card)
    }

    function resetCards() {
        cardService.resetCards()
    }

    return {
        cards,
        fetchCards,
        getCardByType,
        addCard,
        resetCards,
    }
})