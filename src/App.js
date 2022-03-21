import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { CartProvider } from './context/CartContext';
import Home from './routes/Home';
import Cart from './routes/Cart';

function App() {
  return (
    <>
      <CartProvider>
        <ChakraProvider resetCSS>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </BrowserRouter>
        </ChakraProvider>
      </CartProvider>
    </>
  );
}

export default App;
