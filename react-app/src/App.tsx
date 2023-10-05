import Expression from "./components/Expression";
import Child from "./components/Child";
import Container from "./components/Container";
import Profile from "./components/Profile";

const profiles = [
    { name: "John", age: 18, comment: "I'll be a super hero!" },
    { name: "Prince", age: 13, comment: "I'll be a king.", color: "red" },
];

function App() {
    const hello = (str: string) => `hello ${str}`;

    return (
        <>
            <Container>
                <Profile {...profiles[0]}></Profile>
                <Profile {...profiles[1]}></Profile>
            </Container>
        </>
    );
}

export default App;
