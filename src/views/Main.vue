<template>
    <MainLayout>
        <template #body>
            <div class="container" id="tool">
                <Sidebar />
                <Header />

                <div class="content content--list" v-if="appStore.allListView">
                    <AllListView />
                </div>

                <div class="content" v-else>
                    <Card v-for="card in currentCategoryItemList" :card="card" :type="CardComponentTypes.Card" />
                    <Card :type="CardComponentTypes.Add" />
                </div>
            </div>

            <About></About>
        </template>
    </MainLayout>


    <Teleport to="body">
        <modal :show="appStore.showInputModal" @close="appStore.setInputModalState(false)">
            <template #header> Add new item </template>
            <template #body>
                <div>
                    <SwotInput />
                </div>
            </template>
        </modal>
    </Teleport>
</template>

<script setup lang="ts">

import { computed } from 'vue'

import Header from "../components/Header.vue"
import SwotInput from "../components/SwotInput.vue"
import Sidebar from "../components/Sidebar.vue"
import Card from "../components/Card.vue"
import AllListView from "../components/AllList.vue"
import Modal from "../layout/Modal.vue"
import { useCardStore } from '../store/card-store'
import { useAppStore } from '../store/app-store'
import { CardComponentTypes } from '../types/card'
import About from '../components/About.vue'
import MainLayout from '../layout/MainLayout.vue'

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
.container {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 16px;
    padding: 24px;
    border-radius: 20px;
    background-color: var(--primary-color);
    flex-grow: 1;
    width: 100%;
}

.content {
    display: grid;
    gap: 12px;
    grid-template-columns: repeat(4, 1fr);
    background: transparent;
}

.content--list {
    grid-template-columns: initial;
}

@media(max-width: 767px) {
    .content {
        grid-template-columns: auto;
    }
}
</style>