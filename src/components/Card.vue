<template>
    <template v-if="props.type === CardComponentTypes.Card">
        <div :class="'card card--' + card.type" @click="openCardDescription(card)">
            <img src="" alt="" class="card__image">
            <p class="card__text"> {{ card.text }} </p>
            <div class="card__actions">
                <button type="button" class="card__button">
                    <i class="fa-solid fa-pen-to-square"></i>
                </button>
                <button type="button" class="card__button" @click.stop="removeCard(card.id)">
                    <i class="fa-solid fa-trash"></i>
                </button>
            </div>
        </div>
    </template>
    <template v-else>
        <div class="card card--plus" @click="appStore.setInputModalState(true)">
            <i class="fa-solid fa-plus"></i>
        </div>
    </template>

    <Teleport to="body">
        <modal :show="appStore.showCardModal" @close="closeCardDescription">
            <template #body>
                <div :class="'card card--' + appStore.selectedCardToShow?.type">
                    <img src="" alt="" class="card__image">
                    <p class="card__text"> {{ appStore.selectedCardToShow?.text }} </p>
                </div>
            </template>
        </modal>
    </Teleport>
</template>

<script setup lang="ts">
import { useAppStore } from '../store/app-store';
import { useCardStore } from '../store/card-store';
import { CardComponentTypes, type Card } from '../types/card';
import Modal from "../components/Modal.vue"

const appStore = useAppStore()
const cardStore = useCardStore()

const props = defineProps(['card', 'type'])

function removeCard(id: number) {
    cardStore.removeCard(id)
}

function openCardDescription(card: Card) {
    appStore.selectCardToShow(card);
    appStore.setCardModalState(true)
}


function closeCardDescription() {
    appStore.selectCardToShow()
    appStore.setCardModalState(false)
}

</script>

<style scoped>
.card {
    position: relative;
    height: 160px;
    padding-block: 16px 56px;
    padding-inline: 16px;
    background-color: var(--secondary-color);
    border-radius: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: transform 0.2s ease-in-out;
}

.card__actions {
    position: absolute;
    display: flex;
    gap: 12px;
    inset-inline-end: 10px;
    inset-block-end: 10px;
}

.card__button {
    width: 40px;
    height: 40px;
    background-color: var(--secondary-color);
    cursor: pointer;
    border: 1px solid var(--primary-bg-color);
    border-radius: 10px;
}

.card__button i {
    opacity: 0.5;
    transition: opacity 400ms linear;
}

.card__button:hover i {
    opacity: 1;
}

.card::before {
    content: "";
    position: absolute;
    inset-inline-start: 10px;
    inset-block-start: 10px;
    width: 10px;
    height: 10px;
    border-radius: 5px;
    background-color: var(--card-color);
}

.card--0 {
    --card-color: var(--strength-color);
}

.card--1 {
    --card-color: var(--weak-color);
}

.card--2 {
    --card-color: var(--opport-color);
}

.card--3 {
    --card-color: var(--threats-color);
}

.card:hover {
    transform: scale(1.01);
    cursor: pointer;
}

.card--plus {
    background-color: var(--primary-bg-color);
}
</style>