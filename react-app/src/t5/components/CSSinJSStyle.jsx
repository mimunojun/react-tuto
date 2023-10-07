import { useState } from "react";
import styled from "styled-components";

const CSSinJSStyle = () => {
    const [isSelected, setIsSelected] = useState(false);
    const buttonClicked = () => {
        setIsSelected(!isSelected);
    };

    console.dir(styled);
    const StyledButton = styled.button`
        width: 120px;
        height: 60px;
        display: block;
        font-weight: bold;
        margin: 0 auto;
        border-radius: 9999px;
        border: none;
        cursor: pointer;
        background-color: ${({ isSelected }) => (isSelected ? "pink" : false)};
    `;

    return (
        <>
            <div>
                <StyledButton isSelected={isSelected} onClick={buttonClicked}>
                    button
                </StyledButton>
                <div>
                    <button onClick={buttonClicked}>toggle</button>
                </div>
                <div>
                    <button onClick={buttonClicked}>subbutton</button>
                </div>
                <div>
                    <button onClick={buttonClicked}>olive</button>
                </div>

                <p>{isSelected && "clicked!"}</p>
            </div>
        </>
    );
};

export default CSSinJSStyle;
