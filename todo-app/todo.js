document.addEventListener('DOMContentLoaded', () => {
    const todoForm = document.getElementById('todo-form');
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');

    todoForm.addEventListener('submit', (event) => {
        event.preventDefault();
        addTodoItem(todoInput.value);
        todoInput.value = '';
    });

    function addTodoItem(task) {
        const li = document.createElement('li');
        li.textContent = task;

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.addEventListener('click', () => {
            todoList.removeChild(li);
        });

        li.appendChild(removeButton);
        todoList.appendChild(li);
    }
});
