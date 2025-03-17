<script setup>
import { ref, onMounted } from "vue";

const fcmToken = ref("");

onMounted(() => {
  window.receiveFcmToken = (token) => {
    fcmToken.value = token;
  };
});
</script>

<template>
  <div>
    <h1>FCM Token</h1>
    <p>{{ fcmToken }}</p>
  </div>
</template>