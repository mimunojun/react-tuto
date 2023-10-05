import Expression from "./components/Expression";
import Child from "./components/Child";

function App() {
    const hello = (str: string) => `hello ${str}`;

    return (
        <>
            <Child
                color="red"
                num={123}
                fn={hello}
                bool
                obj={{ name: "Tom", age: "18" }}
            />
            {/* <Child color="red" /> */}
        </>
    );
}

export default App;
