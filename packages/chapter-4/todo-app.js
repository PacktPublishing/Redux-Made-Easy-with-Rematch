const INITAL_STATE = {
  todos: []
}
const todos = {
  state: INITAL_STATE,
  reducers: {
    addTask: (state, title) => {
      const newTodo = {
        title,
        id: Date.now(),
        completed: false,
      }
      return {
        ...state,
        todos: [...state.todos, newTodo]
      }
    },
    removeTask: (state, id) => {
      const newTodos = state.todos.filter(todo => todo.id !== id);
      return {...state, todos: newTodos }
    },
    toggleCompleted: (state, id) => {
      const newTodos = state.todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      );
      return { ...state, todos: newTodos };
    },
    clearCompleted: (state) => {
      const filteredTodos = state.todos.filter(todo => !todo.completed)
      return { ...state, todos: filteredTodos }
    }
  }
}

const RematchInstance = window['@rematch/core']
const store = RematchInstance.init({
  models: {
    todos
  }
})

store.subscribe(render);

const form = document.getElementById("add-todo");
form.addEventListener("submit", event => {
  event.preventDefault();
  const inputValue = event.target.elements.todoText.value;
  store.dispatch.todos.addTask(inputValue)
  event.target.elements.todoText.value = "";
});

const clearTodosButton = document.getElementById("clear-todos");
clearTodosButton.addEventListener("click", () => store.dispatch.todos.clearCompleted());

const todosContainer = document.getElementById("todos-container");

function render() {
  todosContainer.innerHTML = "";
  const { todos } = store.getState().todos;
  todos.forEach(todo => {
    const task = document.createElement("li");
    task.textContent = todo.title;

    if (todo.completed) {
      task.style.textDecoration = "line-through";
    }

    createButton(task, "Remove", () => store.dispatch.todos.removeTask(todo.id));
    createButton(task, "Toggle done", () => store.dispatch.todos.toggleCompleted(todo.id));

    todosContainer.appendChild(task);
  });
}

/**
 * Utility function to create buttons
 * @param {*} parent task element to appendchild
 * @param {*} text Text of the button
 * @param {*} cb Callback
 */
function createButton(parent, text, cb) {
  const btn = document.createElement("button");
  btn.textContent = text;
  btn.addEventListener("click", cb);
  parent.appendChild(btn);
}