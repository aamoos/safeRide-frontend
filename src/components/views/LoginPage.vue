<template>
  <v-app>
    <v-main class="d-flex align-center justify-center" style="min-height: 100vh; background-color: #f5f5f5;">
      <v-card class="pa-6" width="400" elevation="10" max-width="100%">
        <v-card-title class="text-center mb-6">
          <!-- <v-img src="@/assets/logo.png" alt="Logo" max-width="100" class="mb-3" /> -->
          <div class="app-name">
            <span class="text-h4 font-weight-bold">SafeRide</span>
            <p class="subtext text-body-2">안전한 탑승을 위한 스마트한 서비스</p>
          </div>
        </v-card-title>

        <v-card-text>
          <v-btn
            block
            color="yellow darken-2"
            class="mb-4"
            @click="loginWithKakao"
            large
            rounded
            elevation="2"
          >
            <v-icon start>mdi-chat</v-icon>
            카카오 로그인
          </v-btn>

          <v-btn
            block
            color="green darken-2"
            class="mb-4"
            @click="loginWithNaver"
            large
            rounded
            elevation="2"
          >
            <v-icon start>mdi-leaf</v-icon>
            네이버 로그인
          </v-btn>

          <v-btn
            block
            color="blue darken-1"
            @click="loginWithGoogle"
            large
            rounded
            elevation="2"
          >
            <v-icon start>mdi-google</v-icon>
            구글 로그인
          </v-btn>
        </v-card-text>
      </v-card>
    </v-main>
  </v-app>
</template>

<script setup>
const loginWithGoogle = () => {
  window.location.href = process.env.VUE_APP_BACKEND_URL + '/oauth2/authorization/google?redirect_uri=' + process.env.VUE_APP_FRONTEND_URL + '/oauth2/redirect';
}

const loginWithKakao = () => {
  window.location.href = process.env.VUE_APP_BACKEND_URL + '/oauth2/authorization/kakao?redirect_uri=' + process.env.VUE_APP_FRONTEND_URL + '/oauth2/redirect';
}

const loginWithNaver = () => {
  window.location.href = process.env.VUE_APP_BACKEND_URL + '/oauth2/authorization/naver?redirect_uri=' + process.env.VUE_APP_FRONTEND_URL + '/oauth2/redirect';
}

</script>

<style scoped>
.v-card {
  background-color: #fff;
  border-radius: 16px;
}

.v-btn {
  font-weight: bold;
}

.v-btn .v-icon {
  margin-right: 10px;
}

.v-card-title {
  color: #424242;
  font-weight: 500;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.app-name {
  margin-top: 10px;
}

.app-name .text-h4 {
  font-weight: bold;
  color: #333;
}

.app-name .subtext {
  color: #757575;
  margin-top: 4px;
}

.v-btn:hover {
  transition: transform 0.3s ease;
  transform: translateY(-5px);
}

.v-btn:active {
  transform: translateY(0);
}
</style>
