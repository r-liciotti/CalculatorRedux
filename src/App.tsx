import React from 'react';
import { Box, SimpleGrid, Button as ChakraButton } from '@chakra-ui/react';

import logo from './logo.svg';
import Calculator from "./components/Calculator";
//import './App.css';

function App() {
  return (
    <>
      <Box
        maxW="600px"
        mx="auto"
        mt={10}
        p={5}
        boxShadow="md"
        borderRadius="md"
        bg="white">

        <Calculator />
      </Box>
    </>
  );
}

export default App;
