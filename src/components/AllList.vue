<template>
    <div class="list-view">
        <section class="list-view__section">
            <p class="list-view__title">Strength ({{ strengthList.length }})</p>
            <div class="list-view__content">
                <div class="list-view__item list-view__item--0" v-for="item in strengthList">
                    <span class="list-view__indicator"></span>
                    <p class="list-view__text"> {{ item.text }} </p>
                </div>
            </div>

        </section>

        <section class="list-view__section">
            <p class="list-view__title">Weakness ({{ weaknessList.length }})</p>
            <div class="list-view__content">
                <div class="list-view__item list-view__item--1" v-for="item in weaknessList">
                    <span class="list-view__indicator"></span>
                    <p class="list-view__text"> {{ item.text }} </p>
                </div>
            </div>

        </section>

        <section class="list-view__section">
            <p class="list-view__title">Opportunites ({{ opportunitesList.length }})</p>
            <div class="list-view__content">
                <div class="list-view__item list-view__item--2" v-for="item in opportunitesList">
                    <span class="list-view__indicator"></span>
                    <p class="list-view__text"> {{ item.text }} </p>
                </div>
            </div>

        </section>

        <section class="list-view__section">
            <p class="list-view__title">Threats ({{ threatsList.length }})</p>
            <div class="list-view__content">
                <div class="list-view__item list-view__item--3" v-for="item in threatsList">
                    <span class="list-view__indicator"></span>
                    <p class="list-view__text"> {{ item.text }} </p>
                </div>
            </div>

        </section>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useCardStore } from '../store/card-store';
import { swotType } from '../types/card';

const cardStore = useCardStore()

const strengthList = computed(() => cardStore.getCardByType(swotType.Strength))
const weaknessList = computed(() => cardStore.getCardByType(swotType.Weakness))
const opportunitesList = computed(() => cardStore.getCardByType(swotType.Opportunites))
const threatsList = computed(() => cardStore.getCardByType(swotType.Threats))
</script>

<style scoped>
.list-view {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
}

.list-view__section {
    padding: 12px;
    display: grid;
    align-content: start;
    gap: 8px
}

.list-view__section:nth-child(1) {
    border-right: 1px solid var(--primary-bg-color);
    border-bottom: 1px solid var(--primary-bg-color);
}

.list-view__section:nth-child(2) {
    border-left: 1px solid var(--primary-bg-color);
    border-bottom: 1px solid var(--primary-bg-color);
}

.list-view__section:nth-child(3) {
    border-right: 1px solid var(--primary-bg-color);
    border-top: 1px solid var(--primary-bg-color);
}

.list-view__section:nth-child(4) {
    border-left: 1px solid var(--primary-bg-color);
    border-top: 1px solid var(--primary-bg-color);
}

.list-view__title {
    font-size: 24px;
    font-weight: 700;
}

.list-view__content {
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.list-view__item {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 12px;
    align-items: center;
    pad: 4px;
}

.list-view__indicator {
    width: 10px;
    height: 10px;
    border-radius: 10px;
    background-color: var(--indicator-color);
    opacity: 0.6;
}

.list-view__item--0 {
    --indicator-color: var(--strength-color);
}

.list-view__item--1 {
    --indicator-color: var(--weak-color);
}

.list-view__item--2 {
    --indicator-color: var(--opport-color);
}

.list-view__item--3 {
    --indicator-color: var(--threats-color);
}

@media(max-width: 767px) {
    .list-view {
        grid-template-columns: auto;
    }

    .list-view__section:nth-child(1n) {
        border-left: initial;
        border-top: initial;
        border-right: initial;
        border-bottom: 1px solid var(--primary-bg-color);
    }
}

</style>