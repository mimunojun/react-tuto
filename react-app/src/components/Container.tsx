import "./Container.css";
import Profile from "./Profile";

const Container = (props) => {
    console.log(props);
    return <>{props.children}</>;
};

export default Container;
