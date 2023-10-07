import { useState } from "react";
import Modal from "./Modal";
import { createPortal } from "react-dom";

const Portal = () => {
    const [isShown, setIsShown] = useState(false);

    const ModalPortal = ({ children }) => {
        const target = document.querySelector(".container");
        return createPortal(children, target);
    };

    return (
        <>
            <div onClick={() => console.log("empty div")}>
                <h3 className="text-3xl font-bold">portal test</h3>
                <button
                    onClick={() => {
                        setIsShown(true);
                    }}
                >
                    click to show modal
                </button>
                {isShown && (
                    <ModalPortal>
                        <Modal
                            fn={() => {
                                setIsShown(false);
                            }}
                        />
                    </ModalPortal>
                )}
                <div
                    onClick={() => console.log("container")}
                    className=" w-3/4 h-80 mx-auto m-20 container"
                ></div>
            </div>
        </>
    );
};

export default Portal;
