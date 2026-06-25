<template>
    <div class="rounded-lg border-1 border-gray-100 shadow-sm p-4 grid gap-4">
        <div class="w-full flex items-center justify-start gap-2">
            <i class="pi pi-plus-circle mr-2"></i>
            <p class="font-semibold text-lg">Add criteria</p>
        </div>
        <div class="card flex flex-col gap-2 justify-center">
            <div class="flex flex-col gap-2">
                <label class="text-sm font-medium" for="title">Criteria title</label>
                <InputText id="title" v-model="form.title" placeholder="e.g. Strong brand recognition" />
            </div>
            <div class="flex flex-col gap-2">
                <label class="text-sm font-medium" for="goal">Notes (Optional)</label>
                <Textarea id="description" v-model="form.notes" rows="5" cols="30" style="resize: none"
                    placeholder="Add any context or detail about this criteria" />
            </div>
            <div class="card flex justify-center">
                <Select v-model="form.type" :options="types" optionLabel="name" placeholder="Select type"
                    :defaultValue="types[0]" class="w-full" />
            </div>

            <div class="card flex justify-center">
                <SelectButton v-model="form.priority" :options="priorities" optionLabel="name"
                    :defaultValue="priorities[0]" />
            </div>

            <Button label="Add criteria" @click="addCriteria" icon="pi pi-plus" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { Button, InputText, Select, SelectButton, Textarea } from 'primevue';
import { reactive, ref, type Reactive, type Ref } from 'vue';
import { useFactorsStore } from '../store/factors-store';
import { Factor, type FactorType } from '../types/FactorType';
import { Priority, type PriorityType } from '../types/PriorityType';
import type { FactorItem } from '../types/FactorItem';

const store = useFactorsStore()

const form: Reactive<{
    title?: string,
    type?: CategoryObj,
    priority?: PriorityObj,
    notes?: string
}> = reactive({
    title: undefined,
    type: undefined,
    priority: undefined,
    notes: undefined,
})

type CategoryObj = { name: string, value: string }

const types: Ref<CategoryObj[]> = ref([
    { name: 'Strength', value: Factor.Strengths },
    { name: 'Weaknesses', value: Factor.Weaknesses },
    { name: 'Opportunities', value: Factor.Opportunities },
    { name: 'Threats', value: Factor.Threats },
]);

type PriorityObj = { name: string, value: string }

const priorities: Ref<PriorityObj[]> = ref([
    { name: 'Low', value: Priority.Low },
    { name: 'Medium', value: Priority.Medium },
    { name: 'High', value: Priority.High },
]);

function addCriteria() {
    let newId = store.getFactorsLength + 1

    store.addNewItem({
        id: newId,
        title: form.title as unknown as string,
        type: getType(form.type),
        priority: getPriority(form.priority),
        notes: form.notes,
        dateAdded: new Date(),
    } as FactorItem)

    resetForm()
}

function resetForm() {
    form.title = undefined;
    form.type = types.value[0];
    form.priority = priorities.value[0];
    form.notes = undefined;
}

function getType(formType?: CategoryObj): FactorType {
    if (!formType) {
        return Factor.Strengths
    }

    return formType.value as FactorType
}

function getPriority(formPriority?: PriorityObj): PriorityType {
    if (!formPriority) {
        return Priority.Low
    }

    return formPriority.value as PriorityType
}
</script>

<style scoped></style>