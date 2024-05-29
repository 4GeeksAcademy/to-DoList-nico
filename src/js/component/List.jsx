import React, { useState } from "react";

const List = () => {

    const [list, setList] = useState([]);
    const [input, setInput] = useState("");

    const addTodo = (event) => {

        event.preventDefault()
        const newTodo = {
            id: Math.random(),
            todo: input,
        };

        setList([...list, newTodo]);

        setInput("");
    };

    const deleteTodo = (id) => {
        const newList = list.filter((todo) => todo.id !== id);
        setList(newList);
    };

    return (
        <form className="container" onSubmit={(event) => addTodo(event)}>
            <h1>To-Do List</h1>
            <input className="form-control form-control-lg" type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="No tasks, please add a task" aria-label=".form-control-lg example"></input>
            <div className="todo-item">
                <span className="todo-text"></span>
                <button className="btn" type="submit">Add</button>
                <ul>
                    {list.map((todo) => (
                        <li key={todo.id}>
                            {todo.todo}
                            <button className="btn btn-danger" onClick={() => deleteTodo(todo.id)}>&times;</button>
                        </li>
                    ))}
                </ul>
            </div>
        </form>
    );
}

export default List;
