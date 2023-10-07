import { useState } from "react";
import ButtonComponent from "./ButtonComponent";
import Container from "./Container";
const Form = ({ todoState }) => {
    const [input, setInput] = useState("");
    const [todos, setTodos] = todoState;
    const buttonClicked = () => {
        if (input.length !== 0) {
            const newTodos = [...todos];
            newTodos.push({
                id: Math.floor(Math.random() * 100),
                task: input,
            });
            setTodos(newTodos);
            setInput("");
        } else {
            alert("enter your task");
        }
    };
    return (
        <>
            <Container>
                <div>
                    <p className="text-gray-400 font-bold">Form.js</p>
                    <div className="mt-5 text-center">
                        <input
                            type="text"
                            className="border p-2 rounded-md shadow-inner focus:bg-blue-50 block w-full mb-5"
                            value={input}
                            placeholder="enter task"
                            onChange={(e) => {
                                setInput(e.target.value);
                            }}
                        />
                        <ButtonComponent fn={buttonClicked} ml="0" addClass="">
                            Add Task
                        </ButtonComponent>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default Form;
