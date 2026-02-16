<template>
    <div class="input">
        <div class="input__categories">
            <div class="input__category-item">
                <input class="input__option" type="radio" name="swot" id="Strength" :value="0" v-model="inputType" \ />
                <i class="fa-solid fa-dumbbell"></i>
            </div>

            <div class="input__category-item">
                <input class="input__option" type="radio" name="swot" id="Weakness" :value="1" v-model="inputType" \ />
                <i class="fa-solid fa-cloud-rain"></i>
            </div>

            <div class="input__category-item">
                <input class="input__option" type="radio" name="swot" id="Opportunites" :value="2" v-model="inputType"
                    \ />
                <i class="fa-solid fa-mountain"></i>
            </div>

            <div class="input__category-item">
                <input class="input__option" type="radio" name="swot" id="Threats" :value="3" v-model="inputType" \ />
                <i class="fa-solid fa-cloud-bolt"></i>
            </div>
        </div>

        <input v-model="inputText" class="input__form" type="text" placeholder="Please write here your text" @keyup.enter="addNewItem">
        <button class="input__button" type="button" @click="addNewItem">Add</button>
    </div>
</template>


<script setup lang="ts">
import { ref } from 'vue'
import { useCardStore } from '../store/card-store'

const cardStore = useCardStore()

let inputText = ref('')
let inputType = 0

function addNewItem() {
    if (inputText) {

        cardStore.addCard({
            type: inputType,
            text: inputText.value,
        })

        clearInput()
    }
}


function clearInput() {
    inputText.value = ''
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
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--secondary-color);
    padding: 16px 8px;
    font-size: 24px;
    cursor: pointer;
    transition: background-color 200ms ease-in-out;
}

.input__category-item:has(.input__option:checked) {
    background-color: var(--primary-color);
}

.input__option {
    opacity: 1;
    position: absolute;
    inset: 0;
    opacity: 0;
    cursor: pointer;
}

@media (max-width: 767px) {
    .input__categories {
        grid-template-columns: repeat(2, 1fr);
    }
}

</style>