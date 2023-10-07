const AnimalItem = ({ animal }) => {
    return (
        <li key={animal}>
            {(animal ?? "null") + (animal === "Sheep" ? "*" : "")}
        </li>
    );
};

export default AnimalItem;
