/* eslint-disable @typescript-eslint/no-empty-function */
import React, { ChangeEvent, useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';

import ModalContainer from '..';

import Button from '~/components/Buttons/Button';
import { actionPokemonShowRequest } from '~/store/modules/pokemon/show/actions';

import { Content } from './styles';

interface IModalSearchProps {
  isOpen: boolean;
  onClickOutside?: () => void;
  onClickCancel: () => void;
}

const ModalSearch: React.FC<IModalSearchProps> = ({
  isOpen,
  onClickCancel,
}) => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState('');

  const handleChangeInput = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      if (!event.target) return;
      const { value } = event.target;
      setInputValue(value);
    },
    [],
  );

  const handleSearch = useCallback(() => {
    dispatch(
      actionPokemonShowRequest({ name: inputValue.toLocaleLowerCase() }),
    );
  }, [dispatch, inputValue]);

  return (
    <ModalContainer isOpen={isOpen}>
      <Content>
        <strong>Type the Pokemon name</strong>

        <input
          placeholder="ex: Bulbasaur"
          onChange={handleChangeInput}
          value={inputValue}
        />
        <div className="line-buttons">
          <Button onClick={onClickCancel}>Cancel</Button>
          <Button onClick={handleSearch}>Confirm</Button>
        </div>
      </Content>
    </ModalContainer>
  );
};

export default ModalSearch;
