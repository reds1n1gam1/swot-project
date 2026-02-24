<template>
    <header class="header">
        <div class="header__left">
            <p class="header__title"> {{ mainTitle }} </p>
        </div>

        <div class="header__right">

            <button type="button" title="Add new item" class="header__clear"
                v-on:click="appStore.setInputModalState(true)">
                <i class="fa-solid fa-plus"></i>
            </button>

            <button type="button" title="Clear all" class="header__clear" v-on:click="cardStore.resetCards()">
                <i class="fa-solid fa-trash"></i>
            </button>
        </div>

    </header>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { SWOT_NAVIGATION } from '../constants/constants';
import { useAppStore } from '../store/app-store';
import { useCardStore } from '../store/card-store';

const appStore = useAppStore()
const cardStore = useCardStore()

const mainTitle = computed(() => {
    const type = appStore.selectedType

    if (type !== null && type !== undefined) {
        return SWOT_NAVIGATION[type]?.title
    }

    return "SWOT"

})

</script>

<style scoped>
.header {
    background: transparent;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.header__left {
    display: flex;
    gap: 8px;
}

.header__title {
    font-size: 24px;
    font-weight: 500;
}

.header__clear {
    background-color: var(--primary-bg-color);
    padding: 8px;
    font-size: 16px;
    border-radius: 8px;
    cursor: pointer;
}


.header__right {
    display: grid;
    grid-auto-flow: column;
    gap: 12px;
}
</style>