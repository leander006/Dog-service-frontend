import React from 'react';
import ReactDOM from 'react-dom/client';

import { ChakraProvider } from '@chakra-ui/react'

import App from './App';
import ContextProvider from './Contexts/ContextProvider';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<ContextProvider>
  <React.StrictMode>
    <ChakraProvider>
    <App />
    </ChakraProvider>
  </React.StrictMode>
  </ContextProvider>

);


