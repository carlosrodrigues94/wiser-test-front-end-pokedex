import React from 'react';

import { Container, Content } from './styles';

interface IModalContainerProps {
  isOpen: boolean;
}

const ModalContainer: React.FC<IModalContainerProps> = ({
  isOpen,
  children,
}) => {
  return (
    <Container style={{ display: isOpen ? 'flex' : 'none' }}>
      <Content>{children}</Content>
    </Container>
  );
};

export { ModalContainer };
export default ModalContainer;
