import React, {useState} from "react";

const List = () => {

    const [list, setList] = useState([]);
    const [input, setInput] = useState("");

    const addTodo = (todo) => {


    const newTodo = {
        id: Math.random(),
        todo: todo, 
    };

    setList([...list, newTodo]);

    setInput("");

};

    return (
        <form className="container">
            <h1>To-Do List</h1>
            <input className="form-control form-control-lg" type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="No tasks, please add a task" aria-label=".form-control-lg example"></input>
            <div className="todo-item">
                <span className="todo-text"></span>
                <button className="btn" onClick={() => addTodo(input)}>Add To-Do</button>
                <ul>
                    {list.map((todo) => ( 
                    <li key={todo.id}>
                        {todo.todo}
                    </li>
                    ))}
                </ul>
            </div>
        </form>
    );
}

export default List;
