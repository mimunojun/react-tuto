import { ChakraProvider } from "@chakra-ui/react";

import Todo from "../t4/Todo";
const ChakraTodo = () => {
    return (
        <>
            <ChakraProvider>
                <Todo />
            </ChakraProvider>
        </>
    );
};

export default ChakraTodo;
