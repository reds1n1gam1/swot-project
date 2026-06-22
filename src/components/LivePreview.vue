<template>
    <div class="grid gap-4 rounded-lg border-1 border-gray-100 shadow-sm p-4">
        <div class="flex justify-between">
            <div class="w-full flex items-center justify-start gap-4">
                <i class="pi pi-eye mr-2"></i>
                <p class="font-semibold text-lg">Live preview</p>
                <Tag icon="pi pi-spinner-dotted pi-spin" severity="success" value="Updates in real time"></Tag>
            </div>
            <Button size="small" type="button" label="Export preview" icon="pi pi-share-alt" class="flex-shrink-0"/>
        </div>
        <div class="grid grid-cols-2 gap-6">
            <CriteriaBlock :type="Factor.Strengths"/>
            <CriteriaBlock :type="Factor.Weaknesses"/>
            <CriteriaBlock :type="Factor.Opportunities"/>
            <CriteriaBlock :type="Factor.Threats"/>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Button } from 'primevue';
import Tag from 'primevue/tag';
import CriteriaBlock from './CriteriaBlock.vue';
import { Factor } from '../types/FactorType';
</script>

<style scoped>

</style>