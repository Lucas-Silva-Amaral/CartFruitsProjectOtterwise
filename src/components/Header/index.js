import {
  Flex,
  Text,
  IconButton,
  Stack,
  InputGroup,
  InputLeftElement,
  Input,
  PhoneIcon,
  CheckIcon,
  InputRightElement,
} from '@chakra-ui/react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { HiX } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';
import { Search2Icon } from '@chakra-ui/icons';

const Header = props => {
  const { valueSearch, handleChange } = props;
  const navigate = useNavigate();

  // filter search

  return (
    <>
      <Flex
        borderRadius={5}
        boxShadow="0px 0px 10px rgba(0, 0, 0, 0.25)"
        justifyContent={'space-between'}
        p={'10'}
        alignItems={'center'}
        bgGradient={'linear(to-l, black, green)'}
      >
        <Text mr={'10'} color={'white'} fontSize={['1.5rem', '2rem', '3rem']}>
          Fruteira.com
        </Text>
        <Flex alignItems="center" gap="10px">
          <Stack
            hidden={`${window.location.pathname}` === '/cart' ? true : false}
          >
            <InputGroup>
              <Input
                pt="10px"
                pb="10px"
                minW="100%"
                placeholder="Busca"
                color="White"
                value={valueSearch}
                onChange={handleChange}
              />
              <InputRightElement align="center" children={<Search2Icon />} />
            </InputGroup>
          </Stack>
          <IconButton
            aria-label="Go to cart"
            onClick={() => navigate('/cart')}
            _hover={{ backgroundColor: 'red' }}
            p="25px"
            icon={<AiOutlineShoppingCart />}
            hidden={`${window.location.pathname}` === '/cart' ? true : false}
          />

          <IconButton
            aria-label="Go to home"
            onClick={() => navigate('/')}
            _hover={{ backgroundColor: 'red' }}
            p="25px"
            icon={<HiX />}
            hidden={`${window.location.pathname}` === '/' ? true : false}
          />
        </Flex>
      </Flex>
    </>
  );
};

export default Header;
