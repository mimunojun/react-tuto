import { VStack, StackDivider } from "@chakra-ui/react";

const List = ({ todoState }) => {
    const [todos, setTodos] = todoState;
    const completeButton = (id) => {
        return (
            <button
                onClick={() => {
                    const newTodos = todos.filter((t) => {
                        return t.id !== id;
                    });
                    setTodos(newTodos);
                }}
            >
                complete
            </button>
        );
    };
    return (
        <VStack divider={<StackDivider borderColor="gray.200" />}>
            <div className="container">
                <p className="title">List.js</p>
                {todos.length !== 0 ? (
                    todos.map((todo) => {
                        return (
                            <p key={todo.id}>
                                {completeButton(todo.id)}
                                {todo.task}
                            </p>
                        );
                    })
                ) : (
                    <p>no task</p>
                )}
            </div>
        </VStack>
    );
};

export default List;
