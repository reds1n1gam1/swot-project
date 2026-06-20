<template>
    <div class="main">
        <Navigation></Navigation>

        <div class="container mx-auto" id="tool">
            <slot name="body"></slot>
        </div>

        <Footer></Footer>
    </div>
</template>

<script setup lang="ts">
import Footer from '../components/Footer.vue'
import Navigation from '../components/Navigation.vue'
</script>

<style scoped>
</style>