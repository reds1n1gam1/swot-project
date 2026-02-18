<template>
    <div class="main">
        <Navigation></Navigation>
        <MainBanner></MainBanner>

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

        <Footer></Footer>

        <Teleport defer to="body">
            <modal :show="appStore.showInputModal" @close="appStore.setInputModalState(false)">
                <template #header> Add new item </template>
                <template #body>
                    <Input />
                </template>
            </modal>
        </Teleport>
    </div>
</template>

<script setup lang="ts">

import { computed } from 'vue'

import Header from "../components/Header.vue"
import Input from "../components/Input.vue"
import Sidebar from "../components/Sidebar.vue"
import Card from "../components/Card.vue"
import AllListView from "../components/AllList.vue"
import Modal from "../components/Modal.vue"
import { useCardStore } from '../store/card-store'
import { useAppStore } from '../store/app-store'
import { CardComponentTypes } from '../types/card'
import MainBanner from '../components/MainBanner.vue'
import Footer from '../components/Footer.vue'
import Navigation from '../components/Navigation.vue'
import About from '../components/About.vue'

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
    padding: var(--main-padding, 0 16px 32px);
}

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
    .main {
        --main-padding: 0 16px 32px;
    }
    
    .content {
        grid-template-columns: auto;
    }
}
</style>