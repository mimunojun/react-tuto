import AnimalItem from "./AnimalItem";
const AnimalList = ({ animals }) => {
    if (animals.length === 0) {
        return <p>animal not found</p>;
    }
    return (
        <ul>
            {animals.map((animal) => {
                const strongStar = <strong>*</strong>;
                return <AnimalItem key={animal} animal={animal} />;
            })}
        </ul>
    );
};

export default AnimalList;
