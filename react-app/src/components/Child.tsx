import "../StyleTest.css";
import { List } from "./List";
import React from "react";

const StyleTest = () => {
    return (
        <React.Fragment>
            <div className="component">
                <h3>Hello Component</h3>
                <List />
            </div>
            <h3>Hello Fragment</h3>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aliquid, hic modi totam repellendus consequatur eum veniam
                adipisci atque similique molestiae itaque nisi ipsam doloremque?
                Cupiditate nemo harum repellat? Doloremque, laboriosam.
            </p>
        </React.Fragment>
    );
};

export default StyleTest;
