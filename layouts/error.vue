<template>
  <div>
    <h1>{{ error.statusCode }} - {{ error.message }}</h1>
    <NuxtLink to="/">Вернуться на главную</NuxtLink>
  </div>
</template>

<script setup>
const error = useError()
</script>
