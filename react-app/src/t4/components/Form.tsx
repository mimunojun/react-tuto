import { useState } from "react";
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
            <div className="container">
                <p className="title">Form.js</p>
                <input
                    type="text"
                    value={input}
                    placeholder="enter task"
                    onChange={(e) => {
                        setInput(e.target.value);
                    }}
                />
                <button onClick={buttonClicked}>add</button>
            </div>
        </>
    );
};

export default Form;
