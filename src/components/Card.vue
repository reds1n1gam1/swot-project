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
    --card-color: var(--strength-color);
}

.card--1 {
    --card-color: var(--weak-color);
}

.card--2 {
    --card-color: var(--opport-color);
}

.card--3 {
    --card-color: var(--threats-color);
}

.card:hover {
    transform: scale(1.02);
    cursor: pointer;
}

.card--plus {
    background-color: var(--primary-bg-color);
}
</style>