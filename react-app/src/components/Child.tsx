import "./Child.css";
import { List } from "./List";
import React from "react";

type propsObj = {
    color?: string;
    num?: number;
    fn?: (str: string) => string;
    bool?: boolean;
    obj?: object;
};

const StyleTest = (props: propsObj) => {
    console.log(props);
    return (
        <div className={`component ${props.color}`}>
            <h3>Hello Component</h3>
            <h3>{props.num}</h3>
            <h3>{props.fn("af")}</h3>
            <h3>{props.bool ? "true" : "false"}</h3>
            <h3>{(props.obj.name, props.obj.age)}</h3>
        </div>
    );
};

export default StyleTest;
