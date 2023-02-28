"use strict";
const btn = document.getElementById("btn");
const input = document.getElementById("todoinput");
const form = document.querySelector("form");
const list = document.getElementById("todolist");
const todos = readTodos();
todos.forEach(createTodo);
function readTodos() {
    const todosJson = localStorage.getItem("todos");
    if (todosJson === null)
        return [];
    return JSON.parse(todosJson);
}
function saveTodos() {
    localStorage.setItem("todos", JSON.stringify(todos));
}
function handleSubmit(e) {
    e.preventDefault();
    const newTodo = {
        text: input.value,
        completed: false
    };
    createTodo(newTodo);
    todos.push(newTodo);
    saveTodos();
    input.value = "";
}
function createTodo(todo) {
    const newLi = document.createElement("li");
    const newCheckbox = document.createElement("input");
    newCheckbox.type = "checkbox";
    newCheckbox.checked = todo.completed;
    newCheckbox.addEventListener("change", function () {
        todo.completed = newCheckbox.checked;
        saveTodos();
    });
    newLi.append(todo.text);
    newLi.append(newCheckbox);
    list.append(newLi);
}
form.addEventListener("submit", handleSubmit);
