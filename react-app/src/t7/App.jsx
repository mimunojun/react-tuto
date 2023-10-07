import { StrictMode } from "react";
import Reducer from "./components/Reducer";
import ReducerCalc from "./components/ReducerCalc";
const App = () => {
    return (
        <>
            <StrictMode>
                <Reducer />
                <hr />
                <ReducerCalc />
            </StrictMode>
        </>
    );
};

export default App;
