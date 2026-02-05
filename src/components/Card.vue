<template>
    <div :class="'card card--' + card.type">
        <img src="" alt="" class="card__image">
        <p class="card__text"> {{ card.text }} </p>
    </div>
</template>

<script setup lang="ts">
const props = defineProps(['card'])

console.log(props.card)
</script>

<style scoped>
.card {
    position: relative;
    height: 160px;
    padding: 16px;
    background-color: var(--secondary-color);
    border-radius: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: transform 0.2s ease-in-out;
}

.card::before {
    content: "";
    position: absolute;
    inset-inline-start: 10px;
    inset-block-start: 10px;
    width: 10px;
    height: 10px;
    border-radius: 5px;
    background-color: var(--card-color);
}

.card--0 {
    --card-color: #22c55e;
}

.card--1 {
    --card-color: #f97316;
}

.card--2 {
    --card-color: #3b82f6;
}

.card--3 {
    --card-color: #ef4444;
}

.card:hover {
    transform: scale(1.02);
    cursor: pointer;
}

.card--plus {
    background-color: #2f3651;
}
</style>