<template>
  <v-sheet class="bg-deep-purple pa-12 d-flex align-center justify-center" height="100vh">
    <v-card class="px-6 py-8 w-100" max-width="500">
      <v-form v-model="form" @submit.prevent="onSubmit">
        <v-text-field
          v-model="email"
          :readonly="loading"
          :rules="[required]"
          class="mb-2"
          label="Email"
          clearable
        ></v-text-field>

        <v-text-field
          v-model="password"
          :readonly="loading"
          :rules="[required]"
          label="Password"
          placeholder="Enter your password"
          type="password"
          clearable
        ></v-text-field>

        <v-alert v-if="errorMessage" type="error" class="mt-2">
          {{ errorMessage }}
        </v-alert>

        <br>

        <v-btn
          :disabled="!form"
          :loading="loading"
          color="success"
          size="large"
          type="submit"
          variant="elevated"
          block
        >
          Sign In
        </v-btn>
      </v-form>
    </v-card>
  </v-sheet>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'

const form = ref(false)
const email = ref('')
const password = ref('')
const loading = ref(false)
const errorMessage = ref('')

async function onSubmit() {
  if (!form.value) return
  loading.value = true
  errorMessage.value = ''

  try {
    const response = await axios.post('/api/login', {
      email: email.value,
      password: password.value
    })

    console.log('Login successful:', response.data)
    // 로그인 성공 시 처리 (예: 토큰 저장, 페이지 이동 등)

  } catch (error) {
    console.error('Login failed:', error)
    errorMessage.value = error.response?.data?.message || 'Login failed. Please try again.'
  } finally {
    loading.value = false
  }
}

function required(v) {
  return !!v || 'Field is required'
}
</script>
