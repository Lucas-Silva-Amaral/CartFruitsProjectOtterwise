import React from 'react';
import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { useCart } from '../../context/CartContext';
import { useNavigate } from 'react-router-dom';

function FinishBuy(props) {
  const { clearCart } = useCart();
  const navigate = useNavigate();
  const OverlayTwo = () => (
    <ModalOverlay
      bg="none"
      backdropFilter="auto"
      backdropInvert="80%"
      backdropBlur="2px"
    />
  );

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = React.useState(<OverlayTwo />);

  return (
    <>
      <Button
        disabled={props.disabled}
        colorScheme="green"
        onClick={() => {
          setOverlay(<OverlayTwo />);
          onOpen();
          clearCart();
        }}
      >
        Finalizar compra
      </Button>
      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        {overlay}
        <ModalContent>
          <ModalHeader>Compra finalizada com Sucesso!</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>Obrigado pela preferencia, volte sempre!</Text>
          </ModalBody>
          <ModalFooter>
            <Button
              alignItems={'center'}
              colorScheme="green"
              onClick={() => {
                onClose();
                navigate('/');
              }}
            >
              Continuar comprando
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default FinishBuy;
