<template>
    <div class="rounded-lg border-1 border-gray-100 shadow-sm p-4">
        <div class="w-full flex items-center justify-start gap-2">
            <i class="pi pi-history mr-2"></i>
            <p class="font-semibold text-lg">Recent criteries</p>
        </div>

        <div class="card">
            <DataTable :value="factorsList" tableStyle="">
                <Column field="title" header="Title"></Column>
                <Column field="type" header="Type"></Column>
                <Column field="priority" header="Quantity"></Column>
                <Column>
                    <template #body="{ data }">
                        <Button icon="pi pi-pen-to-square" @click="editRow(data)" severity="secondary" rounded></Button>
                    </template>
                </Column>

                <Column>
                    <template #body="{ data }">
                        <Button icon="pi pi-trash" @click="removeRow(data)" severity="secondary" rounded></Button>
                    </template>
                </Column>
            </DataTable>

            <Button type="button" :label="'View all criteria(' + store.getFactorsLength + ')'" icon="pi pi-arrow-right" class="w-full" />

        </div>
    </div>
</template>

<script setup lang="ts">
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import { onMounted, ref, type Ref } from 'vue';
import type { FactorItem } from '../types/FactorItem';
import { useFactorsStore } from '../store/factors-store';
import { Button } from 'primevue';

const store = useFactorsStore()

const factorsList: Ref<FactorItem[]>= ref([]);

function editRow(data:FactorItem) {

}

function removeRow(data:FactorItem) {

}

onMounted(() => {
    factorsList.value = store.getRecentFactors
})
</script>

<style scoped></style>