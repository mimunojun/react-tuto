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
                <div className="flex flex-row">
                    <div className="basis-1/2">
                        <List todoState={[todos, setTodos]} />
                    </div>
                    <div className="basis-1/2">
                        <Form todoState={[todos, setTodos]} />
                    </div>
                </div>
            </Container>
        </>
    );
};

export default Todo;
