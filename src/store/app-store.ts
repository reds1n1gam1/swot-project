import { defineStore } from 'pinia'
import { ref } from 'vue'
import { swotType } from '../types/card'

export const useAppStore = defineStore('app', () => {
    const selectedType = ref<swotType>(swotType.All)

    function setActiveType(type: swotType) {
        selectedType.value = type
    }

    function resetType() {
        selectedType.value = swotType.All
    }

    return {
        selectedType,
        setActiveType,
        resetType
    }
})