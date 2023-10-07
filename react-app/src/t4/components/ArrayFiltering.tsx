import { useState } from "react";
import AnimalList from "./AnimalList";
import AnimalFilter from "./AnimalFilter";

const ArrayFiltering = () => {
    const animals = ["Dog", "Cat", "Rat", "Sheep", null, "Cow", "Pig"];
    const [filterVal, setFilterVal] = useState("");
    const filteredAnimals = animals.filter((animal) => {
        const animalNotNull = animal ?? "null";
        return animalNotNull.indexOf(filterVal) !== -1;
    });
    return (
        <>
            <h2>array filtering</h2>
            <AnimalFilter filterState={[filterVal, setFilterVal]} />
            <AnimalList animals={filteredAnimals} />
        </>
    );
};

export default ArrayFiltering;
