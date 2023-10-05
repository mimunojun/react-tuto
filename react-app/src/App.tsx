import Container from "./components/Container";
import Profile from "./components/Profile";
import Hello from "./components/Hello";
import Bye from "./components/Bye";

const profiles = [
    { name: "John", age: 18, comment: "I'll be a super hero!" },
    { name: "Prince", age: 13, comment: "I'll be a king.", color: "red" },
];

function App() {
    const name = "Suzume";

    return (
        <>
            <Container>
                <Profile {...profiles[0]}></Profile>
                <Profile {...profiles[1]}></Profile>
            </Container>

            <Hello name={name} />
            <Bye name={name} />
        </>
    );
}

export default App;
