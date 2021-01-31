import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ButtonPagination from '~/components/Buttons/ButtonPagination';
import ButtonSearch from '~/components/Buttons/ButtonSearch';
import CardPokemon from '~/components/CardPokemon';
import ModalPokemonDetail from '~/components/Modals/ModalPokemonDetail';
import ModalSearch from '~/components/Modals/ModalSearch';
import { actionSetShowModalRequest } from '~/store/modules/modals/actions';
import { IModalState } from '~/store/modules/modals/types';
import { actionPokemonIndexRequest } from '~/store/modules/pokemon/index/actions';
import { IPokemonIndexState } from '~/store/modules/pokemon/index/types';
import { actionPokemonShowRequest } from '~/store/modules/pokemon/show/actions';
import { IState } from '~/store/types';
import IPokemon from '~/types/IPokemon';
import modals from '~/utils/modals';

import { Container, ContentList } from './styles';

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);

  const { data: showModal } = useSelector<IState, IModalState>(
    state => state.modals,
  );

  const { data: pokemons, loading, pagination } = useSelector<
    IState,
    IPokemonIndexState
  >(state => state.pokemonIndex);

  /** Navigate to Next Page */
  const handleClickNextPage = useCallback(() => {
    if (loading) return;
    if (page === pagination.lastPage) return;
    setPage(page + 1);
    dispatch(actionPokemonIndexRequest({ page }));
  }, [dispatch, page, loading, pagination]);

  /** Go Back to Previous Page */
  const handleClickPreviousPage = useCallback(() => {
    if (loading) return;
    if (page === 1) return;
    setPage(page - 1);
    dispatch(actionPokemonIndexRequest({ page }));
  }, [dispatch, page, loading]);

  const handleClickCard = useCallback(
    (pokemon: IPokemon) => {
      dispatch(actionPokemonShowRequest({ name: pokemon.name }));
    },
    [dispatch],
  );

  const handleClickButtonSearch = useCallback(() => {
    dispatch(actionSetShowModalRequest(modals.MODAL_SEARCH_POKEMON));
  }, [dispatch]);

  const handleCloseModal = useCallback(() => {
    dispatch(actionSetShowModalRequest(modals.NO_MODAL));
  }, [dispatch]);

  useEffect(() => {
    dispatch(actionPokemonIndexRequest({ page }));
  }, [dispatch, page]);

  return (
    <>
      <ModalPokemonDetail
        isOpen={showModal === modals.MODAL_POKEMON_DETAILS && true}
        onClickClose={handleCloseModal}
      />
      <ModalSearch
        isOpen={showModal === modals.MODAL_SEARCH_POKEMON && true}
        onClickCancel={handleCloseModal}
      />
      <Container>
        <ContentList>
          <ButtonSearch onClick={handleClickButtonSearch} />
          <h2>Choose a Pokemon</h2>
          <ul>
            {pokemons.map(pokemon => {
              return (
                <li key={Math.random()}>
                  <CardPokemon
                    pokemon={pokemon}
                    onClickCard={handleClickCard}
                  />
                </li>
              );
            })}
          </ul>
          <div className="content-buttons-pagination">
            <ButtonPagination onClick={handleClickPreviousPage}>
              Back
            </ButtonPagination>
            <ButtonPagination onClick={handleClickNextPage}>
              Next
            </ButtonPagination>
          </div>
        </ContentList>
      </Container>
    </>
  );
};

export default Home;
