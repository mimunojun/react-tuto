import { useState } from "react";
import Profile from "./Profile";

const SearchProfile = () => {
    const [query, setQuery] = useState("");
    const people = [
        { name: "piyo", age: 8, hobbies: ["crying", "farming"] },
        { name: "suzume", age: 3, hobbies: ["watching human", "feeding"] },
    ];
    const searchHandler = (e) => {
        setQuery(e.target.value);
    };
    return (
        <>
            <h2>search profile</h2>
            <label>
                <strong>query: </strong>
                <input type="text" value={query} onChange={searchHandler} />
            </label>

            <ul>
                {people
                    .filter((val) => {
                        return val.name.indexOf(query) !== -1;
                    })
                    .map((person) => (
                        <li key={person.name}>
                            <hr />
                            <Profile {...person} />
                        </li>
                    ))}
            </ul>
        </>
    );
};

export default SearchProfile;
