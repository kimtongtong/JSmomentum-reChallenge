const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoList = document.querySelector("#todo-list");


let toDoArr = [];
//값이 계속 추가 되기 떄문에 const 에서 let로 바꾼다//

const TODOS_KEY = "todoarr";

function saveToDos(){
    localStorage.setItem("todoarr", JSON.stringify(toDoArr)); 
} //JSON.stringify string 배열로 저장 비슷한 메소드로드 JSON.parse()단순한 string으로 바꿔줄 수 있다.//
//세번째//
function deleteToDO(event) {
    const delLI = event.target.parentElement;
    delLI.remove();
    toDoArr = toDoArr.filter((list) => list.id !== parseInt(delLI.id)); //filter 함수는 지우는게 아닌 조건에 맞게 제외 시킨다//
    saveToDos();
}



//두번쨰//
function paintToDo(newToDo) {
    const li = document.createElement("li");
    li.id = newToDo.id;
    const span = document.createElement("span");
    span.innerText = newToDo.text;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDO);
    li.appendChild(span);
    li.appendChild(button);
    todoList.appendChild(li);

}
//첫번째//
function onMakeToDo(event) {
    event.preventDefault();
    const newToDo = todoInput.value;
    todoInput.value = "";
    const newToDoOBJ = {
        text: newToDo,
        id: Date.now(),
    }
    toDoArr.push(newToDoOBJ);
    paintToDo(newToDo);
    saveToDos();
}

todoForm.addEventListener("submit", onMakeToDo);

const getSavedToDO = localStorage.getItem(TODOS_KEY);

console.log(getSavedToDO);

if(getSavedToDO !== null) {
    const parseToDos = JSON.parse(getSavedToDO);
    toDoArr = parseToDos;
    parseToDos.forEach(paintToDo); //forEach는 array의 각 item에 대해 function을 실행하게 해준다.(개수만큼).//
    //paintToDO 함수만큼 호출해서 불러오는 역할을 한다.//
    // 여기 까지 하면 새로고침 했을때 array를 가져오지만 새로 추가 하면 이전에 있던게 사라짐//
}

// function sayHello(item){
//     console.log("say hello" = item);
// }

//
// parseToDos.forEach((item) => console.log("say hello" + item));

// 위 두 코드의 기능은 동일하다.

