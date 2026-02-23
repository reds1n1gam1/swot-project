<template>
    <div class="main">
        <Navigation></Navigation>

        <div class="container" id="tool">
            <slot name="body"></slot>
        </div>

        <About></About>

        <Footer></Footer>
    </div>
</template>

<script setup lang="ts">
import Footer from '../components/Footer.vue'
import Navigation from '../components/Navigation.vue'
</script>

<style scoped>
.main {
    width: 100%;
    min-width: 100vh;
    padding: var(--main-padding, 0 16px 32px);
}

@media(max-width: 767px) {
    .main {
        --main-padding: 0 16px 32px;
    }
}
</style>