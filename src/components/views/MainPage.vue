<template>
  <v-app>
    <!-- 상단 바 -->
    <v-app-bar app color="primary" dark elevated>
      <v-toolbar-title class="text-h6">SafeRide</v-toolbar-title>
      <v-spacer />
      <v-btn icon @click="logout">
        <v-icon>mdi-logout</v-icon>
      </v-btn>
    </v-app-bar>

    <!-- 메인 지도 영역 -->
    <v-main>
      <v-container fluid class="pa-0">
        <div ref="mapContainer" class="kakao-map" />
      </v-container>
    </v-main>

    <!-- 하단 네비게이션 바 -->
    <v-bottom-navigation app color="primary" grow>
      <v-btn @click="moveToCurrentLocation">
        <v-icon>mdi-crosshairs-gps</v-icon>
        <span class="d-none d-sm-inline">내 위치</span>
      </v-btn>
      <v-btn @click="router.push('/settings')">
        <v-icon>mdi-cog</v-icon>
        <span class="d-none d-sm-inline">설정</span>
      </v-btn>
    </v-bottom-navigation>
  </v-app>
</template>

<style scoped>
.kakao-map {
  width: 100%;
  height: calc(100vh - 128px);
}

@media (max-width: 600px) {
  .kakao-map {
    height: calc(100vh - 112px);
  }
}
</style>

<style>
.blinking-marker {
  width: 20px;
  height: 20px;
  background-color: red;
  border-radius: 50%;
  animation: blink 1s infinite;
  box-shadow: 0 0 8px red;
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}
</style>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const mapContainer = ref(null)
const mapInstance = ref(null) // 👈 지도 인스턴스 저장용

onMounted(() => {
  loadKakaoMap(mapContainer.value)
})

const loadKakaoMap = (container) => {
  const script = document.createElement('script')
  script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=5f9ad25aeabf2ac5a92cfc45428bfad1&autoload=false`
  document.head.appendChild(script)

  script.onload = () => {
    window.kakao.maps.load(() => {
      const options = {
        center: new window.kakao.maps.LatLng(33.450701, 126.570667),
        level: 3,
        maxLevel: 5,
      }

      mapInstance.value = new window.kakao.maps.Map(container, options)
    })
  }
}

const moveToCurrentLocation = () => {
  if (!navigator.geolocation) {
    alert('이 브라우저에서는 위치 기능을 지원하지 않습니다.')
    return
  }

  navigator.geolocation.getCurrentPosition(
    (position) => {
      const { latitude, longitude } = position.coords
      const locPosition = new window.kakao.maps.LatLng(latitude, longitude)

      // 지도 이동
      mapInstance.value.panTo(locPosition)

      // 깜빡이는 마커 생성
      const markerEl = document.createElement('div')
      markerEl.className = 'blinking-marker'

      // 기존 마커 제거용 변수 (필요시 따로 관리 가능)
      const overlay = new window.kakao.maps.CustomOverlay({
        position: locPosition,
        content: markerEl,
        yAnchor: 1,
      })

      overlay.setMap(mapInstance.value)
    },
    (error) => {
      alert('위치 정보를 가져오는 데 실패했습니다.')
      console.error(error)
    }
  )
}

const logout = () => {
  localStorage.removeItem('accessToken')
  router.push('/login')
}
</script>
