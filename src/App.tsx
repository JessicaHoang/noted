import { 
  ChakraProvider, 
  Grid,
  Box } from "@chakra-ui/react"
import './App.css';

function App() {
  return (
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
  );
}

export default App;

// import React from 'react';
// function App() {
//   return (
//     <div className="App">
//       My App
//     </div>
//   );
// }
