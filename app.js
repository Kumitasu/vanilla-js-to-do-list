const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption =document.querySelector('.filter-todo');

todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click', filterTodo);

function addTodo(event) {
    // Preventing from submitting
    event.preventDefault();
    // Todo Div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    //Creat Li
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    //Complete Button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-button");
    todoDiv.appendChild(completedButton);
    //Delete Button
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
    deleteButton.classList.add("delete-button");
    todoDiv.appendChild(deleteButton);
    //Append to list
    todoList.appendChild(todoDiv);
    //Clear Input
    todoInput.value = "";

}

function deleteCheck(e){
    const item = e.target;
    //Delete TodoDiv
    if(item.classList[0] === "delete-button"){
        const todo = item.parentElement;
        todo.classList.add("fall");
        todo.addEventListener("transitionend",function(){
            todo.remove();
        })
        
    }

    if(item.classList[0] === "complete-button"){
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}

function filterTodo(e){
    const todos = todoList.childNodes;
    todos.forEach(function(todo){
        switch(e.target.value){
            case "all":
                todo.style.display = "flex";
                break;
            case "completed":
                if(todo.classList.contains("completed")){
                    todo.style.display = "flex";
                }else{
                    todo.style.display = "none";
                }    
        }
    });
}