<template>
    <MainLayout>
        <template #body>
            <div class="p-6 grid gap-4">
                <p class="text-4xl font-semibold"> {{ store.getTitle }} </p>

                <div>
                    <p class="text-sm text-gray-400 font-semibold"> Goal /  Key questions</p>
                    <p class="text-xl"> {{  store.getDescription }} </p>
                </div>
            </div>
            <div class="p-6">
                <LivePreview/>
            </div>
            <div>
                <Stats/>
            </div>
        </template>
    </MainLayout>
</template>

<script setup lang="ts">
import LivePreview from '../components/LivePreview.vue';
import Stats from '../components/Stats.vue';
import MainLayout from '../layout/MainLayout.vue';
import { useFactorsStore } from '../store/factors-store.ts';

const store = useFactorsStore()

</script>

<style scoped>

</style>