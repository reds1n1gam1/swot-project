<template>
    <header class="header">
        <div class="header__left">
            <p class="header__title"> {{ mainTitle }} </p>
        </div>

    </header>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { SWOT_NAVIGATION } from '../constants/constants';
import { useAppStore } from '../store/app-store';

const appStore = useAppStore()

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
</style>