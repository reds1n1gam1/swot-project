<script setup lang="ts">
import { computed, ref } from 'vue'

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
  { text: 'Clear product vision and focused scope', type: 0 },
  { text: 'Modern and flexible frontend architecture', type: 0 },
  { text: 'High development speed with minimal bureaucracy', type: 0 },
  { text: 'Good performance on low-cost infrastructure', type: 0 },
  { text: 'Easy onboarding for new contributors', type: 0 },
  { text: 'Reusable components and UI patterns', type: 0 },
  { text: 'Strong alignment with current web standards', type: 0 },

  { text: 'Limited documentation at the early stage', type: 1 },
  { text: 'No dedicated QA or testing pipeline', type: 1 },
  { text: 'Single point of failure in decision-making', type: 1 },
  { text: 'Incomplete error handling in edge cases', type: 1 },
  { text: 'Lack of long-term roadmap', type: 1 },
  { text: 'Manual deployment steps in some environments', type: 1 },

  { text: 'Potential to attract early adopters and feedback', type: 2 },
  { text: 'Ability to pivot quickly based on user needs', type: 2 },
  { text: 'Integration with popular third-party APIs', type: 2 },
  { text: 'Expansion into new markets or niches', type: 2 },
  { text: 'Monetization through premium features', type: 2 },
  { text: 'Open-source visibility and community growth', type: 2 },
  { text: 'Use as a technical showcase for hiring', type: 2 },
  { text: 'Automation of repetitive user workflows', type: 2 },

  { text: 'Changes in platform pricing or policies', type: 3 },
  { text: 'Emergence of similar tools with better funding', type: 3 },
  { text: 'Breaking changes in core dependencies', type: 3 },
  { text: 'Security vulnerabilities in third-party libraries', type: 3 }
])

const activeId = ref(0);
const all = ref(false);
const title = ref('')

const currentCategoryItemList = computed(() => {
  if (all.value) {
    activeId.value = -1;
    return cards.value
  }

  return cards.value.filter((item) => item.type === activeId.value)
})

const mainTitle = computed(() => {
  return navigationItems.value[activeId.value]?.title
})

function setActiveId(id: number) {
  all.value = false;
  activeId.value = id
}

function toggle() {
  all.value = !all.value
}

</script>

<template>
  <div class="container">
    <nav class="sidebar">
      <button type="button" class="sidebar__item" @click="toggle">
        <i class="fa-solid fa-border-all"></i>
      </button>
      <button type="button" :class="'sidebar__item ' + (item.id === activeId ? 'sidebar__item--active' : '')"
        v-for="item in navigationItems" :title="item.title" @click="setActiveId(item.id)">
        <i :class="item.icon"></i>
      </button>
    </nav>

    <header class="header">
      <div class="header__left">
        <p class="header__title"> {{ mainTitle }} </p>
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
      <div :class="'card ' + ' card--' + card.type" v-for="card in currentCategoryItemList">
        <img src="" alt="" class="card__image">
        <p class="card__text"> {{ card.text }} </p>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
