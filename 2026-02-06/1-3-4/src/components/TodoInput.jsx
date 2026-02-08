function TodoInput({ inputText, setInputText, handleAdd }) {
    return (
        <div className="todo-input">
            <input
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        handleAdd();
                    }
                }}
            />
            <button onClick={handleAdd}>
                추가
            </button>
        </div>
    );
}

export default TodoInput;
