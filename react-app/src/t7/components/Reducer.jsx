import { useState, useReducer } from "react";

const Reducer = () => {
    const [state, setState] = useState(0);
    const [rstate, dispatch] = useReducer((prev, action) => {
        if (action === "+") {
            return ++prev;
        } else if (action === "-") {
            return --prev;
        }
    }, 0);

    const countUp = () => {
        setState((prev) => ++prev);
    };
    const rcountUp = () => dispatch("+");
    const rcountDown = () => dispatch("-");

    return (
        <>
            <div className="mr-0 flex">
                <div className="container m-4 p-5 basis-1/2">
                    <h2>State</h2>
                    <h2>{state}</h2>
                    <button onClick={countUp}>+</button>
                </div>
                <div className="container m-4 p-5 basis-1/2">
                    <h2>Reducer</h2>
                    <h2>{rstate}</h2>
                    <button onClick={rcountUp}>+</button>
                    <button onClick={rcountDown}>-</button>
                </div>
            </div>
        </>
    );
};

export default Reducer;
