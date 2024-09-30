<template>
  <div>
    <h1>Настройки</h1>
    <div class="form">
      <input v-model="newCardText" placeholder="Введите текст карточки" />
      <button @click="addCard">Добавить карточку</button>
    </div>

    <div class="cards-grid">
      <div v-for="(card, index) in cards" :key="index" class="card-item">
        <input v-model="card.text" @input="editCard(index, card.text)" />
        <button @click="deleteCard(index)">Удалить</button>
      </div>
    </div>

    <NuxtLink to="/">Вернуться на главную</NuxtLink>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useStore } from 'vuex'

const newCardText = ref('')
const store = useStore()
const cards = computed(() => store.state.cards)

const addCard = () => {
  if (newCardText.value.trim()) {
    store.commit('addCard', { text: newCardText.value })
    store.dispatch('saveCardsToLocalStorage')
    newCardText.value = ''
  }
}

const editCard = (index, newText) => {
  store.commit('editCard', { index, newText })
  store.dispatch('saveCardsToLocalStorage')
}

const deleteCard = (index) => {
  store.commit('deleteCard', index)
  store.dispatch('saveCardsToLocalStorage')
}
</script>

<style lang="scss">
.form {
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 800px;
  margin: 0 auto 30px;

  input {
    padding: 12px;
    border: 1px solid #ddd;
    border-radius: 8px;
    margin-right: 10px;
    flex: 1;
    font-size: 16px;
    background-color: #fdfdfd;
    box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: border 0.3s ease;

    &:focus {
      outline: none;
      border: 1px solid #007bff;
    }
  }

  button {
    padding: 12px 20px;
    border: none;
    background-color: #007bff;
    color: white;
    font-size: 16px;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #0056b3;
    }
  }
}

.cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.card-item {
  background: linear-gradient(135deg, #fdfbfb 0%, #ebedee 100%);
  border-radius: 10px;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
  padding: 20px;
  text-align: center;
  font-size: 18px;
  font-weight: 500;
  color: #333;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 200px;
  height: 200px;
  flex-direction: column;
  gap: 10px;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
  }

  input {
    margin-bottom: 10px;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 5px;
    width: 100%;
    box-sizing: border-box;
  }

  button {
    padding: 8px 12px;
    background-color: #dc3545;
    border: none;
    color: white;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #c82333;
    }
  }
}
</style>
