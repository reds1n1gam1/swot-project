<template>
    <div class="banner">
        <h1 class="banner__title">Plan your strategy with <span>SWOT</span></h1>
        <h2 class="banner__subtitle">Use this tool to quickly evaluate risks and opportunities before you commit.</h2>
        <div class="banner__action">
            <button type="button" class="banner__button">Start Analysis</button>
            <button type="button" class="banner__button">Export / Share</button>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.banner {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;
    padding: 24px 0;
    min-height: 480px;
}

.banner__title {
    font-size: 32px;
    font-weight: 400;
}

.banner__subtitle{
    font-size: 16px;
    font-weight: 400;
}

.banner__action {
    display: flex;
    gap: 16px;
}

.banner__button {
    cursor: pointer;
    padding: 8px;
    border-radius: 8px;
    background-color: var(--primary-color);
}
</style>