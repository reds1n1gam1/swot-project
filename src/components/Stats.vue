<template>
    <div class="container mx-auto">
        <div class="grid grid-cols-4 gap-6 py-6 px-8 border-1 border-gray-200 shadow-sm rounded-lg">
            <div class="flex flex-row gap-4">
                <div class="bg-purple-200 rounded-full py-6 px-8 flex justify-center items-center ">
                    <i class="pi pi-bars text-purple-500" style="font-size: 1.8rem"></i>
                </div>
                <div class="grid gap-2">
                    <p class="text-gray-500 text-medium">Total criteria</p>
                    <p class="text-xl font-semibold">11</p>
                    <p class="text-gray-500 text-medium">Across all categories</p>
                </div>
            </div>

            <div class="flex flex-row gap-4">
                <div class="bg-blue-200 rounded-full py-6 px-8 flex justify-center items-center ">
                    <i class="pi pi-star-fill text-blue-500" style="font-size: 1.8rem"></i>
                </div>
                <div class="grid gap-2">
                    <p class="text-gray-500 text-medium">Strongest area</p>
                    <p class="text-xl font-semibold">Opportunities</p>
                    <p class="text-gray-500 text-medium">4 criteria</p>
                </div>
            </div>

            <div class="flex flex-row gap-4">
                <div class="bg-orange-200 rounded-full py-6 px-8 flex justify-center items-center ">
                    <i class="pi pi-exclamation-triangle text-orange-500" style="font-size: 1.8rem"></i>
                </div>
                <div class="grid gap-2">
                    <p class="text-gray-500 text-medium">Needs attention</p>
                    <p class="text-xl font-semibold">Weakness</p>
                    <p class="text-gray-500 text-medium">2 criteria</p>
                </div>
            </div>

            <div class="flex flex-row gap-4">
                <div class="bg-red-200 rounded-full py-6 px-8 flex justify-center items-center ">
                    <i class="pi pi-chart-bar text-red-500" style="font-size: 1.8rem"></i>
                </div>
                <div class="grid gap-2">
                    <p class="text-gray-500 text-medium">High priority items</p>
                    <p class="text-xl font-semibold">4</p>
                    <p class="text-gray-500 text-medium">36% of total criteria</p>
                </div>
            </div>
        </div>

    </div>
</template>

<script setup lang="ts">

</script>

<style scoped></style>