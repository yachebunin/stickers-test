<template>
  <NuxtPage />
</template>

<script setup>
import { store } from './store'

const app = useNuxtApp()
app.vueApp.use(store)

// Загрузка карточек
store.dispatch('loadCardsFromLocalStorage')

// Слушаем изменения в localStorage для синхронизации между вкладками
if (process.client) {
  window.addEventListener('storage', (event) => {
    if (event.key === 'cards') {
      // Если в другой вкладке изменились карточки, обновляем состояние
      store.dispatch('loadCardsFromLocalStorage')
    }
  })
}
</script>
