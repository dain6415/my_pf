    // URL에서 쿼리 문자열 읽기
    const params = new URLSearchParams(window.location.search);
    const lang = params.get('lang') || 'ko'; // 기본 언어는 한국어
    
    // 언어 데이터 로드 함수
    async function loadLanguage(lang) {
      try {
        const response = await fetch(`${lang}.json`); // ko.json, en.json
        const data = await response.json();
    
        // 텍스트 변경
        document.getElementById('title').innerText = data.title;
        document.getElementById('welcome').innerText = data.welcome;
      } catch (error) {
        console.error('언어 파일 로드 실패:', error);
      }
    }
    
    // 초기 로드
    loadLanguage(lang);