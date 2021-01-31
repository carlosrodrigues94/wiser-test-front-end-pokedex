import React from 'react';

import { Container } from './styles';
import { badgeIcons } from '~/assets/badgeIcons';
import { ITypeName } from '~/types/IPokemon';

interface IBadgeTypeProps {
  type: ITypeName;
}

const BadgeType: React.FC<IBadgeTypeProps> = ({ type }) => {
  return (
    <Container type={type}>
      <img src={badgeIcons[type]} alt="badge" />
      <strong>{type}</strong>
    </Container>
  );
};

export default BadgeType;
