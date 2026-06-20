<template>
    <MainLayout>
        <template #body>
            <div class="grid grid-cols-5">
                <div class="col-span-2 grid gap-4">
                    <AnalysisDetails/>
                    <AddCriteria/>
                    <RecentCriteries/>
                </div>
                <div class="col-span-3">
                    <LivePreview/>
                </div>
            </div>
            <div>
                <Stats/>
            </div>
        </template>
    </MainLayout>
</template>

<script setup lang="ts">

import { computed } from 'vue'

import { useCardStore } from '../store/card-store'
import { useAppStore } from '../store/app-store'
import MainLayout from '../layout/MainLayout.vue'
import AnalysisDetails from '../components/AnalysisDetails.vue'
import AddCriteria from '../components/AddCriteria.vue'
import RecentCriteries from '../components/RecentCriteries.vue'
import LivePreview from '../components/LivePreview.vue'
import Stats from '../components/Stats.vue'

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
.tool {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 16px;
    padding: 24px;
    border-radius: 20px;
    background-color: var(--primary-color);
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