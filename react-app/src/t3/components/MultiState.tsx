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
        </>
    );
};

export default MultiState;
