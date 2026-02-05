<template>
    <header class="header">
        <div class="header__left">
            <p class="header__title"> {{ mainTitle ? mainTitle : 'All' }} </p>
        </div>

        <div class="header__switchers">
            <button type="button" class="header__switcher">
                <i class="fa-solid fa-grip"></i>
            </button>
            <button type="button" class="header__switcher">
                <i class="fa-solid fa-bars"></i>
            </button>
        </div>

    </header>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const mainTitle = computed(() => {
    return navigationItems.value[activeId.value]?.title
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