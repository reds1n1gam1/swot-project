import { defineStore } from 'pinia'
import { ref } from 'vue'
import { swotType } from '../types/card'

export const useAppStore = defineStore('app', () => {
    const selectedType = ref<swotType | null>(swotType.Strength)
    const allListView = ref(false)
    const showInputModal = ref(false)

    function setInputModalState(state: boolean) {
        showInputModal.value = state;
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
        setInputModalState,
        setActiveType,
        resetType
    }
})