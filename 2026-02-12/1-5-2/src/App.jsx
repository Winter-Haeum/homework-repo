import { useState, useReducer } from "react";
import TodoInput from "./components/TodoInput";

function todoReducer(state, action) {
  switch (action.type) {
    case "ADD": {
      return [...state, action.payload];
    }

    case "DELETE": {
      return state.filter((todo) => todo.id !== action.payload);
    }

    case "TOGGLE": {
      return state.map((todo) => (todo.id === action.payload ? { ...todo, done: !todo.done } : todo));
    }

    default: {
      return state;
    }
  }
}

function App() {
  const [todos, dispatch] = useReducer(todoReducer, []);
  const [inputText, setInputText] = useState("");

  function handleAdd() {
    if (inputText.trim() === "") return;

    const newTodo = {
      id: Date.now(),
      text: inputText,
      done: false,
    };

    dispatch({ type: "ADD", payload: newTodo });
    setInputText("");
  }

  function handleDelete(id) {
    dispatch({ type: "DELETE", payload: id });
  }

  function handleToggle(id) {
    dispatch({ type: "TOGGLE", payload: id });
  }

  return (
    <div className="app">
      <h1 className="title">Todo List</h1>

      <TodoInput inputText={inputText} setInputText={setInputText} handleAdd={handleAdd} />

      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id} className={`todo-item ${todo.done ? "done" : ""}`}>
            <span
              className="todo-text"
              onClick={() => handleToggle(todo.id)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleToggle(todo.id);
              }}
            >
              {todo.text}
            </span>

            <div className="todo-actions">
              <button className="btn btn-ghost" onClick={() => handleToggle(todo.id)}>
                {todo.done ? "취소" : "완료"}
              </button>
              <button className="btn btn-danger" onClick={() => handleDelete(todo.id)}>
                삭제
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
