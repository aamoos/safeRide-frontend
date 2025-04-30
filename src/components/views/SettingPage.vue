<template>
  <v-app>
    <!-- App Bar for the back button -->
    <v-app-bar flat color="transparent" dense>
      <v-btn icon @click="goBack">
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>
    </v-app-bar>

    <v-container class="pa-4" fluid>
      <v-card class="mx-auto rounded-2xl elevation-4" max-width="400">
        <v-card-title class="text-h6 font-weight-bold">설정</v-card-title>
        <v-divider />

        <v-card-text>
          <!-- 알림 -->
          <v-switch
            v-model="notifications"
            label="알림 받기"
            color="indigo"
          ></v-switch>
        </v-card-text>

        <v-card-actions>
          <!-- 저장 버튼 -->
          <v-btn block color="primary" @click="saveSettings">저장</v-btn>
        </v-card-actions>
      </v-card>
    </v-container>
  </v-app>
</template>

<script setup>
import { ref } from 'vue'

// 알림 상태
const notifications = ref(true)

const saveSettings = () => {
  // 알림 설정을 로컬스토리지에 저장
  localStorage.setItem('notifications', notifications.value)
}

const goBack = () => {
  window.history.back()
}
</script>

<style scoped>
.v-app-bar {
  z-index: 10; /* Ensure app bar is on top */
}

.v-container {
  margin-top: 64px; /* Add top margin to give space for the app bar */
}

.v-card {
  transition: all 0.3s ease-in-out;
}
</style>
