<template>
    <div class="rounded-lg border-1 border-gray-100 shadow-sm p-4">
        <div class="w-full flex items-center justify-start gap-2">
            <i class="pi pi-history mr-2"></i>
            <p class="font-semibold text-lg">Recent criteries</p>
        </div>

        <div class="card">
            <DataTable :value="factorsList" tableStyle="">
                <Column field="title" header="Title"></Column>
                <Column field="type" header="Type">
                    <template #body="{ data }">
                        <Tag v-if="data.type === Factor.Strengths" severity="success" value="Strengths"></Tag>
                        <Tag v-if="data.type === Factor.Weaknesses" severity="warn" value="Weaknesses"></Tag>
                        <Tag v-if="data.type === Factor.Opportunities" severity="info" value="Opportunities"></Tag>
                        <Tag v-if="data.type === Factor.Threats" severity="danger" value="Threats"></Tag>
                    </template>
                </Column>
                <Column field="priority" header="Quantity">
                    <template #body="{ data }">
                        <Tag v-if="data.priority === Priority.Low" severity="success" value="Low"></Tag>
                        <Tag v-if="data.priority === Priority.Medium" severity="warn" value="Medium"></Tag>
                        <Tag v-if="data.priority === Priority.High" severity="danger" value="High"></Tag>

                    </template>
                </Column>
                <Column>
                    <template #body="{ data }">
                        <Button icon="pi pi-pen-to-square" @click="editRow(data)" severity="secondary" rounded></Button>
                    </template>
                </Column>

                <Column>
                    <template #body="{ data }">
                        <Button icon="pi pi-trash" @click="openRemoveDialog(data)" severity="secondary"
                            rounded></Button>
                    </template>
                </Column>
            </DataTable>

            <Button type="button" :label="'View all criteria(' + store.getFactorsLength + ')'" icon="pi pi-arrow-right"
                class="w-full" />

            <Dialog v-model:visible="showRemoveDialog" modal header="You want remove next criteria"
                :style="{ width: '25rem' }">
                <div class="flex items-center gap-4 mb-4">
                    <p class="text-lg font-semibold"> {{ removeOption?.title }} </p>
                    <p class="text-sm font-semibold text-gray-400"> {{ removeOption?.notes }} </p>
                </div>
                <div class="flex justify-end gap-2">
                    <Button type="button" label="Cancel" severity="secondary" @click="closeRemoveDialog"></Button>
                    <Button type="button" label="Remove" severity="danger" @click="removeRow"></Button>
                </div>
            </Dialog>

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
import Tag from 'primevue/tag';
import { Priority } from '../types/PriorityType';
import { Factor } from '../types/FactorType';
import Dialog from 'primevue/dialog';

const store = useFactorsStore()

const factorsList: Ref<FactorItem[]> = ref([]);

const showRemoveDialog = ref(false)
const removeOption: Ref<FactorItem | undefined> = ref()

function editRow(data: FactorItem) {
}

function openRemoveDialog(data: FactorItem) {
    showRemoveDialog.value = true
    removeOption.value = data
}

function closeRemoveDialog() {
    showRemoveDialog.value = false
    removeOption.value = undefined
}

function removeRow() {
    if (!removeOption.value) {
        removeOption.value = undefined
        showRemoveDialog.value = false
        return;
    }

    store.removeItem(removeOption.value?.id)
    removeOption.value = undefined
    showRemoveDialog.value = false
}

onMounted(() => {
    factorsList.value = store.getRecentFactors
})
</script>

<style scoped></style>