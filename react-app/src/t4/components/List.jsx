import ButtonComponent from "./ButtonComponent";
import Container from "./Container";
const List = ({ todoState }) => {
    const [todos, setTodos] = todoState;
    const completeButton = (id) => {
        const fn = () => {
            const newTodos = todos.filter((t) => {
                return t.id !== id;
            });
            setTodos(newTodos);
        };
        return <ButtonComponent fn={fn}>Complete</ButtonComponent>;
    };
    return (
        <Container>
            <div>
                <p className="text-gray-400 font-bold">List.js</p>
                <div className="m-5">
                    {todos.length !== 0 ? (
                        todos.map((todo) => {
                            return (
                                <p
                                    className="m-1 border rounded-md p-2 shadow-md relative"
                                    key={todo.id}
                                >
                                    {completeButton(todo.id)}
                                    <span className="m-2 font-bold">
                                        {todo.task}
                                    </span>
                                    <span className="text-gray-200 font-bold inline-block absolute mt-2 right-5">
                                        {todo.id}
                                    </span>
                                </p>
                            );
                        })
                    ) : (
                        <p className="italic text-gray-400">
                            currently no task!
                        </p>
                    )}
                </div>
            </div>
        </Container>
    );
};

export default List;
