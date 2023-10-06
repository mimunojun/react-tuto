import { useState } from "react";
import "./State.css";

const State = () => {
    const clickHandler = () => {
        alert("button was clicked.");
    };

    const inputHandler = () => {
        console.log("on change detected");
    };

    let [val, setVal] = useState("");

    return (
        <>
            <button onClick={clickHandler}>click me</button>
            <h3>event listener test. see the console.</h3>
            <ul>
                <li>
                    <label>
                        <h4>onBlur, onChange, onFocus:</h4>
                        <input
                            type="text"
                            onChange={() => {
                                console.log("onChange detected");
                            }}
                            onBlur={() => {
                                console.log("onBlur detected");
                            }}
                            onFocus={() => {
                                console.log("onFocus detected");
                            }}
                        />
                    </label>
                </li>
                <li>
                    <label>
                        <h4>retrieve input:</h4>
                        <input
                            type="text"
                            onChange={(e) => {
                                console.log(e.target.value);
                            }}
                        />
                    </label>
                </li>
                <div
                    className="hover-event"
                    onMouseEnter={() => console.log("mouse entered")}
                    onMouseLeave={() => console.log("mouse leaved")}
                >
                    hover me!
                </div>
                <li>
                    <label>
                        <h4>change html element</h4>
                        <input
                            type="text"
                            onChange={(e) => {
                                setVal(e.target.value);
                            }}
                        />{" "}
                        = {val}
                    </label>
                </li>
            </ul>
        </>
    );
};

export default State;
