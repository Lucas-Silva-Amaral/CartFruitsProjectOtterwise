import Card from '../../components/Card';
import { useState, useEffect } from 'react';
import Header from '../../components/Header';
import data from '../../data';
import { Container, SimpleGrid } from '@chakra-ui/react';
import ErrorMessage from '../../components/ErrorMessage';

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

  useEffect(() => {
    const cartLocal = window.localStorage.getItem('cart');
    if (cartLocal) {
      setCartTwo(data);
    }
  }, []);

  const verifCartTwo = cartTwo && cartTwo.length > 0;

  return (
    <>
      <Header handleChange={filterData} />
      <Container maxW="container.xl" mt="50px" gap="10px">
        <SimpleGrid columns={[1, 2, 3, 4, 5]}>
          {verifCartTwo &&
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
            ))}
        </SimpleGrid>
        {!verifCartTwo && (
          <ErrorMessage
            message="Produto não encontando!"
            message2="Busque algum produto existente!"
          />
        )}
      </Container>
    </>
  );
};

export default Home;
