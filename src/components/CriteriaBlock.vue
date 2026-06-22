<template>
    <div class="card rounded-lg border-1 border-green-500">
        <div class="flex flex justify-center items-center gap-3 bg-green-50 p-4 border-b-1 border-gray-200">
            <div class="p-2 rounded-full bg-green-200 flex justify-center items-center">
                <i class="pi pi-shield text-green-500" style="font-size: 1.5rem"></i>
            </div>
            <p class="flex-grow text-left capitalize font-semibold"> {{ type }} </p>
            <div
                class="py-2 px-4 rounded-full bg-green-200 flex justify-center items-center text-green-500 font-semibold">
                {{ factors.length }}</div>
            <!-- <i class="pi pi-exclamation-triangle"></i>
            <i class="pi pi-angle-double-up"></i>
            <i class="pi pi-lock"></i> -->
        </div>
        <div class="px-6 py-4">
            <ul class="list-disc list-inside  grid gap-3">
                <li class="decoration-green-500 text-sm text-gray-800" v-for="(item, index) in factors" :key="index"> {{ item.title }} </li>
            </ul>
        </div>
        <div class="px-2 py-4 border-t-1 border-gray-200">
            <Button type="button" icon="pi pi-plus" variant="link" size="small" label="Add criteria"
                class="font-semibold"></Button>
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

<style scoped></style>