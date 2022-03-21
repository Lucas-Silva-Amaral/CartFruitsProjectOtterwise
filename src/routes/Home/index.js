import Card from '../../components/Card';
import { useState } from 'react';
import Header from '../../components/Header';
import data from '../../data';
import { Container, SimpleGrid, Text } from '@chakra-ui/react';
import { useCart } from '../../context/CartContext';

const Home = () => {
  const [cartTwo, setCartTwo] = useState(data);

  const filterData = e => {
    const value = e.target.value.toLowerCase();
    console.log(value);
    if (value !== '') {
      const filtered = data.filter(item => {
        return item.name.toLowerCase().includes(value);
      });
      setCartTwo(filtered);
    } else {
      setCartTwo(data);
    }
  };
  const dete = [];
  console.log(cartTwo);

  // useEffect(() => {
  //   // setCartTwo(data);
  // }, [cartTwo]);

  return (
    <>
      <Header handleChange={filterData} />
      <Container maxW="container.xl" mt="50px" gap="10px">
        <SimpleGrid columns={[1, 2, 3, 4, 5]}>
          {cartTwo && cartTwo.length > 0 ? (
            cartTwo.map(item => (
              <Card
                key={item.id}
                id={item.id}
                name={item.name}
                image={item.image}
                price={item.price}
                valueUnit={item.valueUnit}
                quantity={item.quantity}
              />
            ))
          ) : (
            <Text fontSize="50px">Não há produtos cadastrados</Text>
          )}
        </SimpleGrid>
      </Container>
    </>
  );
};

export default Home;
