<template>
    <div :class="'card rounded-lg border-1 overflow-hidden card--' + type">
        <div class="card__header flex flex justify-center items-center gap-3 p-4 border-b-1 border-gray-200">
            <div class="card__icon p-2 rounded-full flex justify-center items-center">
                <i v-if="type === Factor.Strengths" class="pi pi-shield" style="font-size: 1.5rem"></i>

            <i  v-if="type === Factor.Weaknesses" class="pi pi-exclamation-triangle"  style="font-size: 1.5rem"></i>
            <i  v-if="type === Factor.Opportunities" class="pi pi-angle-double-up"  style="font-size: 1.5rem"></i>
            <i  v-if="type === Factor.Threats" class="pi pi-lock"  style="font-size: 1.5rem"></i>
            </div>
            <p class="flex-grow text-left capitalize font-semibold"> {{ type }} </p>
            <div
                class="card__indicator py-2 px-4 rounded-full bg-green-200 flex justify-center items-center text-green-500 font-semibold">
                {{ factors.length }}</div>
        </div>
        <div class="px-6 py-8">
            <ul class="card__list list-disc list-inside  grid gap-6">
                <li class=" text-sm text-gray-800 font-medium" v-for="(item, index) in factors" :key="index"> {{ item.title }} </li>
            </ul>
        </div>
        <div class=" px-2 py-4 border-t-1 border-gray-200">
            <Button type="button" icon="pi pi-plus" variant="link" size="small" label="Add criteria"
                class="card__action font-semibold"></Button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Button } from 'primevue';
import { Factor, type FactorType } from '../types/FactorType';
import { onMounted, ref, type Ref } from 'vue';
import type { FactorItem } from '../types/FactorItem';
import { useFactorsStore } from '../store/factors-store';

const factorsStore = useFactorsStore()

const factors: Ref<FactorItem[]> = ref([])


const props = defineProps<{
    type: FactorType
}>()

onMounted(() => {
    factors.value = factorsStore.getByType(props.type)
})
</script>

<style scoped lang="scss">
.card {
    border-color: var(--sw-color-500);

    &__header {
        background-color: var(--sw-color-50);
    }

    &__icon {
        background-color: var(--sw-color-200);
        color: var(--sw-color-500)
    }

    &__indicator {
        background-color: var(--sw-color-200);
        color: var(--sw-color-500);
    }

    &__list {
        li::marker {
            color: var(--sw-color-500)
        }
    }

    &__action {
        color: var(--sw-color-500) 
    }

    &--STRENGTHS {
        --sw-color-500: var(--color-green-500);
        --sw-color-200: var(--color-green-200);
        --sw-color-50: var(--color-green-50);
    }
    
    &--WEAKNESSES {
        
        --sw-color-500: var(--color-yellow-500);
        --sw-color-200: var(--color-yellow-200);
        --sw-color-50: var(--color-yellow-50);
    }
    
    &--OPPORTUNITIES {
        
        --sw-color-500: var(--color-blue-500);
        --sw-color-200: var(--color-blue-200);
        --sw-color-50: var(--color-blue-50);
        
    }
    &--THREATS {
        --sw-color-500: var(--color-red-500);
        --sw-color-200: var(--color-red-200);
        --sw-color-50: var(--color-red-50);
    }
}
</style>