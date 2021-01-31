import React from 'react';
import { AiOutlineLoading } from 'react-icons/ai';

import { Container } from './styles';

interface ISpinnerProps {
  isLoading?: boolean;
}

const Spinner: React.FC<ISpinnerProps> = ({ isLoading = false }) => {
  return (
    <Container isLoading={isLoading} className="spinner-loading">
      <AiOutlineLoading />
    </Container>
  );
};
export default Spinner;
