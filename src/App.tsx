import React from 'react';
import { Grid, GridItem, Box } from "@chakra-ui/react"
import { ChakraProvider } from "@chakra-ui/react"
import './App.css';

function App() {
  return (
    <div>
      <ChakraProvider>
        This is Text
        <Grid templateColumns="repeat(5, 1fr)" gap={6}>
        <Box w="100%" h="10" bg="blue.500" />
        <Box w="100%" h="10" bg="blue.500" />
        <Box w="100%" h="10" bg="blue.500" />
        <Box w="100%" h="10" bg="blue.500" />
        <Box w="100%" h="10" bg="blue.500" />
        </Grid>
    </ChakraProvider>
    </div>
    
  );
}

export default App;
