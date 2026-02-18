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

        <Teleport to="main">
            <modal :show="appStore.showInputModal" @close="appStore.setInputModalState(false)">
                <template #header> Add new item </template>
                <template #body>
                    <div class="input">
                        <div class="input__categories">
                            <div class="input__category-item">
                                <input class="input__option" type="radio" name="swot" id="Strength" :value="0"
                                    v-model="inputType" \ />
                                <i class="fa-solid fa-dumbbell"></i>
                            </div>

                            <div class="input__category-item">
                                <input class="input__option" type="radio" name="swot" id="Weakness" :value="1"
                                    v-model="inputType" \ />
                                <i class="fa-solid fa-cloud-rain"></i>
                            </div>

                            <div class="input__category-item">
                                <input class="input__option" type="radio" name="swot" id="Opportunites" :value="2"
                                    v-model="inputType" \ />
                                <i class="fa-solid fa-mountain"></i>
                            </div>

                            <div class="input__category-item">
                                <input class="input__option" type="radio" name="swot" id="Threats" :value="3"
                                    v-model="inputType" \ />
                                <i class="fa-solid fa-cloud-bolt"></i>
                            </div>
                        </div>

                        <input v-model="inputText" class="input__form" type="text"
                            placeholder="Please write here your text" @keyup.enter="addNewItem">
                        <button class="input__button" type="button" @click="addNewItem">Add</button>
                    </div>
                </template>
            </modal>
        </Teleport>
    </div>
</template>

<script setup lang="ts">

import { computed, ref } from 'vue'

import Header from "../components/Header.vue"
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


let inputText = ref('')
let inputType = 0

cardStore.fetchCards()

const currentCategoryItemList = computed(() => {
    const selectedType = appStore.selectedType

    if (selectedType !== null && selectedType !== undefined) {
        return cardStore.getCardByType(selectedType)
    }

    return cardStore.cards
})

function addNewItem() {
    if (inputText) {

        cardStore.addCard({
            type: inputType,
            text: inputText.value,
        })

        clearInput()
    }
}


function clearInput() {
    inputText.value = ''
}

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


.input {
    display: grid;
    gap: 16px;
    border-radius: 4px;
    padding: 16px 24px;
}

.input__form {
    border: none;
    padding: 12px;
    border-radius: 4px;
    background: var(--secondary-color);
    border: 1px solid #2f3651;
}

.input__button {
    font-size: 16px;
    font-weight: 700;
    cursor: pointer;
    padding: 12px;
    border-radius: 4px;
    background: var(--secondary-color);
}

.input__categories {
    display: grid;
    gap: 8px;
    grid-template-columns: repeat(4, 1fr);
}

.input__category-item {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--secondary-color);
    padding: 16px 8px;
    font-size: 24px;
    cursor: pointer;
    transition: background-color 200ms ease-in-out;
}

.input__category-item:has(.input__option:checked) {
    background-color: var(--primary-color);
}

.input__option {
    opacity: 1;
    position: absolute;
    inset: 0;
    opacity: 0;
    cursor: pointer;
}

@media(max-width: 767px) {
    .main {
        --main-padding: 0 16px 32px;
    }

    .content {
        grid-template-columns: auto;
    }

    .input__categories {
        grid-template-columns: repeat(2, 1fr);
    }
}
</style>