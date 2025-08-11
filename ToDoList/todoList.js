
document.title = "Todo List";
const style = document.createElement("style");
style.textContent = `
    body {
        font-family: Arial, sans-serif;
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: #f4f4f4;
    }
    form {
        margin: 20px 0;
    }
    input[type="text"] {
        padding: 10px;
        width: 300px;
        border: 1px solid #ccc;
        border-radius: 4px;
    }
    button {
        padding: 10px 15px;
        background-color: #25106bff;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
    }
    button:hover {
        background-color: #218838;
    }
    ul {
        list-style-type: none;
        padding: 0;
    }
    li {
        padding: 10px;
        border-bottom: 1px solid #eee;
        width: 300px;
        background-color: white;
        cursor: pointer;
    }
    li.completed {
        text-decoration: line-through;
        color: #aaa;
    }
`;
document.head.appendChild(style);

const todoForm = document.createElement("form");
todoForm.id = "todoForm";

const todoInput = document.createElement("input");
todoInput.type = "text";
todoInput.id = "todoInput";
todoInput.placeholder = "Enter a new todo";

const addButton = document.createElement("button");
addButton.type = "submit";
addButton.textContent = "Add Todo";

todoForm.appendChild(todoInput);
todoForm.appendChild(addButton);

const todoList = document.createElement("ul");
todoList.id = "todoList";

document.body.appendChild(todoForm);
document.body.appendChild(todoList);

todoForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const todoText = todoInput.value.trim();
    if (todoText) {
        addTodoItem(todoText);
        todoInput.value = "";
    }
});

function addTodoItem(text) {
    const li = document.createElement("li");
    li.textContent = text;
    li.addEventListener("click", () => {
        li.classList.toggle("completed");
    });
    todoList.appendChild(li);
}
