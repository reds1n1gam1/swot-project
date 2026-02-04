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

  { text: 'Limited documentation at the early stage', type: 1 },

  { text: 'Potential to attract early adopters and feedback', type: 2 },

  { text: 'Changes in platform pricing or policies', type: 3 },
])

const activeId = ref(0);
const all = ref(false);

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

let inputText = ''
let inputType = 0

function setActiveId(id: number) {
  all.value = false;
  activeId.value = id
}

function resetFilter() {
  all.value = true;
}

function addNewItem() {
  if (inputText) {
    console.log(inputText)
    console.log(inputType)


    cards.value.push({
      type: inputType,
      text: inputText,
    })

    clearInput()
  }

}

function clearInput() {
  inputText = ''
  inputType = 0;
}

</script>

<template>
  <div class="main">
    <div class="container">
      <nav class="sidebar">
        <button type="button" class="sidebar__item" @click="resetFilter">
          <i class="fa-solid fa-border-all"></i>
        </button>
        <button type="button" :class="'sidebar__item ' + (item.id === activeId ? 'sidebar__item--active' : '')"
          v-for="item in navigationItems" :title="item.title" @click="setActiveId(item.id)">
          <i :class="item.icon"></i>
        </button>
      </nav>

      <header class="header">
        <div class="header__left">
          <p class="header__title"> {{ mainTitle ? mainTitle : 'All' }} </p>
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
        <div :class="'card ' + ' card--' + card.type" v-for="card in currentCategoryItemList">
          <img src="" alt="" class="card__image">
          <p class="card__text"> {{ card.text }} </p>
        </div>
        <div class="card card--plus">
          <i class="fa-solid fa-plus"></i>
        </div>
      </div>

    </div>

    <div class="input">
      <div class="input__categories">
        <div class="input__category-item">
          <input type="radio" name="swot" id="Strength" :value="0" v-model="inputType" />
          <label for="Strength">Strength</label>
        </div>

        <div class="input__category-item">
          <input type="radio" name="swot" id="Weakness" :value="1" v-model="inputType" />
          <label for="Weakness">Weakness</label>
        </div>

        <div class="input__category-item">
          <input type="radio" name="swot" id="Opportunites" :value="2" v-model="inputType" />
          <label for="Opportunites">Opportunites</label>
        </div>

        <div class="input__category-item">
          <input type="radio" name="swot" id="Threats" :value="3" v-model="inputType" />
          <label for="Threats">Threats</label>
        </div>
      </div>

      <input v-model="inputText" class="input__form" type="text">
      <button class="input__button" type="button" @click="addNewItem">Add</button>
    </div>
  </div>

</template>

<style scoped></style>
