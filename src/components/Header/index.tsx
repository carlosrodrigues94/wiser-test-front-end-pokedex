import React, { useContext } from 'react';
import { FiMoon, FiSun } from 'react-icons/fi';
import { useSelector } from 'react-redux';
import Switch from 'react-switch';

import { ThemeContext } from 'styled-components';

import { IPokemonIndexState } from '~/store/modules/pokemon/index/types';
import { IPokemonShowState } from '~/store/modules/pokemon/show/types';
import { IState } from '~/store/types';

import Spinner from '../Loadings/Spinner';
import { Container } from './styles';

interface IHeaderProps {
  toggleTheme: () => void;
}

const Header: React.FC<IHeaderProps> = ({ toggleTheme }) => {
  const { colors, title } = useContext(ThemeContext);
  const { loading: loadingIndex } = useSelector<IState, IPokemonShowState>(
    state => state.pokemonShow,
  );
  const { loading: loadingShow } = useSelector<IState, IPokemonIndexState>(
    state => state.pokemonIndex,
  );
  return (
    <Container>
      <h1>Pokedex</h1>
      <Spinner isLoading={loadingIndex || loadingShow} />
      <div>
        {title === 'light' ? <FiSun /> : <FiMoon />}
        <Switch
          onChange={toggleTheme}
          onColor={colors.success}
          offColor={colors.danger}
          checkedIcon={false}
          uncheckedIcon={false}
          checked={title === 'dark' && true}
          boxShadow={`0 0 5px ${colors.shadow}`}
        />
      </div>
    </Container>
  );
};

export default Header;
