<template>
    <nav class="sidebar">
        <button type="button" :class="'sidebar__item ' + (activeType === null ? 'sidebar__item--active' : '')"
            @click="resetFilter">
            <i class="fa-solid fa-border-all"></i>
        </button>
        <button type="button" :class="'sidebar__item ' + (item.type === activeType ? 'sidebar__item--active' : '')"
            v-for="item in navigationItems" :title="item.title" @click="setActiveMenu(item.type)">
            <i :class="item.icon"></i>
        </button>
    </nav>
</template>


<script setup lang="ts">
import { computed, ref } from 'vue';
import { SWOT_NAVIGATION } from '../constants/constants';
import { useAppStore } from '../store/app-store';
import type { swotType } from '../types/card';

const navigationItems = ref(SWOT_NAVIGATION)

const appStore = useAppStore()

const activeType = computed(() => appStore.selectedType)

function setActiveMenu(type: swotType) {
    appStore.setActiveType(type)
}

function resetFilter() {
    appStore.resetType()
}
</script>

<style scoped>
.sidebar {
    background-color: var(--secondary-color);
    grid-row: 1 / span 2;
    display: flex;
    align-items: center;
    justify-content: start;
    flex-direction: column;
    gap: 24px;
    border-radius: 16px;
    padding: 4px 8px;
}

.sidebar__item {
    padding: 8px;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    background: transparent;
    transition:
        transform 0.2s ease-in-out,
        color 0.2s ease-in-out;
}

.sidebar__item:hover {
    transform: scale(1.02);
    cursor: pointer;
    color: rgb(256 256 256);
}

.sidebar__item--active {
    background-color: #252a41;
}
</style>