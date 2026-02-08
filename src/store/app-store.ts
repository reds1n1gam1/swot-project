import { defineStore } from 'pinia'
import { ref } from 'vue'
import { swotType } from '../types/card'

export const useAppStore = defineStore('app', () => {
    const selectedType = ref<swotType | null>()

    function setActiveType(type: swotType) {
        selectedType.value = type
    }

    function resetType() {
        selectedType.value = null
    }

    return {
        selectedType,
        setActiveType,
        resetType
    }
})