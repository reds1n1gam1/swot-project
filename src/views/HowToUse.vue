<template>
    <MainLayout>
        <template #body>
            <div class="info-page">

                <h1>How to Use SWOT Analysis</h1>

                <About></About>

                <h2>SWOT analysis is a simple framework used to evaluate a situation or idea before making a decision.
                </h2>
                <h3>Step 1 — Strengths</h3>
                <p>Write what works well.</p>
                <p>What advantages do you have?</p>
                <p>Examples:</p>
                <p>skills</p>
                <p>resources</p>
                <p>experience</p>
                <p>unique features</p>

                <h3>Step 2 — Weaknesses</h3>
                <p>Identify limitations or problems.</p>
                <p>Examples:</p>
                <p>lack of time</p>
                <p>missing knowledge</p>
                <p>budget constraints</p>

                <h3>Step 3 — Opportunities</h3>
                <p>Think about external factors that may help you succeed.</p>
                <p>Examples:</p>
                <p>market demand</p>
                <p>trends</p>
                <p>partnerships</p>

                <h3>Step 4 — Threats</h3>
                <p>Consider risks or obstacles.</p>
                <p>Examples:</p>
                <p>competition</p>
                <p>costs</p>
                <p>external changes</p>
                <p>After filling all sections, compare the items and decide which direction is most reasonable.</p>
            </div>
        </template>
    </MainLayout>
</template>

<script setup lang="ts">

import About from '../components/About.vue';
import MainLayout from '../layout/MainLayout.vue'
</script>

<style scoped></style>