let park = 50000;
let garden = 30000;
let result;

result = (park + garden) * 0.85;
document.getElementById('p1').innerHTML = result;

result = (park + garden) * 0.7;
document.getElementById('p2').innerHTML = result;

result = (park + garden) * 0.75;
document.getElementById('p3').innerHTML = result;

// 선언부
let userNumber = parseInt(prompt('불났을때 전화 하는 곳은?'));

// 구현부
if (userNumber === 119) {
    // 3의 배수일 때 링크 생성
    let link = document.createElement('a'); // 새 앵커 태그 생성
    link.href = "./index0729.html"; // 원하는 이동할 URL 입력
    link.textContent = '0729 과제로 이동'; // 링크 텍스트
   
} else  {
    // 틀렸을 때 
    // 빈 페이지로 가기 위해 새 빈 페이지 열기
    alert('!!!!!!!!!땡!!!!!!!!!')
    window.location.href = 'about:blank';} // 또는

