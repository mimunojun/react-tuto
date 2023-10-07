import { useState } from "react";

const ButtonComponent = (props) => {
    let [val, setVal] = useState(0);
    return (
        <>
            <p>
                you clicked "{props.name}" {val} times.
            </p>
            <button
                onClick={() => {
                    setVal(++val);
                }}
            >
                {props.name}
            </button>
        </>
    );
};

const CountComponent = (props) => {
    let [count, setCount] = useState(0);
    const countUp = () => {
        if (props.setCount) {
            props.setCount(props.count + 1);
        } else {
            setCount(++count);
        }
    };
    const countDown = () => {
        if (props.setCount) {
            props.setCount(props.count - 1);
        } else {
            setCount(--count);
        }
    };

    return (
        <>
            <p>
                {props.name} current count: {props.count ? props.count : count}
            </p>
            <button onClick={countUp}>+</button>
            <button onClick={countDown}>-</button>
            <button onClick={countUp}>
                increase! {props.count ? props.count : count}
            </button>
        </>
    );
};

const ObjectStateComponent = () => {
    let [val, setVal] = useState({
        name: "",
        age: "",
    });
    const reset = () => {
        setVal({ name: "", age: "" });
    };
    return (
        <>
            <h2>Name: {val.name}</h2>
            <h2>Age: {val.age}</h2>
            <input
                type="text"
                value={val.name}
                onChange={(e) => {
                    setVal({ ...val, name: e.target.value });
                }}
            />
            <input
                type="number"
                value={val.age}
                onChange={(e) => {
                    setVal({ ...val, age: e.target.value });
                }}
            />
            <div>
                <button onClick={reset}>reset</button>
            </div>
        </>
    );
};

const ArrayStateComponent = () => {
    let [arr, setArr] = useState([0, 0, 0, 0, 0]);

    const shuffleHandler = () => {
        const newArr = new Array(arr.length);
        for (let i = 0; i < arr.length; i++) {
            newArr[i] = Math.floor(Math.random() * 10);
        }
        setArr(newArr);
    };

    const slideHandler = () => {
        const newArr = [...arr];
        const tail = newArr.pop();
        newArr.unshift(tail);
        setArr(newArr);
    };

    const reverseSlideHandler = () => {
        const newArr = [...arr];
        const top = newArr.shift();
        newArr.push(top);
        setArr(newArr);
    };

    return (
        <>
            <h2>{...arr}</h2>
            <button onClick={shuffleHandler}>shuffle</button>
            <button onClick={slideHandler}>slide</button>
            <button onClick={reverseSlideHandler}>reverse slide</button>
        </>
    );
};

const MultiStateButtonComponent = () => {
    let [state, setState] = useState("a");
    let [countA, setCountA] = useState(0);
    let [countB, setCountB] = useState(0);
    const changeStateHandler = () => {
        if (state === "a") {
            setState("b");
        } else {
            setState("a");
        }
    };
    return (
        <>
            <button onClick={changeStateHandler}>change state</button>
            <CountComponent
                key={state}
                name={state}
                count={state === "a" ? countA : countB}
                setCount={state === "a" ? setCountA : setCountB}
            />
        </>
    );
};

const ButtonDesc = [
    { name: "Button A" },
    { name: "Button B" },
    { name: "Button C" },
];

const MultiState = () => {
    return (
        <>
            <ButtonComponent {...ButtonDesc[0]} />
            <ButtonComponent {...ButtonDesc[1]} />
            <ButtonComponent {...ButtonDesc[2]} />
            <hr />
            <CountComponent />
            <hr />
            <ObjectStateComponent />
            <hr />
            <ArrayStateComponent />
            <hr />
            <MultiStateButtonComponent />
        </>
    );
};

export default MultiState;
