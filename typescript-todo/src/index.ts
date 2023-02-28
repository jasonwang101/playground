interface Todo {
    text: string;
    completed: boolean;
}

const btn = document.getElementById("btn")! as HTMLButtonElement;
const input = document.getElementById("todoinput")! as HTMLInputElement;
const form = document.querySelector("form")!;
const list = document.getElementById("todolist")! as HTMLUListElement;

const todos : Todo[] = readTodos();
todos.forEach(createTodo);

function readTodos(): Todo[] {
    const todosJson = localStorage.getItem("todos");
    if (todosJson === null) return [];
    return JSON.parse(todosJson);
}

function saveTodos() {
    localStorage.setItem("todos", JSON.stringify(todos));
}

function handleSubmit(e: SubmitEvent) {
    e.preventDefault();
    const newTodo: Todo = {
        text: input.value,
        completed: false
    }
    createTodo(newTodo);
    todos.push(newTodo);

    saveTodos();

    input.value = "";
}

function createTodo(todo: Todo) {
    const newLi = document.createElement("li");
    const newCheckbox = document.createElement("input");
    newCheckbox.type = "checkbox";
    newCheckbox.checked = todo.completed;

    newCheckbox.addEventListener("change", function(){
        todo.completed = newCheckbox.checked;
        saveTodos();
    });
    
    newLi.append(todo.text);
    newLi.append(newCheckbox);
    list.append(newLi);
}

form.addEventListener("submit", handleSubmit);