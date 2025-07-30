let nowDate = new Date();
let nowHour = nowDate.getHours()
console.log(nowDate);
document.getElementById('time').innerHTML = `현재 시간:${nowDate}`


// 클릭 이벤트
document.getElementById("event").addEventListener("click", function () {
    myRandom = Math.random();
    let myTxt;

    if (myRandom > 0.8) { myTxt = '당첨' }
    else { myTxt = '꽝' }
    document.getElementById("result").innerHTML = `<h3>경품 추천 결과: ${myTxt}</h1>`
});




