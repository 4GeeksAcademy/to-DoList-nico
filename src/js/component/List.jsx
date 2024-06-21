import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const List = () => {

    const [list, setList] = useState([]);
    const [input, setInput] = useState("");

    const addTodo = (event) => {

        event.preventDefault()
        const newTodo = {
            id: uuidv4(),
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
            <div>
                <h1>To-Do List<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-check-square" viewBox="0 0 16 16">
                    <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                    <path d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z" />
                </svg></h1>
            </div>
            <input className="form-control form-control-lg" type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="No tasks, please add a task" aria-label=".form-control-lg example"></input>
            <div className="todo-item">
                <span className="todo-text"></span>
                <button className="btn" type="submit">Add</button>
                <br></br>
                <div>
                    <ul>
                        {list.map((todo) => (
                            <li key={todo.id}>
                                {todo.todo}
                                <button className="btn btn-danger" onClick={() => deleteTodo(todo.id)}>&times;</button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </form>
    );
}

export default List;
