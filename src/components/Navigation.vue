<template>
    <div class="menu">
        <div class="menu__icon">
            <i class="fa-solid fa-table-cells"></i>
        </div>
        <nav class="menu__items">
            <ul class="menu__list">
                <li>Main</li>
                <li>Tool</li>
                <li>Information</li>
            </ul>
        </nav>
        <span></span>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
    .menu {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 32px;
    }

    .menu__icon {
        font-size: 24px;
        cursor: pointer;
    }

    .menu__list {
        display: flex;
        gap: 32px;
        font-weight: 600;
    }

    .menu__list li {
        cursor: pointer;
        list-style-type: none;
    }
</style>