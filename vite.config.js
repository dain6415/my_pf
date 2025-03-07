import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  build: {
    outDir: 'dist',  // 빌드 결과물이 저장될 디렉토리 지정
    emptyOutDir: true,  // 이전 빌드 결과물을 삭제하고 새로 빌드
    assetsDir: 'assets',  // 이미지, CSS, JS 등 자원들이 들어갈 디렉토리
  }
});
