const ButtonComponent = ({
    text,
    fn,
    color = "amber",
    ml = 0,
    children,
    addClass,
}) => {
    const mlClass = `ml-${ml} `;
    return (
        <button
            className={
                `bg-amber-500 p-3 rounded-3xl font-bold text-white text-sm shadow hover:bg-amber-600 ` +
                mlClass +
                addClass
            }
            onClick={fn}
        >
            {children}
        </button>
    );
};

export default ButtonComponent;
