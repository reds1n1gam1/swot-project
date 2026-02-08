<template>
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
</template>


<script setup lang="ts">
import { useCardStore } from '../store/card-store'

const cardStore = useCardStore()

let inputText = ''
let inputType = 0

function addNewItem() {
    if (inputText) {

        cardStore.addCard({
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

<style scoped>
.input {
    display: grid;
    gap: 16px;
    border-radius: 4px;
    padding: 16px 24px;
}

.input__form {
    border: none;
    padding: 12px;
    border-radius: 4px;
    background: var(--secondary-color);
    border: 1px solid #2f3651;
}

.input__button {
    font-size: 16px;
    font-weight: 700;
    cursor: pointer;
    padding: 12px;
    border-radius: 4px;
    background: var(--secondary-color);
}

.input__categories {
    display: grid;
    gap: 8px;
    grid-template-columns: repeat(4, 1fr);
}

.input__category-item {
    background-color: var(--secondary-color);
    padding: 12px;
}
</style>