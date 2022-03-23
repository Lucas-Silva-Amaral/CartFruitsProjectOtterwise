import { Button, Container, Flex } from '@chakra-ui/react';
import { useState } from 'react';
import React from 'react';
import CartContent from '../../components/CartContent';
import { Text } from '@chakra-ui/react';
import Header from '../../components/Header';
import { useCart } from '../../context/CartContext';
import { useNavigate } from 'react-router-dom';
import FinishBuy from '../../components/FinishBuy';

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

  const verfCart = cart && cart.length > 0;

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
              />
            );
          })}
        </Container>
        {
          <Flex pt="20px" flexDirection="column">
            <Text align="center" fontSize={['2xl', '3xl']} fontWeight="black">
              Valor Total {` R$ ${total.toFixed(2)}`}
            </Text>

            <Flex
              flexDirection={['column', 'row']}
              justifyContent="center"
              p="2rem"
              gap="20px"
            >
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
              <FinishBuy
                disabled={!verfCart}
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
              />
            </Flex>
          </Flex>
        }
      </Container>
    </>
  );
};

export default Cart;
