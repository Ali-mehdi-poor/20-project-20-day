let $ = document;

const todoInputElem = $.getElementById("todoInput");
const addTodoBtn = $.getElementById("addTodoBtn");
const colorsElems = $.querySelectorAll(".color");
const todosWrapper = $.getElementById("todos-wrapper");

colorsElems.forEach(color => {
    color.addEventListener("click", event => {
        todoInputElem.classList = "form-control p-4"
        todoInputElem.style.backgroundColor = color.dataset.color;
    });
});

todoInputElem.addEventListener("keydown", event => {
    if (event.keyCode == 13) {
        addTodoHandler()
    }
})

addTodoBtn.addEventListener("click" , event => {
    addTodoHandler()
})

function addTodoHandler(){
    if(todoInputElem.value){
        let newTodo = createTodo(todoInputElem.value,todoInputElem.style.backgroundColor)
        todosWrapper.appendChild(newTodo)
        todoInputElem.value = ""
        todoInputElem.style.backgroundColor = "#fff"
    }
}

function createTodo(todoContent, color) {
    const todoCol = $.createElement("div")
    todoCol.classList.add("col");
    const todoElem = $.createElement("p")
    todoElem.classList.add("p-5","shadow")
    todoElem.style.backgroundColor = todoInputElem.style.backgroundColor ;
    todoElem.innerHTML = todoContent;
    todoCol.addEventListener('click' , deleteTodo)

    todoCol.append(todoElem);
    return todoCol;
}

function deleteTodo(e) {
    if (e.target.tagName == "P") {
        e.target.parentElement.remove();
    }else{
        e.target.remove();
    }
}