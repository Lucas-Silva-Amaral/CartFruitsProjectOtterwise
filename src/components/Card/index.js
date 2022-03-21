import {
  Text,
  Image,
  Flex,
  Button,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  useToast,
  Stack,
} from '@chakra-ui/react';
import React from 'react';
import { useCart } from '../../context/CartContext';

const Card = props => {
  const { name, price, valueUnit, image, id } = props;
  const [quantity, setQuantity] = React.useState(0);
  const handleChange = value => setQuantity(value);
  const { addToCart, cart } = useCart();
  const toast = useToast();

  return (
    <>
      <Flex
        flexDirection="column"
        gap="10px"
        p="20px"
        w="auto"
        borderWidth="1px"
        borderRadius="xl"
        alignItems="center"
        boxShadow="5px 5px 10px rgba(0, 0, 0, 0.50)"
        boxSizing="border-box"
        m="5px"
      >
        <Image w="150px" boxSizing="border-box" src={image} alt={name} />
        <Text fontSize="x-large">{name}</Text>
        <Text fontWeight="semibold" fontSize="2x1">{`${price
          .toFixed(2)
          .replace('.', ',')} ${valueUnit}`}</Text>
        <Flex alignItems="center" gap="10px">
          <Stack>
            <NumberInput
              onChange={handleChange}
              value={quantity}
              size="md"
              maxW={24}
              defaultValue={0}
              min={0}
              step={valueUnit === 'Kg' ? 0.1 : 1}
              precision={valueUnit === 'Kg' ? 1 : 0.1}
            >
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </Stack>
          <Text fontWeight="bold">{valueUnit}</Text>
        </Flex>
        <Flex
          flexDirection="column"
          boxSizing="border-box"
          alignItems="center"
          gap="10px"
        >
          <Text fontWeight="black" fontSize="xl" mt="10px">
            Total: R$
            {(quantity * price).toFixed(2).replace('.', ',')}
          </Text>

          <Button
            onClick={() => {
              addToCart({
                id,
                name,
                image,
                quantity,
                total: quantity * price,
                valueUnit,
                price,
              });

              toast({
                title: 'Item adicionado',
                description: 'O item foi adicionado com sucesso no carrinho',
                status: 'success',
                duration: 1500,
              });
            }}
            mt="5px"
            colorScheme="blue"
            isDisabled={quantity > 0 ? false : true}
          >
            Adicionar no carrinho
          </Button>
        </Flex>
        <pre>{JSON.stringify(cart.cart)}</pre>
      </Flex>
    </>
  );
};

export default Card;
