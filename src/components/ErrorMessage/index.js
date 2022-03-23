import { Flex, Text } from '@chakra-ui/react';

const ErrorMessage = props => {
  return (
    <>
      <Flex
        flexDirection="column"
        h="50vh"
        justifyContent="center"
        alignItems="center"
      >
        <Text align="center" color="red.500" fontSize="2rem">
          {props.message}
        </Text>
        <Text align="center" color="black.500" fontSize="1rem">
          {props.message2}
        </Text>
      </Flex>
    </>
  );
};

export default ErrorMessage;
