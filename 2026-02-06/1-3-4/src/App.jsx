import { useState } from "react";
import TodoInput from "./components/TodoInput";

function App() {

    const [todos, setTodos] = useState([]);
    const [inputText, setInputText] = useState("");

    function handleAdd() {
        if (inputText.trim() === "") return;

        const newTodo = {
            id: Date.now(),
            text: inputText
        };

        setTodos([...todos, newTodo]);
        setInputText("");
    }

    function handleDelete(id) {
        setTodos(todos.filter((todo) => todo.id !== id));
    }

    return (
        <div className="app">
            <h1 className="title">Todo List</h1>

            <TodoInput 
                inputText={inputText}
                setInputText={setInputText}
                handleAdd={handleAdd}
            />

            <ul className="todo-list">
                {todos.map((todo) => (
                    <li key={todo.id} className="todo-item">
                        {todo.text}
                        <button onClick={() => handleDelete(todo.id)}>
                            삭제
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
