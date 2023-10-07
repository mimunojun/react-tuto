import { useState } from "react";

const InlineStyle = () => {
    const [isSelected, setIsSelected] = useState(false);
    const buttonClicked = () => {
        if (isSelected) {
            setIsSelected(false);
        } else {
            setIsSelected(true);
        }
    };
    const divStyle = {
        textAlign: "center",
        marginTop: "5rem",
        border: "black 1px solid",
    };
    const buttonStyle = {
        width: 120,
        height: 60,
        display: "block",
        fontWeight: "bold",
        margin: "0 auto",
        borderRadius: 9999,
        border: "none",
        cursor: "pointer",
        backgroundColor: isSelected ? "pink" : "",
    };
    const pStyle = {
        fontWeight: "bold",
    };

    return (
        <>
            <div style={divStyle}>
                <button style={buttonStyle} onClick={buttonClicked}>
                    toggle
                </button>
                <p style={pStyle}>{isSelected && "clicked!"}</p>
            </div>
        </>
    );
};

export default InlineStyle;
