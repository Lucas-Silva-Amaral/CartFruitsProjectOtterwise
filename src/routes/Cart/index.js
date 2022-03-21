import { Button, Container, Flex, Box } from '@chakra-ui/react';
import { useState } from 'react';
import React from 'react';
import CartContent from '../../components/CartContent';
import { Text } from '@chakra-ui/react';
import Header from '../../components/Header';
import { useCart } from '../../context/CartContext';
import { useNavigate } from 'react-router-dom';

export const Cart = () => {
  const { cart, clearCart } = useCart();
  const [cartTwo, setCartTwo] = useState([]);
  const [total, setTotal] = useState(0);
  const navigate = useNavigate();

  React.useEffect(() => {
    setCartTwo(cart);
  }, [cart]);

  React.useEffect(() => {
    const totalCart = cart.reduce((acc, item) => {
      return acc + item.price * item.quantity;
    }, 0);
    setTotal(totalCart);
  }, [cart]);

  return (
    <>
      <Header />
      <Container
        borderRadius="20px"
        mt="50px"
        mb="25px"
        p="5px 5px 0 5px"
        bg="whiteSmoke"
        maxW="container.lg"
        h="auto"
        boxShadow="2px 2px 10px 10px rgba(0, 0, 0, 0.50)"
      >
        <Container mt="25px" maxW="container.lg">
          {cart?.map(item => {
            return (
              <CartContent
                key={item.id}
                id={item.id}
                name={item.name}
                image={item.image}
                price={item.price}
                valueUnit={item.valueUnit}
                defaultValue={+item.quantity}
                total={item.price * item.quantity}
                tep={item.valueUnit === 'Kg' ? 0.1 : 1}
                sion={item.valueUnit === 'Kg' ? 1 : 0.1}
                // add hover effect transition e transform
              />
            );
          })}
        </Container>
        <Flex p="2rem" flexDirection="column">
          <Text align="center" fontSize="3xl" fontWeight="black">
            Valor Total {` R$ ${total.toFixed(2)}`}
          </Text>

          <Flex justifyContent="center" p="2rem" gap="20px">
            <Button onClick={() => navigate('/')} colorScheme="blue">
              Continuar comprando
            </Button>
            <Button
              colorScheme="red"
              onClick={() =>
                clearCart(
                  cartTwo.map(item => {
                    return {
                      id: item.id,
                      name: item.name,
                      image: item.image,
                      price: item.price,
                      valueUnit: item.valueUnit,
                      quantity: item.quantity,
                    };
                  })
                )
              }
            >
              Limpar carrinho
            </Button>
            <Button colorScheme="green">Finalizar compra</Button>
          </Flex>
        </Flex>
      </Container>
    </>
  );
};

export default Cart;
