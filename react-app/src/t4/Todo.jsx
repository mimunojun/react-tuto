import { useState } from "react";
import List from "./components/List";
import Form from "./components/Form";
import Container from "./components/Container";

const Todo = () => {
    const [todos, setTodos] = useState([
        { id: 0, task: "test0" },
        { id: 1, task: "test1" },
    ]);
    return (
        <>
            <Container>
                <p className="font-bold text-gray-400">Todo.js</p>
                <h1 className="text-5xl font-bold text-center">Reminder</h1>
                <div>
                    <List todoState={[todos, setTodos]} />
                    <Form todoState={[todos, setTodos]} />
                </div>
            </Container>
        </>
    );
};

export default Todo;
