import { useState } from "react";
const KeyUnique = () => {
    const inputFact = () => ({
        key: Math.floor(Math.random() * 1e3),
        value: <input />,
    });

    const [inputs, setInputs] = useState([
        inputFact(),
        inputFact(),
        inputFact(),
    ]);

    const addHandler = () => {
        const newInputs = [inputFact(), ...inputs];
        setInputs(newInputs);
    };

    return (
        <>
            <p>
                <button onClick={addHandler}>add</button>
            </p>
            <strong>key of li is input.key</strong>
            <ul>
                {inputs.map((input) => (
                    <li key={input.key}>
                        {input.key}: {input.value}
                    </li>
                ))}
            </ul>
            <strong>key of li is index</strong>
            <ul>
                {inputs.map((input, index) => (
                    <li key={index}>
                        {input.key}: {input.value}
                    </li>
                ))}
            </ul>
        </>
    );
};

export default KeyUnique;
