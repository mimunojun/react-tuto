const Modal = ({ fn }) => {
    return (
        <>
            <div className="text-center">
                <div className="p-10 border shadow-lg inline-block m-auto rounded mt-20">
                    <p>this is a modal.</p>
                    <button className="" onClick={fn}>
                        click to hide
                    </button>
                </div>
            </div>
        </>
    );
};

export default Modal;
