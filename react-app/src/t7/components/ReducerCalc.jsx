import { useReducer } from "react";

const initState = {
    a: 1,
    b: 2,
    method: "add",
    result: 3,
};

const reducer = (prev, action) => {
    const newState = { ...prev };

    const calc = () => {
        switch (newState.method) {
            case "add":
                newState.result = newState.a + newState.b;
                break;
            case "sub":
                newState.result = newState.a - newState.b;
                break;
            case "mul":
                newState.result = newState.a * newState.b;
                break;
            case "div":
                newState.result = newState.a / newState.b;
                break;
            default:
                throw new Error("method err");
        }
    };

    switch (action.act) {
        case "changeA":
            newState.a = action.a;
            break;
        case "changeB":
            newState.b = action.b;
            break;
        case "changeMethod":
            newState.method = action.method;
            break;
    }

    calc();

    return newState;
};

const ReducerCalc = () => {
    const [state, dispatch] = useReducer(reducer, initState);
    return (
        <div className="container mx-auto p-5 m-5">
            <h2>Reducer Calculator</h2>
            <div>
                <label>
                    a:
                    <input
                        type="number"
                        className="shadow-inner border rounded-md m-2"
                        value={state.a}
                        onChange={(e) => {
                            dispatch({
                                a: parseInt(e.target.value),
                                act: "changeA",
                            });
                        }}
                    />
                </label>
                <label>
                    b:
                    <input
                        type="number"
                        className="shadow-inner border rounded-md m-2"
                        value={state.b}
                        onChange={(e) => {
                            dispatch({
                                b: parseInt(e.target.value),
                                act: "changeB",
                            });
                        }}
                    />
                </label>
            </div>
            <div>
                <select
                    name="method"
                    id="method"
                    onChange={(e) => {
                        dispatch({
                            act: "changeMethod",
                            method: e.target.value,
                        });
                    }}
                >
                    <option value="add">add</option>
                    <option value="sub">sub</option>
                    <option value="mul">mul</option>
                    <option value="div">div</option>
                </select>
            </div>
            <div>
                <h2>result: {state.result}</h2>
            </div>
        </div>
    );
};

export default ReducerCalc;
