const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoList = document.querySelector("#todo-list");


const toDoArr = [];

function saveToDos(){
    localStorage.setItem("todoarr", JSON.stringify(toDoArr)); //JSON.stringify string 배열로 저장//
}
//세번째//
function deleteToDO(event) {
    const delLI = event.target.parentElement;
    delLI.remove();
}


//두번쨰//
function paintToDo(newToDo) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newToDo;
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
    toDoArr.push(newToDo);
    paintToDo(newToDo);
    saveToDos(newToDo);
}

todoForm.addEventListener("submit", onMakeToDo);