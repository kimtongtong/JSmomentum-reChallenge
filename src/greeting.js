const loginForm = document.querySelector("#login-form"); //로그인 폼//
const loginInput = document.querySelector("#login-form input"); //loginForm안의 input//
const greeting = document.querySelector("#greeting"); //loginForm 사라질 떄 나타나는 인사화면//

//코드 실행 순서는 아래 if(조건문) 순서 대로 진행//

const HIDDEN_KEY = "hidden"; //특정 클래스를 안보이게 하는 class//
const USERNAME_KEY = "username"; //localStorage에 사용 될 key 이름//

function onGreetingEvent(event) {
  event.preventDefault(); //submit 새로고침 되는 이벤트(evnet의 기본 동작)를 막아준다.//
  loginForm.classList.add(HIDDEN_KEY);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  greeting.innerText = `hello ${username}`;
  paintGreeting(username);
  //위 함수에서는 username에서 이벤트를 가져온다.//
}

function paintGreeting(username) {
  greeting.innerText = `hello ${username}`;
  greeting.classList.remove(HIDDEN_KEY);
}

//함수명(argument = 인자) 이 코드에서 인자 값이 달라도 값이 같은 이유는 위 username에서 가져오는 것은 input value에서 가져왔기 떄문이고//
// 아래의 savedUsername의 이벤트를 인자로 가져오지만 input에 입력 값이 localStorage에도 같은 값은 동시에 가지기 떄문에 argument 이름이 달라도//
// 같은 값을 가지고 올 수 있다.//

loginForm.addEventListener("submit", onGreetingEvent);

const savedUsername = localStorage.getItem(USERNAME_KEY);

//1. if문은 코드 실행시 가장 먼저 실행이 된다.//
//만약 savedUsername에 값이 null 인 경우에 사라진 hidden 클래스틀 삭제 하고 loginForm을 화면에 출력//
//그리고 submit을 실행한다. 물론 submit 버튼을 눌러야 하면 실행 되는 함수는 위에 function을 사용//
//else의 경우에는 h1 = greeting안에 innerText를 주어 hello와 localStorage의 key값을 가져와서 텍스트를 넣는다//
//그리고 hidden 클래스를 제거해 화면에 나타나게 되며 loginForm은 다시 사라진다.//
if(savedUsername === null) {
  loginForm.classList.remove(HIDDEN_KEY); //html에서 login-form애 class="hidden"이 되어 있어야 한다.//
  loginForm.addEventListener("submit", onGreetingEvent);
} else {
  paintGreeting(savedUsername);
  //위 함수는 savedUsername에서 이벤트 정보를 가져온다//
}


