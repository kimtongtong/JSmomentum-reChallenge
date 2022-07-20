const clock = document.querySelector("#clock");
//우선 html에서 #clock id 요소를 가져와서 변수 선언한다.//

function clockEvent () {
    const date = new Date(); //new Date()는 ()안에 아무것도 없는 경우 오늘 날짜와 시간을 알려준다.//
    const hours = String(date.getHours()).padStart(2, "0"); //padStart(문자 길이, 넣을 문자(숫자, 문자))//
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0"); 
    //padStart는 문자열에서 추가를 하ㄴ다. 시간 함수new Date함수는 숫자로 출력 되기 떄문에 String으로 변수값을 감싸 "문자"로 변경해주어야 한다.//
    clock.innerText = `${hours} : ${minutes} : ${seconds}`;
}

clockEvent();
//이벤트를 한번 더 실행 하는 것으로 html에서는 00으로 되어있는 새로고침 할떄마다 00으로 나오지 않게 미리 실행할 수 있도록 함수를 한번 실행한다.//
setInterval(clockEvent, 1000);
//setInterval을 사용해서 (함수, 시간ms 단위)를 입력하여 함수를 몇ms 단위로 실행 할 것인지 설정한다.//