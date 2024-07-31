import { Box, HStack, SimpleGrid, IconButton, Button as ChakraButton } from '@chakra-ui/react';



const Calculator = () => {

    return (
        <>
            <h2>Display</h2>
            <div>
                Pulsanti
                <SimpleGrid columns={1} spacing={2}>

                <HStack spacing={2}>
                    {["1", "2", "3", "+"].map((testo) => (
                        <ChakraButton colorScheme='teal' size='xs' borderRadius="100">
                            {testo}
                        </ChakraButton>

                    ))}

                </HStack>
                <HStack spacing="2">
                    {["4", "5", "6", "-"].map((testo) => (
                        <ChakraButton colorScheme='teal' size='xs' borderRadius="100">
                            {testo}
                        </ChakraButton>

                    ))}

                </HStack>
                <HStack spacing="2">
                    {["7", "8", "9", "X"].map((testo) => (
                        <ChakraButton colorScheme='teal' size='xs' borderRadius="100">
                            {testo}
                        </ChakraButton>
                    ))}
                </HStack>
                <HStack spacing="2">
                    {["C", "0", "/", "="].map((testo) => (
                        <ChakraButton colorScheme='teal' size='xs' borderRadius="100">
                            {testo}
                        </ChakraButton>
                    ))}
                </HStack>
                </SimpleGrid>
            </div>
        </>
    );
}


export default Calculator;