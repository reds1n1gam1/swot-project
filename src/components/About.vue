<template>
    <div class="banner" id="information">
        <h1 class="banner__title">In strategic planning and strategic management, SWOT analysis</h1>
        <p class="banner__subtitle">The name is an acronym for four components:

            <span>Strengths:</span> characteristics of the business or project that give it an advantage over others
            <span>Weaknesses:</span> characteristics that place the business or project at a disadvantage relative to
            others
            <span>Opportunities:</span> elements in the environment that the business or project could exploit to its
            advantage
            <span>Threats:</span> elements in the environment that could cause trouble for the business or project
        </p>

        <div class="banner__action">
            <a href="https://en.wikipedia.org/wiki/SWOT_analysis" target="_blank" class="banner__button">Read more</a>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.banner {
    position: relative;
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

.banner__subtitle {
    font-size: 16px;
    font-weight: 400;
    max-width: 80vw;
    text-align: center;
}

.banner__subtitle span {
    font-weight: 700;
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