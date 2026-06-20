<template>
    <div class="rounder-md border-1 border-gray-100 shadow-sm p-4 flex flex-col gap-4">
        <div class="w-full flex items-center justify-start gap-2">
            <i class="pi pi-file mr-2"></i>
            <p class="font-semibold text-lg">Analysis Details</p>
        </div>
        <div class="card flex flex-col gap-2 justify-center">
            <div class="flex flex-col gap-2">
                <label class="text-sm font-medium" for="title">Title</label>
                <InputText id="title" v-model="form.title" placeholder="Name your SWOT analysis"/>
            </div>
            <div class="flex flex-col gap-2">
                <label class="text-sm font-medium" for="goal">Goal / Key question</label>
                <Textarea id="description" v-model="form.goals" rows="5" cols="30" style="resize: none" placeholder="What decision are you trying to make?" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { InputText, Textarea } from 'primevue';
import { reactive } from 'vue';

const form = reactive({
    title: undefined,
    goals: undefined,
})

</script>

<style scoped>

</style>