const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

todoButton.addEventListener('click', addTodo);

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