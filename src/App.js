import React from 'react';
import './assets/App.css';
import { ChakraProvider } from '@chakra-ui/react'
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeScreen from './app/HomeScreen';

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <HomeScreen />
      </div>
    </ChakraProvider>
  );
}

export default App;
