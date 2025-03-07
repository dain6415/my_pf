import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  root: './',  // 루트 디렉토리를 명시적으로 지정
  build: {
    outDir: 'dist',  // 빌드 결과물이 'dist' 폴더에 출력되도록
    assetsDir: 'assets',
  }
})