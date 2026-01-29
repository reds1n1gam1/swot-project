<script setup lang="ts">
import { ref } from 'vue'

const navigationItems = ref([
  {
    title: 'Strength',
    icon: 'fa-solid fa-dumbbell',
    id: 0,
  },
  {
    title: 'Weakness',
    icon: 'fa-solid fa-cloud-rain',
    id: 1,
  },
  {
    title: 'Opportunites',
    icon: 'fa-solid fa-mountain',
    id: 2,
  },
  {
    title: 'Threats',
    icon: 'fa-solid fa-cloud-bolt',
    id: 3,
  },
])

const cards = ref([
  {
    text: 'John Doe 1'
  },
  {
    text: 'John Doe 2 '
  },
  {
    text: 'John Doe3 '
  },
  {
    text: 'John Doe 4 '
  },
  {
    text: 'John Doe 5'
  },
])

const activeId = ref(0)

function setActiveId(id: number) {
  activeId.value = id
}
</script>

<template>
  <div class="container">
    <nav class="sidebar">
      <button type="button" :class="'sidebar__item ' + (item.id === activeId ? 'sidebar__item--active' : '')"
        v-for="item in navigationItems" :title="item.title" @click="setActiveId(item.id)">
        <i :class="item.icon"></i>
      </button>
    </nav>

    <header class="header">
      <div class="header__left">
        <p class="header__title">Strength</p>
      </div>

      <div class="header__switchers">
        <button type="button" class="header__switcher">
          <i class="fa-solid fa-grip"></i>
        </button>
        <button type="button" class="header__switcher">
          <i class="fa-solid fa-bars"></i>
        </button>
      </div>


    </header>

    <div class="content">
      <div class="card card--plus">
        <i class="fa-solid fa-plus"></i>
      </div>
      <div class="card" v-for="card in cards">
        <img src="" alt="" class="card__image">
        <p class="card__text"> {{ card.text }} </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
