<template>
    <div class="rounder-md border-1 border-gray-100 shadow-sm p-4 grid gap-4">
        <div class="w-full flex items-center justify-start gap-2">
            <i class="pi pi-plus-circle mr-2"></i>
            <p class="font-semibold text-lg">Add criteria</p>
        </div>
        <div class="card flex flex-col gap-2 justify-center">
            <div class="flex flex-col gap-2">
                <label class="text-sm font-medium" for="title">Criteria title</label>
                <InputText id="title" v-model="form.title" placeholder="e.g. Strong brand recognition"/>
            </div>
            <div class="flex flex-col gap-2">
                <label class="text-sm font-medium" for="goal">Notes (Optional)</label>
                <Textarea id="description" v-model="form.notes" rows="5" cols="30" style="resize: none" placeholder="Add any context or detail about this criteria" />
            </div>
            <div class="card flex justify-center">
        <Select v-model="form.category" :options="categories" optionLabel="name" placeholder="Select category" class="w-full" />
    </div>

    <div class="card flex justify-center">
        <SelectButton v-model="form.priority" :options="priorities" optionLabel="name" multiple aria-labelledby="multiple" />
    </div>

    <Button label="Add criteria" icon="pi pi-plus" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { Button, InputText, Select, SelectButton, Textarea } from 'primevue';
import { reactive, ref } from 'vue';

    const form = reactive({
        title: undefined,
        notes: undefined,
        category: undefined,
        priority: undefined
    })

    const categories = ref([
    { name: 'Strength', code: 'STR' },
    { name: 'Weaknesses', code: 'WEA' },
    { name: 'Opportunities', code: 'OPP' },
    { name: 'Threats', code: 'TRH' },
]);

const priorities = ref([
    { name: 'High', value: 1 },
    { name: 'Medium', value: 2 },
    { name: 'Low', value: 3 }
]);
</script>

<style scoped>

</style>