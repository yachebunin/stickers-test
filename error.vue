<template>
  <div class="error-container">
    <h1 class="error-title">404 - Page Not Found</h1>
    <p class="error-message">Oops! You've arrived here on error, boss.</p>
    <button class="button" @click="goBack">Go Back Home</button>
  </div>
</template>

<script setup>
const goBack = () => {
  navigateTo('/')
}
</script>

<style scoped>
.error-container {
  text-align: center;
  margin-top: 100px;
}

.error-title {
  font-size: 6rem;
  color: #ff4c4c;
}

.error-message {
  font-size: 1.8rem;
  color: #333;
  margin-bottom: 20px;
}

.button {
  padding: 12px 24px;
  background-color: #007bff;
  color: white;
  font-size: 1.2rem;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.button:hover {
  background-color: #0056b3;
}
</style>
