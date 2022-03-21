import { useState } from 'react';
import {
  Button,
  Image,
  Text,
  Flex,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Container,
} from '@chakra-ui/react';
import { useCart } from '../../context/CartContext';

const CartContent = props => {
  const { image, name, id, defaultValue, price, tep, sion } = props;
  const { removeFromCart, changeQuantity } = useCart();
  const [quantity, setQuantity] = useState(defaultValue);
  const handleChange = value => {
    setQuantity(value);
  };

  return (
    <>
      <Container maxW="container.xl">
        <Flex
          bg="white"
          _hover={{
            transform: 'scale(1.02)',
            transition: 'transform 0.2s',
          }}
          justifyContent="space-between"
          alignItems="center"
          w={'100%'}
          border="1px solid rgba(0, 0, 0, 0.15)"
          borderRadius="15px"
          mb="5px"
          p="10px"
          boxShadow={'5px 5px 10px rgba(0, 0, 0, 0.50)'}
        >
          <Image w={'100px'} src={image} alt={name} />
          <Text fontSize="xl" fontWeight="bold" mt={2}>
            {name}
          </Text>
          <Text fontWeight="black" fontSize="sm" mt={'0.5rem'}>
            R${' '}
            {Math.abs(price * quantity)
              .toFixed(2)
              .replace('.', ',')}
          </Text>
          <NumberInput
            maxW={24}
            size="md"
            defaultValue={defaultValue}
            value={quantity}
            min={0}
            step={tep}
            precision={sion}
            onChange={handleChange}
          >
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
          <Button
            colorScheme="blue"
            onClick={() => changeQuantity(id, quantity)}
          >
            Atualizar
          </Button>
          <Button
            _hover={{
              backgroundColor: 'red',
              transform: 'scale(1.1)',
              transition: 'transform 0.2s',
            }}
            onClick={() =>
              removeFromCart({
                id,
              })
            }
          >
            X
          </Button>
        </Flex>
      </Container>
    </>
  );
};
export default CartContent;
