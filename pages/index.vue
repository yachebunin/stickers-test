<template>
  <div>
    <h1>Доска стикеров</h1>
    <div class="cards-grid">
      <div v-for="(card, index) in cards" :key="index" class="card">
        {{ card.text }}
      </div>
    </div>
    <NuxtLink to="/settings">Перейти в настройки</NuxtLink>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const cards = computed(() => store.state.cards)
</script>

<style lang="scss">
.cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.card {
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

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
  }
}

h1 {
  text-align: center;
  font-size: 3rem;
  margin-bottom: 20px;
  color: #333;
}

a {
  display: flex;
  max-width: max-content;
  margin: 20px auto 0;
  padding: 12px 24px;
  background-color: #007bff;
  color: white;
  font-size: 1.2rem;
  border-radius: 8px;
  text-decoration: none;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    background-color: #0056b3;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
}
</style>
