<template>
    <div class="main">
        <div class="container">
            <Sidebar />
            <Header />

            <div class="content">
                <Card v-for="card in currentCategoryItemList" :card="card" />

                <div class="card card--plus">
                    <i class="fa-solid fa-plus"></i>
                </div>
            </div>

        </div>

        <Input />
    </div>
</template>

<script setup lang="ts">

import { computed } from 'vue'

import Header from "../components/Header.vue"
import Input from "../components/Input.vue"
import Sidebar from "../components/Sidebar.vue"
import Card from "../components/Card.vue"
import { useCardStore } from '../store/card-store'
import { useAppStore } from '../store/app-store'

const cardStore = useCardStore()
const appStore = useAppStore()

cardStore.fetchCards()

const currentCategoryItemList = computed(() => {
    const selectedType = appStore.selectedType

    if (selectedType !== null && selectedType !== undefined) {
        return cardStore.getCardByType(selectedType)
    }

    return cardStore.cards
})

</script>

<style scoped>
.main {
    display: grid;
    gap: 32px;
    justify-items: center;
}

.container {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 16px;
    padding: 24px;
    border-radius: 20px;
    background-color: var(--primary-color);
    flex-grow: 1;
    max-width: 80%;
}


.content {
    display: grid;
    gap: 12px;
    grid-template-columns: repeat(4, 1fr);
    background: transparent;
}
</style>