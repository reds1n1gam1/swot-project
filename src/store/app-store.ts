import { defineStore } from 'pinia'
import { ref } from 'vue'
import { swotType, type Card } from '../types/card'

export const useAppStore = defineStore('app', () => {
    const selectedType = ref<swotType | null>(swotType.Strength)
    const allListView = ref(false)
    const showInputModal = ref(false)
    const showCardModal = ref(false)
    const selectedCardToShow = ref<Card>()

    function setInputModalState(state: boolean) {
        showInputModal.value = state;
    }

    function selectCardToShow(card?: Card) {
        if (card) {
            selectedCardToShow.value = card
        } else {
            selectedCardToShow.value = undefined
        }
    }

    function setCardModalState(state: boolean) {
        showCardModal.value = state
    }

    function setActiveType(type: swotType) {
        allListView.value = false;
        selectedType.value = type
    }

    function resetType() {
        allListView.value = true;
        selectedType.value = null
    }

    return {
        selectedType,
        allListView,
        showInputModal,
        showCardModal,
        selectedCardToShow,
        selectCardToShow,
        setInputModalState,
        setCardModalState,
        setActiveType,
        resetType
    }
})