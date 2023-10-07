import { useState } from "react";
import List from "./components/List";
import Form from "./components/Form";
import "./Todo.css";

const Todo = () => {
    const [todos, setTodos] = useState([
        { id: 0, task: "test0" },
        { id: 1, task: "test1" },
    ]);
    return (
        <>
            <div className="container">
                <p className="title">Todo.js</p>
                <h1 style={{ textAlign: "center" }}>Reminder</h1>
                <div>
                    <List todoState={[todos, setTodos]} />
                    <Form todoState={[todos, setTodos]} />
                </div>
            </div>
        </>
    );
};

export default Todo;
