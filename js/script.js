// temporary data storage for todo items 
let todos = [];

//function to add new todo item
function addTodo() {
    const todoInput = document.getElementById("todo-input");
    const todoDate = document.getElementById("todo-date");

    /// basic validation to ensure both fields are filled 
    console.log(todoInput.value);
    console.log(todoDate.value);
    if (todoInput.value.trim() === '' || todoDate.value ==='') {
        alert('please enter a todo item and select a due date.')
    } else {
        //create a new todo object and add it to the todo array
        const newTodo = {
            text: todoInput.value,
            date: todoDate.value,
        };

        //add new todo to the array
        todos.push(newTodo);
        console.log(todos);
    }
}

function displayTodos() {

}

function deleteTodo() {

}

function filterTodo() {
      
}