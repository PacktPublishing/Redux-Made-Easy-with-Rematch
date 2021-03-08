const todosContainer = document.getElementById("todos-container");
const INITAL_STATE = {
  todos: []
}
const form = document.getElementById("add-todo");

function render() {
  todosContainer.innerHTML = "";
  const { todos } = store.getState();
  todos.forEach(todo => {
    const task = document.createElement("li");
    task.textContent = todo.title;

    if (todo.completed) {
      task.style.textDecoration = "line-through";
    }
    createButton(task, "Remove", "REMOVE_TASK", todo.id);
    createButton(task, "Toggle done", "TOGGLE_COMPLETED", todo.id);

    todosContainer.appendChild(task);
  });
}

function reducer(state = INITAL_STATE, action) {
  switch(action.type) {
    case "ADD_TODO": {
      const newTodo = {
        id: Date.now(),
        title: action.title,
        completed: false,
      }
      return {
        ...state,
        todos: [...state.todos, newTodo]
      }
    }
    case "REMOVE_TASK": {
      const newTodos = state.todos.filter(todo =>
        todo.id !== action.id
      );
      return {...state, todos: newTodos }
    }
    case "TOGGLE_COMPLETED": {
      const newTodos = state.todos.map(todo =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
      return { ...state, todos: newTodos };
    }
    case "CLEAR_COMPLETED": {
      const filteredTodos = state.todos.filter(todo => !todo.completed)
        return { ...state, todos: filteredTodos }
      }
    default: return state
  }
}

function createButton(parent, text, type, id) {
  const btn = document.createElement("button");
  btn.textContent = text;
  btn.addEventListener("click", () =>
    store.dispatch({ type, id })
  );
  parent.appendChild(btn);
}

form.addEventListener("submit", event => {
  event.preventDefault();
  const inputValue = event.target.elements.todoText.value;
  store.dispatch({
    type: "ADD_TODO",
    title: inputValue
  });
  event.target.elements.todoText.value = "";
});

const clearTodosButton = document.getElementById("clear-todos");
clearTodosButton.addEventListener("click", () =>
  store.dispatch({ type: "CLEAR_COMPLETED" })
);

const store = window.Redux.createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(render);
