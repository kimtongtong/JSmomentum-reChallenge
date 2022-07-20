const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const USERNAME_KEY = "username";
const HIDDEN_KEY = "hidden";


function onSubmitEvent(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_KEY);
  const username = loginInput.value;
  localStorage.setItem("username", username);  
  paintGreeting(username);
}

function paintGreeting(username) {
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_KEY);
}

loginForm.addEventListener("submit", onSubmitEvent);

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null) {
  loginForm.classList.remove(HIDDEN_KEY);
  loginForm.addEventListener("submit", onSubmitEvent);
} else {
  paintGreeting(savedUsername);
}