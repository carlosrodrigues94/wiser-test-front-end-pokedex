import React, { ButtonHTMLAttributes } from 'react';
import { FaSearch } from 'react-icons/fa';

import { Container } from './styles';

type IButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const ButtonSearch: React.FC<IButtonProps> = ({ ...rest }) => {
  return (
    <Container type="button" {...rest}>
      <FaSearch />
    </Container>
  );
};

export default ButtonSearch;
