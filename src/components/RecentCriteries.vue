<template>
    <div class="rounder-md border-1 border-gray-100 shadow-sm p-4">
        <div class="w-full flex items-center justify-start gap-2">
            <i class="pi pi-history mr-2"></i>
            <p class="font-semibold text-lg">Recent criteries</p>
        </div>

        <div class="card">
            <DataTable :value="listItem" tableStyle="">
                <Column field="title" header="Title"></Column>
                <Column field="category" header="Category"></Column>
                <Column field="priority" header="Quantity"></Column>
                <Column>
                    <template #body="{ data }">
                        <Button icon="pi pi-edit" @click="editRow(data)" severity="secondary" rounded></Button>
                    </template>
                </Column>

                <Column>
                    <template #body="{ data }">
                        <Button icon="pi pi-delete" @click="removeRow(data)" severity="secondary" rounded></Button>
                    </template>
                </Column>
            </DataTable>
        </div>
    </div>
</template>

<script setup lang="ts">
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import { ref } from 'vue';

const listItem = ref();

function editRow(data:unknown) {

}

function removeRow(data:unknown) {

}
</script>

<style scoped></style>