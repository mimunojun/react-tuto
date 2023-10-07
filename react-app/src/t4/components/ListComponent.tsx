const ListComponent = () => {
    const animals = ["Dog", "Cat", "Rat"];
    const animalList = [];
    for (let e of animals) {
        animalList.push(<li key={e}>{e}</li>);
    }

    const helloAnimals = animals.map((animal) => (
        <li key={animal}>Hello, {animal}</li>
    ));

    return (
        <>
            <h3>array manipulation</h3>
            <ul>{animalList}</ul>
            <ul>{helloAnimals}</ul>
        </>
    );
};

export default ListComponent;
