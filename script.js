document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('add-button');
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');

    addButton.addEventListener('click', addTodo);

    function addTodo() {
        const todoText = todoInput.value.trim();
        if (todoText === '') return;

        const todoItem = document.createElement('li');
        todoItem.className = 'todo-item';

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.addEventListener('change', toggleComplete);

        const text = document.createElement('span');
        text.textContent = todoText;

        const deleteButton = document.createElement('button');
        deleteButton.className = 'delete-button';
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', deleteTodo);

        todoItem.appendChild(checkbox);
        todoItem.appendChild(text);
        todoItem.appendChild(deleteButton);

        todoList.appendChild(todoItem);

        todoInput.value = '';
    }

    function toggleComplete(event) {
        const todoItem = event.target.parentElement;
        todoItem.classList.toggle('completed');
        moveToBottom(todoItem);
    }

    function deleteTodo(event) {
        const todoItem = event.target.parentElement;
        todoItem.remove();
    }

    function moveToBottom(item) {
        todoList.removeChild(item);
        todoList.appendChild(item);
    }
});
