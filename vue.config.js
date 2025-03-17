const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  devServer: {
    port: 3000,  // Vue 개발 서버 포트 설정
    proxy: {
      '/api': {
        target: process.env.VUE_APP_BACKEND_URL, // Spring 서버 주소
        changeOrigin: true,
        pathRewrite: {
          '^/api': '' // '/api' 경로를 빈 문자열로 변환
        }
      }
    }
  }
})
